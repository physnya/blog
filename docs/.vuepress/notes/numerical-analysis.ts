import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "numerical-analysis",
	sidebar: [
		{
			text: "数值分析",
			collapsed: false,
			link: "/numerical-analysis/",
			items: [
				"lesson-1",
			],
		},
	],
	type: "doc",
	title: "数值分析"
});
