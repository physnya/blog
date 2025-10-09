import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "writing",
	sidebar: [
		{
			text: "写作与沟通",
			collapsed: false,
			link: "/writing/",
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
				"lesson-15",
				"final-draft",
			],
		},
	],
	type: "doc",
	title: "写作与沟通"
});
