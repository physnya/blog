import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "compact-object",
	sidebar: [
		{
			text: "黑洞与致密天体",
			collapsed: false,
			link: "/compact-object/",
			items: [
				"lesson-1",
			],
		},
	],
	type: "doc",
	title: "黑洞与致密天体"
});
