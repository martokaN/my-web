export interface WebBase {
	section: string;
	title: string;
	description: string;
	price: string;
	features: string[];
}

export interface AddonItem {
	title: string;
	description: string;
	price: string;
}

export interface WebAddon {
	category: string;
	description: string;
	items: AddonItem[];
}

export interface Feature {
	title: string;
	description: string;
}

export interface MaintenanceTier {
	tier: string;
	subtitle: string;
	description: string;
	price: string;
	features: Feature[];
}

export interface FooterInfo {
	title: string;
	points: string[];
}

// 01 · Základ webu
export const webBase = {
	title: "Základní web",
	description:
		"Moderní, rychlý web navržený na míru. Zahrnuje design, plnou funkčnost na mobilu i počítači, základní nastavení pro vyhledávače a zprovoznění na internetu.",
	price: "15 000 Kč",
	features: [
		"Rychlý web s výborným skóre ve vyhledávačích",
		"Plně funkční na mobilu, tabletu i počítači",
		"Do 5 podstránek",
		"Základní SEO — správné nastavení pro Google",
		"Zprovoznění a nasazení na internet",
		"Jednoduchý formulář s doručením na e-mail",
		"Web v souladu s GDPR — cookie lišta a ochrana osobních údajů",
		"Kód verzovaný a zálohovaný přes GitHub",
		"Předání webu se stručným návodem k úpravám",
	],
};

// 02 · Doplňky
export const webAddons = [
	{
		category: "Správa a růst obsahu",
		description: "Pro klienty, kteří chtějí mít web plně pod kontrolou.",
		items: [
			{
				title: "Správa obsahu (admin panel)",
				description:
					"Texty a obrázky upravuješ sám přes jednoduché rozhraní v prohlížeči — bez kontaktování vývojáře.",
				price: "+ 8 000 Kč",
			},
			{
				title: "Blog / Aktuality",
				description:
					"Přidáváš nové články nebo příspěvky. Pomáhá s viditelností ve vyhledávačích a buduje důvěru zákazníků.",
				price: "+ 6 000 Kč",
			},
			{
				title: "Podstránka navíc",
				description:
					"Každá další unikátní stránka nad rámec základního balíčku — design i naplnění obsahem.",
				price: "+ 2 000 Kč / ks",
			},
		],
	},
	{
		category: "Důvěra a sociální sítě",
		description: "Propojení webu s místy, kde zákazníci hodnotí vaši práci.",
		items: [
			{
				title: "Napojení Instagramu",
				description:
					"Nejnovější příspěvky z Instagramu se automaticky zobrazují na webu. Propojení se samo obnovuje.",
				price: "+ 4 000 Kč",
			},
			{
				title: "Recenze z Google",
				description:
					"Automatické zobrazení hodnocení od reálných zákazníků z Google přímo na webu. Vždy aktuální.",
				price: "+ 4 000 Kč",
			},
		],
	},
	{
		category: "Automatizace a data",
		description: "Technické zázemí, které šetří čas a dává přehled.",
		items: [
			{
				title: "Napojení na externí aplikaci",
				description:
					"Propojení webu s nástrojem, který už používáš — např. Mailchimp, Notion, Google Sheets nebo CRM. Jedna integrace, nastavená a otestovaná.",
				price: "+ 5 000 Kč / integrace",
			},
		],
	},
	{
		category: "Obchodní nástroje a expanze",
		description: "Funkce, které přímo generují poptávky.",
		items: [
			{
				title: "Online poptávkový formulář",
				description:
					"Vícepolní formulář přizpůsobený vašemu oboru — zákazník vyplní přesně to, co potřebuješ vědět. Na rozdíl od základního kontaktního formuláře jde o strukturovaný dotazník s validací.",
				price: "+ 3 000 Kč",
			},
			{
				title: "Online rezervace (kalendář)",
				description:
					"Zákazníci si sami vybírají volný termín z kalendáře — napojení na váš rezervační systém.",
				price: "+ 2 500 Kč",
			},
			{
				title: "Vícejazyčný web",
				description:
					"Web ve více jazycích — například česky a anglicky. Kompletní technické nastavení.",
				price: "+ 6 000 Kč",
			},
		],
	},
];

// 03 · Měsíční správa
export const webMaintenance = [
	{
		tier: "Basic",
		subtitle: "Provoz a Bezpečí",
		description: "Web běží, je zabezpečený a pod dohledem.",
		price: "600 Kč",
		recommended: false,
		features: [
			{
				title: "Globální rychlost 24/7",
				description: "Web dostupný odkudkoli, maximální rychlost načítání.",
			},
			{
				title: "Automatické SSL zabezpečení",
				description: "Web vždy šifrovaný a důvěryhodný (HTTPS).",
			},
			{
				title: "Ochrana proti útokům",
				description: "Špičkové zabezpečení infrastruktury v ceně.",
			},
			{
				title: "Dohled nad doménou",
				description: "Správa DNS a technického propojení.",
			},
			{
				title: "Krizová podpora",
				description: "Řešení technického výpadku webu — odpověď do 72 hodin.",
			},
		],
	},
	{
		tier: "Standard",
		subtitle: "Výkon + Podpora",
		description: "Aktivní péče o web a rychlá technická pomoc.",
		price: "1 200 Kč",
		recommended: true,
		features: [
			{ title: "Vše z Provozu a Bezpečí", description: "" },
			{
				title: "Pravidelná údržba",
				description: "Aktualizace jádra webu a knihoven.",
			},
			{
				title: "Měsíční report výkonu",
				description:
					"Nastavení analytiky a pravidelný přehled rychlosti, návštěvnosti a pozic v Google.",
			},
			{
				title: "Optimalizace obsahu",
				description: "Dohled nad správnou kompresí fotek a dat.",
			},
			{
				title: "Technická podpora e-mailem",
				description: "Odpověď na dotazy do 48 hodin.",
			},
		],
	},
	{
		tier: "Pro",
		subtitle: "VIP Servis + Úpravy",
		description: "Prioritní péče a hodiny úprav každý měsíc.",
		price: "2 500 Kč",
		recommended: false,
		features: [
			{ title: "Vše z Výkonu + Podpory", description: "" },
			{
				title: "2 hodiny úprav měsíčně",
				description: "Změny textů, fotek nebo drobné ladění funkcí.",
			},
			{
				title: "Telefonická podpora",
				description: "Operativní konzultace úprav a rozvoje webu.",
			},
			{
				title: "Prioritní odbavení",
				description: "Tvoje požadavky mají přednost v kalendáři.",
			},
			{
				title: "Garantovaná odpověď do 24 h",
				description: "Reakce na e-mail nebo hovor.",
			},
		],
	},
];

// Podmínky a Info
export const footerInfo = {
	title: "Podmínky spolupráce",
	points: [
		"Záloha 50 % před zahájením práce, zbytek při předání.",
		"Vše navíc mimo dohodnutý rozsah je účtováno zvlášť.",
		"Ceny jsou orientační — finální nabídka po konzultaci.",
		"MartWeb není plátce DPH.",
	],
};
