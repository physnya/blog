import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "astro-statistic",
	sidebar: [
		{
			text: "天体物理统计方法",
			collapsed: false,
			link: "/astro-statistic/",
			items: ["lesson-1", "lesson-2", "lesson-3"],
		},
	],
	type: "doc",
	title: "天体物理统计方法"
});
