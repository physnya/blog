import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'cosmos',
  link: '/cosmos',
  sidebar: [
    {
      text: '星系与宇宙',
      link: '/cosmos/',
      collapsed: false,
      items: [
        'lesson-1',
      ]
    },
  ],
})