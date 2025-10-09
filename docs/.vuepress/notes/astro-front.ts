import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "astro-front",
  sidebar: [
    {
      text: "天体物理前沿讲座",
      collapsed: false,
      link: "/astro-front/",
      items: ["lesson-1", "lesson-2", "lesson-3"],
    },
  ],
  title: '天体物理前沿讲座',
  type: "doc",
});
