/**
 * remark-hover-preview.ts
 *
 * Replaces links to internal anchors (e.g., /foo#bar) with <HoverPreview href="/foo#bar">text</HoverPreview>
 * so they can be used with an Astro `.astro` component and AlpineJS hover logic.
 *
 * @returns transformer function
 */

import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root, Link } from "mdast";

const HoverPreviewPlugin: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, "link", (node: Link, index, parent) => {
      const href = node.url;
      const hasHash = href.includes("#");
      const isLocal = href.startsWith("/") || href.startsWith("./");

      if (hasHash && isLocal && parent && typeof index === "number") {
        const linkText = node.children
          .map((c) => ("value" in c ? c.value : ""))
          .join("")
          .trim();
        parent.children.splice(index, 1, {
          type: "mdxJsxFlowElement",
          name: "HoverLinkPreview",
          attributes: [
            { type: "mdxJsxAttribute", name: "href", value: href },
            ...(linkText
              ? [{ type: "mdxJsxAttribute", name: "text", value: linkText }]
              : []),
          ],
          children: [],
        } as any);
      }
    });
  };
};

export default HoverPreviewPlugin;
