export const profile = {
	fullName: "Andres David Jimenez Sulbaran",
	title: "FullStackTypescript Developer",
	institute: "",
	author_name: "AJ", // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
};

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: "andresdavid@outlook.com",
	linkedin: "https://www.linkedin.com/in/andresdavid/",
	x: "",
	github: "https://github.com/kattsushi",
	gitlab: "",
	scholar: "",
	inspire: "",
	arxiv: "",
};

export const template = {
	website_url: "https://localhost:4321", // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: "light", // Select one of the Daisy UI Themes or create your own
	darkTheme: "dark", // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 3,
	base: "", // Repository name starting with /
};

export const seo = {
	default_title: "Andres Jimenez Resume",
	default_description: "Andres Jimenez Resume",
	default_image: "",
};
