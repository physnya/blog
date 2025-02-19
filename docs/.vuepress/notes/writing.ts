import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'writing',
  link: '/writing',
  sidebar: [
    {
      text: '写作与沟通',
      link: '/writing/',
      collapsed: false,
      items: [
        'lesson-1',
      ]
    },
  ],
})