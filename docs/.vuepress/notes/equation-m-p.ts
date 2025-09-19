import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "equation-m-p",
	link: "/equation-m-p",
	sidebar: [
		{
			text: "数理方程",
			collapsed: false,
			link: "/equation-m-p/",
			items: [
				"lesson-1",
			],
		},
	],
});