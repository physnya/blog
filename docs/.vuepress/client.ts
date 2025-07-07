import { defineClientConfig } from 'vuepress/client'
import { h } from 'vue'
import { Layout } from 'vuepress-theme-plume/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'

// import './theme/styles/custom.css'
import './custom.css'
import Talks from './components/Talks.vue'
import WordCount from './components/WordCount.vue'
import Bangumi from './components/Bangumi.vue'
import AsideOutlineAfter from './components/AsideOutlineAfter.vue'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`
    
    // your custom components
    app.component('Talks', Talks)
    app.component('WordCount', WordCount)
    app.component('Bangumi', Bangumi)
    app.component('RepoCard', RepoCard)
  },

  // inject custom layout components
  layouts: {
    Layout: () => h(Layout, null, {
      'aside-outline-after': () => h(AsideOutlineAfter),
    }),
  },
})
