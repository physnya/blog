import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'astro-front',
  link: '/astro-front',
  sidebar: [
    {
      text: '天体物理前沿讲座',
      collapsed: false,
      link: '/astro-front/',
      items: [
        'lesson-1',
      ]
    },
  ],
})