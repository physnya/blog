import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "astro-front",
  sidebar: [
    {
      text: "天体物理前沿讲座",
      collapsed: false,
      link: "/astro-front/",
      items: [
        "lesson-1",
        "lesson-2", 
        "lesson-3",
        "lesson-4",
        "lesson-5",
        "lesson-6",
        "lesson-7",
        "lesson-8",
        "lesson-9",
        "lesson-10",
        "lesson-11",
        "lesson-12",
        "lesson-13",
      ],
    },
  ],
  title: '天体物理前沿讲座',
  type: "doc",
});
