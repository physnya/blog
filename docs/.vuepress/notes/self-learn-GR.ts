import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "self-learn-GR",
	sidebar: [
		{
			text: "自学 - 广义相对论",
			collapsed: false,
			link: "/self-learn-GR/",
			items: [
				"chapter-1",
				"chapter-2",
				"chapter-2-exercise",
				"chapter-3",
				"chapter-3-exercise",
			],
		},
	],
	type: "doc",
	title: "自学 - 广义相对论"
});
