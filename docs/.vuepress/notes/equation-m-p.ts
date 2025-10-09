import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "equation-m-p",
	sidebar: [
		{
			text: "数理方程",
			collapsed: false,
			link: "/equation-m-p/",
			items: ["lesson-1", "lesson-2"],
		},
	],
	type: "doc",
	title: "数理方程"
});
