import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import storyblok from "@storyblok/astro"
import { loadEnv } from "vite"
import vercel from "@astrojs/vercel/serverless"
import svelte from "@astrojs/svelte"

const env = loadEnv("", process.cwd(), "STORYBLOK")

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: vercel({ webAnalytics: true, speedInsights: true }),
	integrations: [
		tailwind({
			configFile: "./tailwind.config.ts",
		}),
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
			bridge: true,
			apiOptions: {
				cache: "none",
				fetch: (url, options) => fetch(url, { ...options, cache: "no-store" }),
			},
			components: {
				page: "storyblok/pages/Page",
				title: "storyblok/bloks/Title",
				text: "storyblok/bloks/Text",
				link: "storyblok/bloks/Link",
				header: "storyblok/bloks/Header",
				button: "storyblok/bloks/Button",
				button_group: "storyblok/bloks/ButtonGroup",
				section: "storyblok/bloks/Section",
			},
		}),
		svelte(),
	],
})
