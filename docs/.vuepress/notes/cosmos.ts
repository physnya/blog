import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "cosmos",
	sidebar: [
		{
			text: "星系与宇宙",
			collapsed: false,
			link: "/cosmos/",
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
				"lesson-12",
				"lesson-13",
				"lesson-14",
				"lesson-15",
			],
		},
	],
	type: "doc",
	title: "星系与宇宙"
});
