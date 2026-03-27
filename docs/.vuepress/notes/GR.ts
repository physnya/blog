import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "GR",
  sidebar: [
    {
      text: "广义相对论",
      collapsed: false,
      link: "/GR/",
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
      ],
    },
  ],
  title: '广义相对论',
  type: "doc",
});
