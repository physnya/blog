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
				"lesson-5",
				"lesson-6",
				"lesson-7",
				"lesson-8",
				"lesson-9",
			],
		},
	],
	type: "doc",
	title: "物理学前沿讲座"
});
