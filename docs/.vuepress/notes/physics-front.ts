import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'physics-front',
  link: '/physics-front',
  sidebar: [
    {
      text: '物理学前沿讲座',
      collapsed: false,
      link: '/physics-front/',
      items: [
        'lesson-1',
      ]
    },
  ],
})