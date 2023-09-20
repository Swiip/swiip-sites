import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import storyblok from "@storyblok/astro"
import { loadEnv } from "vite"
import vercel from "@astrojs/vercel/static"
import svelte from "@astrojs/svelte"

const env = loadEnv("", process.cwd(), "STORYBLOK")

// https://astro.build/config
export default defineConfig({
	adapter: vercel({ webAnalytics: true, speedInsights: true }),
	integrations: [
		tailwind(),
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
			components: {
				page: "storyblok/pages/Page",
				hero: "storyblok/bloks/Hero",
			},
		}),
		svelte(),
	],
})
