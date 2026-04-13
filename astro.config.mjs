import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
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
		platformProxy: {
			enabled: true,
		},
	}),
});
