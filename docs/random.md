---
changelog: false
title: 随机跳转
permalink: /random/
pageLayout: doc
copyright: false
feed: false
createTime: 2025/03/05 19:49:07
comments: false
article: false
aside: false
---

<script setup lang="js">
    import { useRoutes, useRouter } from 'vuepress/client'
    const router = useRouter()
    const routes = useRoutes()
    const routeList = Object.keys(routes.value)
    const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1) + min)
    const target = routeList[getRandomInt(routeList.length)]
    router.push(target)
</script>

正在随机跳转到一个页面……
