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
      ],
    },
  ],
  title: '恒星与行星',
  type: "doc",
});
