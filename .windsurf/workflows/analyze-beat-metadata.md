---
description: Checks beat collection entry metadata to ensure the proper scene is referenced and any relevant threads are included and accurate.
---
1. Check if any beat entry files were included in the prompt
2. If not, stop and inform the user that beat entry files are required
3. Read the [content collection config](/home/jk/dev/HerMajestysDispleasure/src/content.config.ts) to understand the structure of beat entries 
4. Reference [Collection Field Definitions](/home/jk/dev/HerMajestysDispleasure/src/utils/collectionFieldDefinitions.ts) for further clarification on the meaning and usage of each field if needed.
5. For each beat entry file:
  - Find the scene referenced in the beat metadata within the [Scenes Collection](/home/jk/dev/HerMajestysDispleasure/src/content/scenes/) which has several subdirectories that include scene entries
  - Read the full scene content to understand the context
  - 