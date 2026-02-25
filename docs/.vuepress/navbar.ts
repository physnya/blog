import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
	{ text: "首页", link: "/" },
	{ text: "博客", link: "/blog/" },
	{
		text: "笔记",
		items: [
			{ text: "Feynman III 札记", link: "/Feynman-III/README.md" },
			{ text: "高等微积分", link: "/integral/README.md" },
			{ text: "星系与宇宙", link: "/cosmos/README.md" },
			{ text: "写作与沟通", link: "/writing/README.md" },
			{ text: "复变函数", link: "/complex/README.md" },
			{ text: "量子力学", link: "/quantum-mechanics/README.md" },
			{ text: "电动力学", link: "/electrodynamics/README.md" },
			{ text: "天体物理前沿讲座", link: "/astro-front/README.md" },
			{ text: "生物物理导论", link: "/biophysics/README.md" },
			{ text: "物理学前沿讲座", link: "/physics-front/README.md" },
			{ text: "天体物理统计方法", link: "/astro-statistic/README.md" },
			{ text: "数理方程", link: "/equation-m-p/README.md" },
			{ text: "统计力学", link: "/statistical-mechanics/README.md" },
			{
				text: "自学笔记",
				items: [{ text: "广义相对论", link: "/self-learn-GR/README.md" }],
			},
		],
	},
	{
		text: "关于",
		items: [
			{ text: "关于我", link: "/about/" },
			{ text: "时间线", link: "/timeline/" },
			{ text: "动态", link: "/talks/" },
			{ text: "Bangumi", link: "/bangumi/" },
		],
	},
	{ text: "友链", link: "/links/" },
]);
