import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'biophysics',
  link: '/biophysics',
  sidebar: [
    {
      text: '生物物理导论',
      collapsed: false,
      link: '/biophysics/',
      items: [
        'lesson-1',
        'lesson-2',
      ]
    },
  ],
})