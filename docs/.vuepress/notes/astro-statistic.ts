import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "astro-statistic",
	sidebar: [
		{
			text: "天体物理统计方法",
			collapsed: false,
			link: "/astro-statistic/",
			items: [
				"lesson-1",
				"lesson-2",
				"lesson-3",
				"lesson-4",
				"lesson-5",
				"lesson-6",
				"lesson-7",
				"lesson-8",
				"lesson-9",
				"lesson-10",
				"lesson-11",
			],
		},
	],
	type: "doc",
	title: "天体物理统计方法"
});
