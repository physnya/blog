import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
	{ text: "首页", link: "/" },
	{ text: "博客", link: "/blog/" },
	{
		text: "笔记",
		items: [
			{ text: "Feynman III 札记", link: "/notes/Feynman-III/README.md" },
			{ text: "高等微积分", link: "/notes/integral/README.md" },
			{ text: "星系与宇宙", link: "/notes/cosmos/README.md" },
			{ text: "写作与沟通", link: "/notes/writing/README.md" },
			{ text: "复变函数", link: "/notes/complex/README.md" },
			{ text: "量子力学", link: "/notes/quantum-mechanics/README.md" },
			{ text: "电动力学", link: "/notes/electrodynamics/README.md" },
			{ text: "天体物理前沿讲座", link: "/notes/astro-front/README.md" },
			{ text: "生物物理导论", link: "/notes/biophysics/README.md" },
			{ text: "物理学前沿讲座", link: "/notes/physics-front/README.md" },
			{ text: "天体物理统计方法", link: "/notes/astro-statistic/README.md" },
			{ text: "数理方程", link: "/notes/equation-m-p/README.md" },
			{
				text: "自学笔记",
				items: [{ text: "广义相对论", link: "/notes/self-learn-GR/README.md" }],
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
