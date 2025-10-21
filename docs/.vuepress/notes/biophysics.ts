import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "biophysics",
	sidebar: [
		{
			text: "生物物理导论",
			collapsed: false,
			link: "/biophysics/",
			items: [
				"lesson-1",
				"lesson-2",
				"lesson-3",
				"lesson-4",
				"lesson-5",
			],
		},
	],
	type: "doc",
	title: "生物物理导论"
});
