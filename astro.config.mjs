import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://shreyassudhakar.com",
	integrations: [
		mdx(),
		sitemap({
			changefreq: "daily",
			priority: 1,
			lastmod: new Date().toISOString().split("T")[0],
		}),
		tailwind(),
	],
});
