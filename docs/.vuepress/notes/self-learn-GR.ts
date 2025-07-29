import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "self-learn-GR",
	link: "/self-learn-GR",
	sidebar: [
		{
			text: "自学 - 广义相对论",
			collapsed: false,
			link: "/self-learn-GR/",
			items: [
				"chapter-1",
			],
		},
	],
});
