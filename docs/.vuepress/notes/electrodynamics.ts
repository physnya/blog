import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'electrodynamics',
  link: '/electrodynamics',
  sidebar: [
    {
      text: '电动力学',
      collapsed: false,
      items: [
        'lesson-1',
        'lesson-2',
      ]
    },
  ],
})