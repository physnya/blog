import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  {
    text: '笔记',
    items: [
      { text: 'Feynman III 札记', link: '/notes/Feynman-III/README.md' },
      { text: '高等微积分', link: '/notes/integral/README.md' },
      { text: '星系与宇宙', link: '/notes/cosmos/README.md' },
      { text: '写作与沟通', link: '/notes/writing/README.md' },
      { text: '复变函数', link: '/notes/complex/README.md'},
    ]
  },
  { 
    text: '关于',
    items: [
      { text: '关于我', link: '/about/' },
      { text: '时间线', link: '/timeline/' },
      { text: '动态', link: '/talks/' },
      { text: 'Bangumi', link: '/bangumi/'},
    ]
  },
  { text: '友链', link: '/links/' },
])
