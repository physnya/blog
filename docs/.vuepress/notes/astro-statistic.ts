import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'astro-statistic',
  link: '/astro-statistic',
  sidebar: [
    {
      text: '天体物理统计方法',
      collapsed: false,
      link: '/astro-statistic/',
      items: [
        'lesson-1',
        'lesson-2',
      ]
    },
  ],
})