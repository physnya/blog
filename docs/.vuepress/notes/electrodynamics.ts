import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "Electrodynamics",
	link: "/Electrodynamics",
	sidebar: [
		{
			text: "电动力学",
			collapsed: false,
			link: "/Electrodynamics/",
			items: ["lesson-1"],
		},
	],
});
