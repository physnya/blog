import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "physics-front",
	sidebar: [
		{
			text: "物理学前沿讲座",
			collapsed: false,
			link: "/physics-front/",
			items: [
				"lesson-1",
				"lesson-2",
				"lesson-3",
				"lesson-4",
			],
		},
	],
	type: "doc",
	title: "物理学前沿讲座"
});
