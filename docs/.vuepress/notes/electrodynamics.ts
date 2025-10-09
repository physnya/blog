import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "electrodynamics",
	sidebar: [
		{
			text: "电动力学",
			collapsed: false,
			link: "/electrodynamics/",
			items: [
				"lesson-1",
				"lesson-2",
				"lesson-3",
				"lesson-4",
				"lesson-5",
				"lesson-6",
				"lesson-7",
			],
		},
	],
	type: "doc",
	title: "电动力学"
});
