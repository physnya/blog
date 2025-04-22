import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'complex',
  link: '/complex',
  sidebar: [
    {
      text: '复变函数',
      collapsed: false,
      link: '/complex/',
      items: [
        'lesson-1',
        'lesson-2',
        'lesson-3',
      ]
    },
  ],
})