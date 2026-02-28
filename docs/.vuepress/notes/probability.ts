import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "probability",
  sidebar: [
    {
      text: "概率论与随机过程",
      collapsed: false,
      link: "/probability/",
      items: [
        "lesson-1",
      ],
    },
  ],
  title: '概率论与随机过程',
  type: "doc",
});
