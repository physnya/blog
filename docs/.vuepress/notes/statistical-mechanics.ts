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
        "lesson-2",
        "lesson-3",
        "lesson-4",
        "lesson-5",
        "lesson-6",
        "lesson-7",
        "lesson-8",
        "lesson-9",
        "lesson-11",
        "lesson-13",
      ],
    },
  ],
  title: '统计力学',
  type: "doc",
});
