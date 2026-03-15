/**
 * editorUtils.ts
 *
 * Utility functions for the WYSIWYG editor system.
 * Handles file operations, validation, and data processing.
 */

import type { CollectionEntry } from "astro:content";
import { getCollection, getEntry } from "astro:content";

// Type definitions
export interface EditorSaveRequest {
  collection: string;
  entryId?: string;
  data: {
    [key: string]: any;
    body?: string;
  };
}

export interface EditorResponse {
  success: boolean;
  message: string;
  entry?: CollectionEntry<any>;
}

/**
 * Validate data against collection schema
 */
export function validateCollectionData(collection: string, data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Basic validation rules based on collection
  switch (collection) {
    case 'scenes':
      if (!data.title || typeof data.title !== 'string') {
        errors.push('Title is required and must be a string');
      }
      if (data.act !== undefined && (typeof data.act !== 'number' || data.act < 1 || data.act > 5)) {
        errors.push('Act must be a number between 1 and 5');
      }
      if (data.sequence !== undefined && typeof data.sequence !== 'number') {
        errors.push('Sequence must be a number');
      }
      if (data.scene_number !== undefined && typeof data.scene_number !== 'number') {
        errors.push('Scene number must be a number');
      }
      break;

    case 'characters':
      if (!data.name || typeof data.name !== 'string') {
        errors.push('Name is required and must be a string');
      }
      if (data.role && !['protagonist', 'antagonist', 'supporting', 'minor'].includes(data.role)) {
        errors.push('Role must be one of: protagonist, antagonist, supporting, minor');
      }
      break;

    case 'episodes':
      if (!data.title || typeof data.title !== 'string') {
        errors.push('Title is required and must be a string');
      }
      if (!data.episode_number || typeof data.episode_number !== 'number' || data.episode_number < 1) {
        errors.push('Episode number is required and must be a positive number');
      }
      break;

    case 'beats':
      if (!data.title || typeof data.title !== 'string') {
        errors.push('Title is required and must be a string');
      }
      if (data.pressure_level !== undefined && (typeof data.pressure_level !== 'number' || data.pressure_level < 1 || data.pressure_level > 10)) {
        errors.push('Pressure level must be a number between 1 and 10');
      }
      break;
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Process and sanitize form data for saving
 */
export function processFormData(formData: any, collection: string): any {
  const processed: any = {};

  // Handle timestamps
  const now = new Date();
  processed.updated = now;

  // Process each field based on collection and field type
  for (const [key, value] of Object.entries(formData)) {
    if (key === 'body') {
      processed.body = value;
      continue;
    }

    // Skip empty values for optional fields
    if (value === '' || value === null || value === undefined) {
      continue;
    }

    // Process based on field name and type
    if (['act', 'sequence', 'scene_number', 'episode_number', 'beat_index', 'page_count', 'pressure_level', 'estimated_runtime'].includes(key)) {
      processed[key] = Number(value);
    } else if (['needs_revision'].includes(key)) {
      processed[key] = value === 'true' || value === true;
    } else if (['created', 'updated', 'date'].includes(key)) {
      processed[key] = new Date(value as string);
    } else if (key.includes('_') && typeof value === 'string' && value.startsWith('[')) {
      // Parse array fields from JSON strings
      try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) {
          processed[key] = parsed;
        } else {
          processed[key] = value;
        }
      } catch (e) {
        processed[key] = value;
      }
    } else {
      processed[key] = value;
    }
  }

  // Add created timestamp for new entries
  if (!formData.entryId) {
    processed.created = now;
  }

  return processed;
}

/**
 * Generate a slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Format file path for a collection entry
 */
export function getEntryFilePath(collection: string, slug: string): string {
  switch (collection) {
    case 'scenes':
      return `src/content/scenes/${slug}.mdx`;
    case 'characters':
      return `src/content/characters/${slug}.md`;
    case 'episodes':
      return `src/content/episodes/${slug}.md`;
    case 'beats':
      return `src/content/beats/${slug}.md`;
    case 'threads':
      return `src/content/threads/${slug}.md`;
    case 'locations':
      return `src/content/locations/${slug}.md`;
    case 'dialogue':
      return `src/content/dialogue/${slug}.md`;
    case 'research':
      return `src/content/research/${slug}.md`;
    case 'themes':
      return `src/content/themes/${slug}.md`;
    case 'timeline':
      return `src/content/timeline/${slug}.md`;
    default:
      return `src/content/${collection}/${slug}.md`;
  }
}

/**
 * Parse frontmatter and body from file content
 */
export function parseFileContent(content: string): { frontmatter: any; body: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, body: content };
  }

  try {
    // Simple YAML-like parsing (for basic structures)
    const frontmatterText = match[1];
    const body = match[2];
    const frontmatter: any = {};

    const lines = frontmatterText.split('\n');
    let currentKey: string | null = null;
    let inArray = false;
    let arrayDepth = 0;

    for (const line of lines) {
      const trimmed = line.trim();
      
      if (!trimmed) continue;
      
      if (trimmed.startsWith('#')) continue; // Skip comments
      
      const colonIndex = trimmed.indexOf(':');
      
      if (colonIndex > 0 && !inArray) {
        const key = trimmed.substring(0, colonIndex).trim();
        const value = trimmed.substring(colonIndex + 1).trim();
        
        if (value === '' || value === '|') {
          currentKey = key;
          inArray = true;
          frontmatter[key] = [];
        } else if (value.startsWith('"') && value.endsWith('"')) {
          frontmatter[key] = value.slice(1, -1);
        } else if (!isNaN(Number(value))) {
          frontmatter[key] = Number(value);
        } else if (value === 'true' || value === 'false') {
          frontmatter[key] = value === 'true';
        } else {
          frontmatter[key] = value;
        }
      } else if (inArray && currentKey) {
        if (trimmed.startsWith('- ')) {
          const item = trimmed.substring(2).trim();
          if (item.startsWith('"') && item.endsWith('"')) {
            frontmatter[currentKey].push(item.slice(1, -1));
          } else {
            frontmatter[currentKey].push(item);
          }
        } else {
          inArray = false;
          currentKey = null;
        }
      }
    }

    return { frontmatter, body };
  } catch (error) {
    console.error('Error parsing frontmatter:', error);
    return { frontmatter: {}, body: content };
  }
}

/**
 * Generate file content from frontmatter and body
 */
export function generateFileContent(frontmatter: any, body: string): string {
  const yamlLines: string[] = ['---'];
  
  for (const [key, value] of Object.entries(frontmatter)) {
    if (value === undefined || value === null) continue;
    
    if (Array.isArray(value)) {
      yamlLines.push(`${key}:`);
      for (const item of value) {
        if (typeof item === 'string') {
          yamlLines.push(`  - "${item}"`);
        } else {
          yamlLines.push(`  - ${item}`);
        }
      }
    } else if (typeof value === 'string') {
      yamlLines.push(`${key}: "${value}"`);
    } else if (typeof value === 'boolean') {
      yamlLines.push(`${key}: ${value}`);
    } else if (value instanceof Date) {
      yamlLines.push(`${key}: ${value.toISOString()}`);
    } else {
      yamlLines.push(`${key}: ${value}`);
    }
  }
  
  yamlLines.push('---');
  yamlLines.push('');
  yamlLines.push(body);
  
  return yamlLines.join('\n');
}

/**
 * Get all entries from a collection for reference dropdowns
 */
export async function getCollectionEntries(collectionName: string): Promise<any[]> {
  try {
    const entries = await getCollection(collectionName as any);
    return entries.map(entry => ({
      id: entry.id,
      slug: entry.slug,
      data: entry.data
    }));
  } catch (error) {
    console.error(`Error loading collection ${collectionName}:`, error);
    return [];
  }
}

/**
 * Check if a field is a reference field
 */
export function isReferenceField(fieldName: string, collection: string): boolean {
  const referenceMap: Record<string, string[]> = {
    scenes: ['location', 'characters'],
    episodes: ['scenes'],
    characters: ['first_appearance', 'last_appearance'],
    dialogue: ['characters', 'scene_reference'],
    beats: ['primary_character', 'opposition'],
    threads: ['characters'],
    timeline: ['characters_involved', 'scene_reference'],
    themes: ['character_connections', 'scene_references']
  };
  
  return referenceMap[collection]?.includes(fieldName) || false;
}

/**
 * Get the target collection for a reference field
 */
export function getTargetCollection(fieldName: string, collection: string): string {
  const referenceMap: Record<string, Record<string, string>> = {
    scenes: {
      location: 'locations',
      characters: 'characters'
    },
    episodes: {
      scenes: 'scenes'
    },
    characters: {
      first_appearance: 'scenes',
      last_appearance: 'scenes'
    },
    dialogue: {
      characters: 'characters',
      scene_reference: 'scenes'
    },
    beats: {
      primary_character: 'characters',
      opposition: 'characters'
    },
    threads: {
      characters: 'characters'
    },
    timeline: {
      characters_involved: 'characters',
      scene_reference: 'scenes'
    },
    themes: {
      character_connections: 'characters',
      scene_references: 'scenes'
    }
  };
  
  return referenceMap[collection]?.[fieldName] || '';
}

/**
 * Format a reference entry for display
 */
export function formatReferenceLabel(entry: any, collection: string): string {
  switch (collection) {
    case 'characters':
      return entry.data.name || entry.id;
    case 'locations':
      return entry.data.name || entry.id;
    case 'scenes':
      return `${entry.data.title} (Act ${entry.data.act || '?'}, Scene ${entry.data.scene_number || '?'})`;
    case 'episodes':
      return `${entry.data.title} (Episode ${entry.data.episode_number || '?'})`;
    default:
      return entry.data.title || entry.id;
  }
}
