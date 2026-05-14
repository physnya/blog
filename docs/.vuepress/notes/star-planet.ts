import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "star-planet",
  sidebar: [
    {
      text: "恒星与行星",
      collapsed: false,
      link: "/star-planet/",
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
      ],
    },
  ],
  title: '恒星与行星',
  type: "doc",
});
