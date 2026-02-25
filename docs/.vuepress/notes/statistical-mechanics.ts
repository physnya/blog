import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "statistical-mechanics",
  sidebar: [
    {
      text: "统计力学",
      collapsed: false,
      link: "/statistical-mechanics/",
      items: [
        "lesson-1",
      ],
    },
  ],
  title: '统计力学',
  type: "doc",
});
