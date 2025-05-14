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
        'lesson-5',
        'lesson-6',
        'lesson-7',
        'lesson-8',
        'lesson-9',
        'lesson-10',
        'lesson-11',
        'lesson-12',
      ]
    },
  ],
})