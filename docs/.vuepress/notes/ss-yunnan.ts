import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  dir: "ss-yunnan",
  sidebar: [
    {
      text: "ICESUN 暑校",
      collapsed: false,
      link: "/ss-yunnan/",
      items: [
        "lecture-1",
        "lecture-2",
        "lecture-3",
        "lecture-4",
        "lecture-5",
      ],
    },
  ],
  title: 'ICESUN 暑校',
  type: "doc",
});
