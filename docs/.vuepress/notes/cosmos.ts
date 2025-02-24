import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'cosmos',
  link: '/cosmos',
  sidebar: [
    {
      text: '星系与宇宙',
      collapsed: false,
      items: [
        'lesson-1',
        'lesson-2',
      ]
    },
  ],
})