---
changelog: false
title: 流水账 Week 15
createTime: 2025/01/27 00:24:12
tags:
  - Life
  - WebDevelopment
permalink: /posts/a8n8h73w/
---

寒假已经开始了快两周才开始写这个流水账，我还真是怠惰啊 o_o .... 这一次流水账就来总结一下寒假至今为止都发生了什么.

## Fragment 1 关于网站的建设

这段时间倒是没有做什么非常明显的改动，但是有几个小小的优化.

因为回到长沙，所以之前可能感觉访问速度没什么问题，在家里这边就会觉得访问速度是不是实在有点太缓慢了，所以有下定决心去找一些优化访问速度的方法. 一个重要指标当然是所谓的 LCP（Largest Contentful Paint），也就是最大内容的绘制时间. 在我的网站所用的 Fluid 主题里，加载主页最大的内容应该是 banner 图片，在我的测试中也发现主页最难加载的就是文章的缩略图和主页 banner，从这个角度来想确实应该优化图片加载.

之前一直是把常用的几张图片放在 `/img/` 文件夹里面，直接丢到 GitHub 仓库里，这显然是非常不划算的行为，因为仓库存储毕竟有上限，而且本身就是 GitHub Pages 了，难道还嫌访问速度不够慢吗（摊手.jpg）？所以改用图床是必然的选择. 在文章内部使用图片的时候我一般用的是 [流浪图床](https://p.sda1.dev/) ，虽然没有备案，但是服务一直比较稳定，国内访问也没什么问题，开发者也有在一直好好维护. 不过不是自己部署的总感觉会有一点点不适，要是哪天真出了问题也不好恢复，所以换常用的几张 banner 也不会考虑它.

如果要自己部署，一开始我想到的是 [PicX](https://picx.xpoet.cn/)，但是这也是存储在 GitHub 存储库的，访问速度并不会得到多少提升；所以转向一个最近才听说的服务 —— [123 云盘](https://www.123pan.com/)，这个云盘居然自带图床功能（虽然还是要一点钱，但是比 CDN 或者 OSS 存储桶稍微好点），所以我把 banner 图全部迁移过去，文章内部的图片等之后再统一迁移.

---

另外一个重点是我重新写了一遍 [⌈ 关于 ⌋](https://physnya.top/about/) 页面. 之前的页面比较简单，也不包含什么内容，看起来让人有些云里雾里…… 所以这一次更新把内容写得更加细致了一些，同时加上了一个“Now”的部分，用来展示我的 GitHub 热力图和飞书任务计划. 虽然目前来看移动端的显示还是有一点问题，初步推测是飞书的分享出了问题，之后再看看怎么调整权限（之前用飞书 webhook 机器人指令的时候就研究了很久，一直没看懂文档）.

## Fragment 2 单簧管

可能是《利兹与青鸟》看上头了，这段时间突然对单簧管很有兴趣，于是心动不如行动直接买了一支（还真是敢想敢做啊不得不说）在家里吹笛头吹了一个下午，终于能吹响了 (Q$\omega$Q).

我爸看到我有这个兴趣，就找了一个老师试了一节课，现在已经能够成功吹出第一个八度（从 G 到下一个 G），感觉还是蛮神奇的：每一个按键都是传动结构，实际上按下去的位置和气柱的结尾位置并不一样，说实话是一种非常有技术细节的乐器，用术语来讲，就是存在很多 Boehm 结构. 老师知道我是学物理的之后也说，他可以少花很多时间来讲单簧管本身的构造，毕竟原理就是物理上的声学.

:::: details 放一点记录

::: demo-wrapper img no-padding

![单簧管](https://vip.123pan.cn/1845440081/ymjew503t0l000d6xujz7kdtm9119860DIYxAIFxDda1DGxPDwUzAa==.jpg)

:::

吹的一段《小星星》（虽然吹得很烂但是很有成就感）

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="//music.163.com/outchain/player?type=4&id=1219958797&auto=0&height=32"></iframe>

::::

## Fragment 3 同学聚会

回到长沙之后，初中同学和高中同学都在约着聚餐或者是一起玩，这段时间至少参加了四次聚会.

最开始是高中两个同学和我一起去长沙大学旁边的春日影寿司探店：

:::: details 照片

<CardGrid clos=''>
<img src='https://vip.123pan.cn/1845440081/yk6baz03t0m000d6xujocxl02zgt9pojDIYxAIFxDda1DGxPDwUzAa==.jpg'>
<img src='https://vip.123pan.cn/1845440081/yk6baz03t0l000d6xujntyyrmy16vfq1DIYxAIFxDda1DGxPDwUzAa==.jpg'>
</CardGrid>
<CardGrid cols='3'>
<img src='https://vip.123pan.cn/1845440081/yk6baz03t0n000d6xujp02b98uwfm1k9DIYxAIFxDda1DGxPDwUzAa==.jpg'>
<img src='https://vip.123pan.cn/1845440081/ymjew503t0m000d6xujzns9yx4gnomhbDIYxAIFxDda1DGxPDwUzAa==.jpg'>
<img src='https://vip.123pan.cn/1845440081/yk6baz03t0m000d6xujocxkz95gt8cjgDIYxAIFxDda1DGxPDwUzAa==.jpg'>
</CardGrid>
<CardGrid>
<img src='https://vip.123pan.cn/1845440081/ymjew503t0l000d6xujz7kdu2k11apa0DIYxAIFxDda1DGxPDwUzAa==.jpg'>
<img src='https://vip.123pan.cn/1845440081/yk6baz03t0n000d6xujp02b8f5wflp89DIYxAIFxDda1DGxPDwUzAa==.jpg'>
</CardGrid>

::::

店里面的抹茶芭菲不错（bushi）. 其实还有一整个玻璃展柜的手办、立牌之类，尤其是一眼就能看出店主是一个白厨，仓田真白的周边摆了整整一层，挺震撼的.

吃完饭之后一起去打任天堂大乱斗了 —— 虽然我是那种完全没玩过手柄的，被那两个同学杀得片甲不留.

18 号是和四个初中同学一起，约了几个家长，请初中班主任老师吃了一次海鲜. 21 号下午，我和我初中玩的比较好的一个朋友一起去小区附近刚开业的商场里面逛了一圈，之后跑到渔人码头的一个书店看书，晚上就在附近吃潮汕火锅，然后在一个江边的民谣酒吧，叫上其他五个人玩桌游. 当天顺便喝了酒吧招牌的梅子酒，结果就我一个酒量不行的喝得最多，差点喝醉（已经感觉到酒精的作用了）.

前几天下午，一个同学在高中那边给学弟学妹们答疑，结果遇到一个比较棘手的浸渐不变量问题，遂开腾讯会议找人讨论. 问题解决之后理所应当的聚了一餐，当时我妹刚好看完电影，我就直接把她也接过去吃饭，虽然之后回学校和学弟们（是的，没有学妹）聊得比较开心差点把我妹晾在光学实验室里……

这周还有一次回高中宣讲的活动，不过晚上并没有和同学一起吃饭.

## 结

寒假不知不觉好像已经过了不少，我的 CTMR 大论文还没开始动笔，电磁学更是一点没复习. 过两天回老家之后可能会专心一点，闲下来的时候就练习新买的单簧管放松心情吧.
