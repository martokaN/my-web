import "vanilla-cookieconsent";
import type { CookieConsentConfig } from "vanilla-cookieconsent";

export const config: CookieConsentConfig = {
	guiOptions: {
		consentModal: {
			layout: "box",
			position: "bottom right",
		},
		preferencesModal: {
			layout: "box",
		},
	},
	categories: {
		necessary: {
			enabled: true,
			readOnly: true,
		},
		analytics: {
			enabled: false,
			autoClear: {
				cookies: [{ name: /^_ga/ }, { name: "_gid" }],
			},
		},
	},
	language: {
		default: "cs",
		translations: {
			cs: {
				consentModal: {
					title: "Používáme cookies",
					description:
						'Analytické cookies nám pomáhají pochopit, jak web používáš. Žádná data neprodáváme. <a href="/privacy">Zásady ochrany osobních údajů</a>',
					acceptAllBtn: "Přijmout vše",
					acceptNecessaryBtn: "Jen nezbytné",
					showPreferencesBtn: "Nastavení",
				},
				preferencesModal: {
					title: "Nastavení cookies",
					acceptAllBtn: "Přijmout vše",
					acceptNecessaryBtn: "Jen nezbytné",
					savePreferencesBtn: "Uložit nastavení",
					sections: [
						{
							title: "Nezbytné cookies",
							description: "Tyto cookies jsou nutné pro fungování webu.",
							linkedCategory: "necessary",
						},
						{
							title: "Analytické cookies",
							description:
								'Tyto cookies nám pomáhají měřit návštěvnost a zlepšovat obsah (Google Analytics). <a href="/cookies">Zásady cookies</a>',
							linkedCategory: "analytics",
						},
					],
				},
			},
		},
	},
};
