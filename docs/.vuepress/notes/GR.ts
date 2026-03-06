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
      ],
    },
  ],
  title: '广义相对论',
  type: "doc",
});
