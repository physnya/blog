import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "equation-m-p",
	sidebar: [
		{
			text: "数理方程",
			collapsed: false,
			link: "/equation-m-p/",
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
				"lesson-13",
				"lesson-14",
			],
		},
	],
	type: "doc",
	title: "数理方程"
});
