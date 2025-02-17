import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'electrodynamics',
  link: '/electrodynamics',
  sidebar: [
    {
      text: '电动力学',
      link: '/electrodynamics/',
      collapsed: false,
      items: [
        'lesson-1',
      ]
    },
  ],
})