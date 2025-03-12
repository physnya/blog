import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'writing',
  link: '/writing',
  sidebar: [
    {
      text: '写作与沟通',
      collapsed: false,
      link: '/writing/',
      items: [
        'lesson-1',
        'lesson-2',
        'lesson-3',
        'lesson-4',
      ]
    },
  ],
})