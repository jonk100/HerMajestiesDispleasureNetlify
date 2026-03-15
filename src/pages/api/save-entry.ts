/**
 * save-entry.ts
 *
 * API endpoint — POST /api/save-entry
 *
 * Receives a JSON payload from WysiwygEditor, coerces field types,
 * serialises to YAML frontmatter + body, and writes file to disk
 * inside src/content/<collection>/.
 *
 * Request body shape:
 * {
 *   collection: string          // e.g. "scenes"
 *   entryId:    string | null   // existing slug (may contain "/"), or null for new
 *   data: {
 *     [field]: unknown          // frontmatter fields — strings, numbers, arrays, etc.
 *     body?: string             // raw body content (screenplay shorthand / markdown)
 *   }
 * }
 *
 * Success response  (200):  { success: true,  filePath: string }
 * Failure response  (400):  { success: false, message: string }
 * Error response    (500):  { success: false, message: string }
 */

import type { APIRoute } from "astro";
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

// Required: opts this endpoint out of static prerendering so POST requests
// are handled at runtime by the dev server / SSR adapter.
export const prerender = false;

// ─── Types ────────────────────────────────────────────────────────────────────

interface SaveRequest {
  collection: string;
  entryId?: string | null;
  data: Record<string, unknown> & { body?: string };
}

// ─── Collection metadata ──────────────────────────────────────────────────────

/**
 * Return the content-directory path (relative to project root) and file
 * extension for a given collection.
 *
 * Scenes use `.mdx` because the remark-screenplay plugin emits MDX JSX
 * elements; every other collection uses plain `.md`.
 *
 * @param collection - Astro content collection name.
 */
function getCollectionMeta(collection: string): { dir: string; ext: string } {
  return {
    dir: path.join("src", "content", collection),
    ext: collection === "scenes" ? ".mdx" : ".md",
  };
}

// ─── Type coercion ────────────────────────────────────────────────────────────

const NUMERIC_FIELDS = new Set([
  "act", "sequence", "scene_number", "episode_number", "beat_index",
  "page_count", "pressure_level", "estimated_runtime",
  "episode", "opened_in_episode", "closed_in_episode",
]);

const BOOLEAN_FIELDS = new Set(["needs_revision"]);

const DATE_FIELDS = new Set(["created", "updated", "date"]);

/**
 * Coerce raw form values into the runtime types expected by the Astro
 * content schemas. Empty strings and nulls are dropped.
 *
 * @param data - Raw key/value map from the POST body (body key excluded).
 * @returns A new object with correctly typed values.
 */
function coerceTypes(data: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(data)) {
    if (value === "" || value === null || value === undefined) continue;

    if (NUMERIC_FIELDS.has(key)) {
      const n = Number(value);
      if (!isNaN(n)) out[key] = n;
      continue;
    }

    if (BOOLEAN_FIELDS.has(key)) {
      out[key] = value === true || value === "true";
      continue;
    }

    if (DATE_FIELDS.has(key)) {
      const d = new Date(value as string);
      if (!isNaN(d.getTime())) out[key] = d;
      continue;
    }

    out[key] = value;
  }

  return out;
}

// ─── YAML serialisation ───────────────────────────────────────────────────────

/**
 * Escape characters that would break a YAML double-quoted scalar.
 *
 * @param str - Raw string value.
 */
function escapeYamlString(str: string): string {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

/**
 * Serialise a plain-object frontmatter record to a YAML string.
 * Supported types: string, number, boolean, Date, string[], number[].
 *
 * @param frontmatter - The coerced, type-correct frontmatter record.
 * @returns Multi-line YAML string without the `---` delimiters.
 */
function serialiseYaml(frontmatter: Record<string, unknown>): string {
  const lines: string[] = [];

  for (const [key, value] of Object.entries(frontmatter)) {
    if (value === undefined || value === null) continue;

    if (Array.isArray(value)) {
      if (value.length === 0) {
        lines.push(`${key}: []`);
      } else {
        lines.push(`${key}:`);
        for (const item of value) {
          lines.push(typeof item === "string"
            ? `  - "${escapeYamlString(item)}"` 
            : `  - ${item}`);
        }
      }
    } else if (value instanceof Date) {
      lines.push(`${key}: ${value.toISOString()}`);
    } else if (typeof value === "boolean") {
      lines.push(`${key}: ${value}`);
    } else if (typeof value === "number") {
      lines.push(`${key}: ${value}`);
    } else if (typeof value === "string") {
      if (value.includes("\n")) {
        const indented = value.split("\n").map((l) => `  ${l}`).join("\n");
        lines.push(`${key}: |`);
        lines.push(indented);
      } else {
        lines.push(`${key}: "${escapeYamlString(value)}"`);
      }
    } else if (typeof value === "object") {
      console.warn(`[save-entry] Skipping field "${key}": nested objects not supported.`);
    }
  }

  return lines.join("\n");
}

/**
 * Build the complete file content: YAML frontmatter block + body.
 *
 * @param frontmatter - Coerced frontmatter record.
 * @param body        - Raw body string from the editor.
 */
function buildFileContent(frontmatter: Record<string, unknown>, body: string): string {
  return `---\n${serialiseYaml(frontmatter)}\n---\n\n${body.trim()}\n`;
}

// ─── Slug helpers ─────────────────────────────────────────────────────────────

/**
 * Derive a URL-safe slug from a title string.
 *
 * @param title - Human-readable title to slugify.
 */
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-{2,}/g, "-");
}

// ─── Response helpers ─────────────────────────────────────────────────────────

function json400(message: string): Response {
  return new Response(JSON.stringify({ success: false, message }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}

// ─── Route handler ────────────────────────────────────────────────────────────

export const POST: APIRoute = async ({ request }) => {
  let payload: SaveRequest;
  try {
    payload = (await request.json()) as SaveRequest;
  } catch {
    return json400("Invalid JSON in request body.");
  }

  const { collection, entryId, data } = payload;

  if (!collection || typeof collection !== "string") {
    return json400("Missing or invalid 'collection' field.");
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return json400("Missing or invalid 'data' field.");
  }

  const { body: rawBody, ...frontmatterRaw } = data;
  const body = typeof rawBody === "string" ? rawBody : "";

  const frontmatter = coerceTypes(frontmatterRaw);

  const now = new Date();
  frontmatter.updated = now;
  if (!entryId) {
    frontmatter.created = frontmatter.created ?? now;
  } else {
    // Preserve existing created field when editing
    if (!frontmatter.created) {
      // If somehow missing, set it to now
      frontmatter.created = now;
    }
  }

  const { dir, ext } = getCollectionMeta(collection);

  let slug: string;
  if (entryId && typeof entryId === "string" && entryId.trim() !== "") {
    slug = entryId.trim();
  } else {
    const rawTitle =
      (frontmatter.title as string | undefined) ??
      (frontmatter.name as string | undefined) ?? "";
    if (!rawTitle.trim()) {
      return json400("Cannot create a new entry without a 'title' or 'name' field.");
    }
    slug = slugify(rawTitle);
  }

  const absoluteDir = path.resolve(process.cwd(), dir);
  const filePath = path.join(absoluteDir, `${slug}${ext}`);
  const fileDir = path.dirname(filePath);

  if (!existsSync(fileDir)) {
    await mkdir(fileDir, { recursive: true });
  }

  const content = buildFileContent(frontmatter, body);

  try {
    await writeFile(filePath, content, "utf-8");
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[save-entry] writeFile failed:", message);
    return new Response(
      JSON.stringify({ success: false, message: `File write error: ${message}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const relativePath = path.join(dir, `${slug}${ext}`);
  return new Response(
    JSON.stringify({ success: true, filePath: relativePath }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};
