import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'cosmos',
  link: '/cosmos',
  sidebar: [
    {
      text: '星系与宇宙',
      collapsed: false,
      link: '/cosmos/',
      items: [
        'lesson-1',
        'lesson-2',
        'lesson-3',
        'lesson-4',
        'lesson-5',
        'lesson-6',
        'lesson-7',
        'lesson-8'
      ]
    },
  ],
})