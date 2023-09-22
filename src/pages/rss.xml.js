import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Hexágono | Blog",
    description: "Aprendizaje de Astro",
    site: "https://estudiohexagono.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`
  });
}
