import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'writing',
  link: '/writing',
  sidebar: [
    {
      text: '写作与沟通',
      collapsed: false,
      items: [
        'lesson-1',
        'lesson-2',
      ]
    },
  ],
})