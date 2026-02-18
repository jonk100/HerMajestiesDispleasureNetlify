import { getCollection } from "astro:content";

/**
 * Create a mapping from scene slug to episode number
 * This is a reusable function used by both character and location stats
 */
export async function createSceneToEpisodeMap(): Promise<Map<string, number>> {
  const episodes = await getCollection("episodes");
  const sceneToEpisodeMap = new Map<string, number>();
  
  for (const episode of episodes) {
    for (const sceneRef of episode.data.scenes) {
      // Handle both string references and object references
      const sceneSlug = typeof sceneRef === 'string' ? sceneRef : sceneRef.id;
      sceneToEpisodeMap.set(sceneSlug, episode.data.episode_number);
    }
  }

  return sceneToEpisodeMap;
}
