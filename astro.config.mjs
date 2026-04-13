import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	// Pokud chceš používat SSR (on-demand rendering), musíš mít nastaveno:
	output: "static",
	integrations: [icon()],
	image: {
		responsiveStyles: true,
		layout: "constrained",
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Plus Jakarta Sans",
			cssVariable: "--font-body",
			weights: [400, 700],
			subsets: ["latin", "latin-ext"],
		},
		{
			provider: fontProviders.google(),
			name: "DM Sans",
			cssVariable: "--font-heading",
			weights: [400, 700],
			subsets: ["latin", "latin-ext"],
		},
	],
	adapter: cloudflare({
		// 'directory' je pro Cloudflare Pages nejstabilnější režim
		mode: "directory",
		// Vypnutí proxy zabrání automatickému vytváření kolizních vazeb (ASSETS)
		platformProxy: {
			enabled: false,
		},
		// Pro Cloudflare Pages je lepší nechat optimalizaci na nich
		imageService: "cloudflare",
	}),
});
