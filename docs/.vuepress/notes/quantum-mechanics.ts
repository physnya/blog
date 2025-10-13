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
			],
		},
	],
	type: "doc",
	title: "量子力学"
});
