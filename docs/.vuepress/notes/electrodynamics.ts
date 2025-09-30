import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "electrodynamics",
	link: "/electrodynamics",
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
			],
		},
	],
});
