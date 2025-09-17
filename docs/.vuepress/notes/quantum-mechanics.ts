import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "quantum-mechanics",
	link: "/quantum-mechanics",
	sidebar: [
		{
			text: "量子力学",
			collapsed: false,
			link: "/quantum-mechanics/",
			items: [
				"lesson-1",
				"lesson-2",
			],
		},
	],
});