import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "complex",
	sidebar: [
		{
			text: "复变函数",
			collapsed: false,
			link: "/complex/",
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
				"lesson-12",
				"lesson-13",
				"lesson-14",
			],
		},
	],
	type: "doc",
	title: "复变函数"
});
