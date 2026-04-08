import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "animal-behavior",
  sidebar: [
    {
      text: "动物行为学",
      collapsed: false,
      link: "/animal-behavior/",
      items: [
        "lesson-1",
        "lesson-2",
        "lesson-3",
        "lesson-4",
        "lesson-5",
        "lesson-6",
        "lesson-7",
      ],
    },
  ],
  title: '动物行为学',
  type: "doc",
});
