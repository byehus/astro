import rss, { pageGlobToRssItems } from "@astrojs/rss";

export async function get() {
    return rss({
        title: "Astro Learner | Blog",
        description: "My journey learning Astro",
        site: "https://astro-test-site.netlify.app/",
        items: await pageGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: "<language>en-us</language>",
    });
}
