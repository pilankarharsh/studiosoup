import {
    sanity
} from './sanity'

export async function getMediaByTag(tag) {
    try {
        const query = `*[_type == "media" && tag == $tag][0]{
  title,
  "url": asset.asset->url,
  tag
}`;
        const result = await sanity.fetch(query, {
            tag
        });
        
        // Return fallback if no result found
        if (!result) {
            console.warn(`No media found for tag: ${tag}`);
            return {
                title: '',
                url: '',
                tag: tag
            };
        }
        
        return result;
    } catch (error) {
        console.error(`Error fetching media for tag ${tag}:`, error);
        return {
            title: '',
            url: '',
            tag: tag
        };
    }
}