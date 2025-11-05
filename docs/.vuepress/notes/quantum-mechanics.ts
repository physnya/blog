import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "quantum-mechanics",
	sidebar: [
		{
			text: "量子力学",
			collapsed: false,
			link: "/quantum-mechanics/",
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
			],
		},
	],
	type: "doc",
	title: "量子力学"
});
