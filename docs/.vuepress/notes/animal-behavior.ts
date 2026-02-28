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
      ],
    },
  ],
  title: '动物行为学',
  type: "doc",
});
