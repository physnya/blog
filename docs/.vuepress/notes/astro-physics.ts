import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "astro-physics",
  sidebar: [
    {
      text: "天体物理",
      collapsed: false,
      link: "/astro-physics/",
      items: [
        "lesson-1",
      ],
    },
  ],
  title: '天体物理',
  type: "doc",
});
