#!/usr/bin/env tsx

/**
 * Migration script: Beats schema refactor to five-axis structural model
 * 
 * This script migrates beat entries from the old beat_type enum to the new
 * five-axis model: movement_type, information_type, scope, pressure_level, irreversibility
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

// Migration mapping table
type BeatType = 'escalation' | 'reversal' | 'turn' | 'character_shift' | 'setup' | 'plant' | 'payoff' | 'reveal';

const migrationMap: Record<BeatType, { movement_type: string; information_type: string; scope: string }> = {
  escalation: {
    movement_type: 'escalation',
    information_type: 'none',
    scope: 'primary_plot'
  },
  reversal: {
    movement_type: 'reversal',
    information_type: 'none',
    scope: 'primary_plot'
  },
  turn: {
    movement_type: 'turn',
    information_type: 'none',
    scope: 'primary_plot'
  },
  character_shift: {
    movement_type: 'internal_shift',
    information_type: 'none',
    scope: 'internal'
  },
  setup: {
    movement_type: 'stasis',
    information_type: 'setup',
    scope: 'subplot'
  },
  plant: {
    movement_type: 'stasis',
    information_type: 'plant',
    scope: 'subplot'
  },
  payoff: {
    movement_type: 'escalation',
    information_type: 'payoff',
    scope: 'primary_plot'
  },
  reveal: {
    movement_type: 'escalation',
    information_type: 'reveal',
    scope: 'primary_plot'
  }
};

// Default values for ambiguous cases
const defaults = {
  movement_type: 'stasis',
  information_type: 'none',
  scope: 'subplot'
};

// Simple YAML frontmatter parser that preserves data types
function parseFrontmatter(content: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }
  
  const [, yamlStr, markdownContent] = match;
  const data: Record<string, any> = {};
  
  // Process each line
  yamlStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Handle quoted strings
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        data[key] = value.slice(1, -1);
      } else if (value === '') {
        data[key] = '';
      } else if (value === 'null' || value === 'undefined') {
        data[key] = null;
      } else if (/^\d+$/.test(value)) {
        // Pure integers
        data[key] = parseInt(value, 10);
      } else if (/^\d+\.\d+$/.test(value)) {
        // Float numbers
        data[key] = parseFloat(value);
      } else if (value === 'true') {
        data[key] = true;
      } else if (value === 'false') {
        data[key] = false;
      } else {
        // Everything else is a string
        data[key] = value;
      }
    }
  });
  
  return { data, content: markdownContent };
}

// Simple YAML frontmatter stringifier
function stringifyFrontmatter(content: string, data: Record<string, any>): string {
  let yaml = '---\n';
  
  Object.entries(data).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      yaml += `${key}: null\n`;
    } else if (typeof value === 'string') {
      // Special handling for date fields - don't quote if it looks like a date
      if (key.includes('date') || key.includes('created') || key.includes('updated')) {
        yaml += `${key}: ${value}\n`;
      } else {
        yaml += `${key}: "${value}"\n`;
      }
    } else if (typeof value === 'number') {
      yaml += `${key}: ${value}\n`;
    } else if (typeof value === 'boolean') {
      yaml += `${key}: ${value}\n`;
    } else if (Array.isArray(value)) {
      yaml += `${key}:\n`;
      value.forEach(item => {
        if (typeof item === 'string') {
          yaml += `  - "${item}"\n`;
        } else {
          yaml += `  - ${item}\n`;
        }
      });
    } else {
      yaml += `${key}: "${value}"\n`;
    }
  });
  
  yaml += '---\n';
  yaml += content;
  
  return yaml;
}

function findBeatFiles(dir: string): string[] {
  const files: string[] = [];
  
  function traverse(currentDir: string) {
    const items = readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = join(currentDir, item);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (extname(item) === '.md') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function migrateBeatFile(filePath: string): boolean {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const { data, content: markdownContent } = parseFrontmatter(content);
    
    // Check if this file needs migration
    if (!data.beat_type) {
      console.log(`Skipping ${filePath} - no beat_type found (already migrated?)`);
      return false;
    }
    
    const oldBeatType = data.beat_type as BeatType;
    const mapping = migrationMap[oldBeatType] || defaults;
    
    // Create new data structure
    const newData = { ...data };
    
    // Remove old beat_type
    delete newData.beat_type;
    
    // Add new fields
    newData.movement_type = mapping.movement_type;
    newData.information_type = mapping.information_type;
    newData.scope = mapping.scope;
    
    // Keep pressure_level and irreversibility unchanged
    // Keep all other fields unchanged
    
    // Rebuild file
    const newYaml = stringifyFrontmatter(markdownContent, newData);
    writeFileSync(filePath, newYaml);
    
    console.log(`Migrated ${filePath}: ${oldBeatType} → movement_type:${newData.movement_type}, information_type:${newData.information_type}, scope:${newData.scope}`);
    return true;
    
  } catch (error) {
    console.error(`Error migrating ${filePath}:`, error);
    return false;
  }
}

function main() {
  console.log('Starting beats migration...');
  
  // Find all beat files
  const beatFiles = findBeatFiles('src/content/beats');
  
  if (beatFiles.length === 0) {
    console.log('No beat files found in src/content/beats');
    return;
  }
  
  console.log(`Found ${beatFiles.length} beat files`);
  
  let migratedCount = 0;
  let skippedCount = 0;
  
  for (const filePath of beatFiles) {
    if (migrateBeatFile(filePath)) {
      migratedCount++;
    } else {
      skippedCount++;
    }
  }
  
  console.log(`\nMigration complete:`);
  console.log(`- Migrated: ${migratedCount} files`);
  console.log(`- Skipped: ${skippedCount} files`);
  console.log(`- Total processed: ${beatFiles.length} files`);
  
  if (migratedCount > 0) {
    console.log('\n⚠️  Please review the migrated files and then run:');
    console.log('   npm run build  (to validate schema)');
    console.log('   git add .');
    console.log('   git commit -m "Refactor beats schema to five-axis model"');
  }
}

// Run migration
main();
