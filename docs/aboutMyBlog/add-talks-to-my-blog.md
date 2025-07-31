---
title: 为 blog 添加「动态」页面
tags:
  - blog
  - GoToSocial
  - WebDevelopment
createTime: 2025/06/16 13:09:07
permalink: /posts/uyakgssl/
changelog: false
---
刚刚过去的期末周虽然非常紧张刺激，但是似乎我的松弛感和拖延症并没有因为考试的临近而改善，而是催促着我在期末周每天抽出时间来写一个新的板块.

想要在 blog 中建立「动态」页面是我早就在谋划的待办事项，毕竟 [老的 blog](https://archive1.physnya.top) 中就有基于 Artitalk 建立的页面. 当时是将数据存放在 LeanCloud 上，然后在访问时调用，实现类似于 QQ 动态的效果. 但是国内 LeanCloud 国际版的访问速度十分感人，而且 Artitalk 毕竟是一个不再维护的项目，用起来完全不顺手，所以这一次我准备从头制作出这样的效果.

虽然如此，但是我也没有服务器啊，要部署 memos 之类完全没有条件... 于是我想到「调用 GoToSocial 的 API」！

## GoToSocial 是什么？

[GoToSocial 文档](https://docs.gotosocial.org/zh-cn/latest/) 的定义是：

> GoToSocial 是一个用 Golang 编写的 [ActivityPub](https://activitypub.rocks/) 社交网络服务端. 通过 GoToSocial，你可以与朋友保持联系，发帖、阅读和分享图片及文章，且不会被追踪或广告打扰！
>
> GoToSocial 提供了一个轻量级、可定制且注重安全的进入 [联邦宇宙](https://en.wikipedia.org/wiki/Fediverse) 的入口，它类似但不同于像 [Mastodon](https://joinmastodon.org/)、[Pleroma](https://pleroma.social/)、[Friendica](https://friendi.ca/) 和 [PixelFed](https://pixelfed.org/) 这样的现有项目.

实际上 GoToSocial 是开放网络的一部分，它和 [Mastodon](https://joinmastodon.org/) 一样，提供了一个联邦式的社交服务. 具体而言，它就像 [X](https://x.com) (Twitter) 和其他的各种社交软件一样，只是它不会有推荐算法、不会收集你的任何使用数据，是一个去中心化的体系.

选择 GoToSocial 只是因为它比较轻量级，比起 Mastodon 来说，它更适合个人部署 (虽然我并不是自己部署的，但是如果我有服务器，我想我会立马部署一个)，它和其他的「入口」一样，都可以让使用者进入联邦宇宙，开启去中心化的社交体验.

目前，GoToSocial 已经进入 Beta 版本阶段，集成了 Mastodon 的 API，并在此基础上进行了扩展. 因此我之后的操作也是基于已经开放的 API 进行的.

## 准备工作

首先，为了方便地调用 API，我们需要经过几重身份验证.[^1]

登录你所使用的实例的设置界面：``https://example.org/settings/user/profile``，选择 ``Applications``，进入应用设置面板.

:::: demo-wrapper img no-padding

::: center

![](https://vip.123pan.cn/1845440081/yk6baz03t0l000d7w33fgen50wqtkxq3DIYxAIFxDda1DGxPDwUzAa==.png)

:::

::::

点击 ``New Application`` 创建一个应用，然后进入应用的设置面板，会要求指定应用的权限、应用名称等，按照指示和自己的需求填写即可.

创建好的应用会有一个 client ID 和一个 client secret，点击按钮会显示，将它们复制下来记到一个记事本里面：

:::: demo-wrapper img no-padding

::: center

![](https://vip.123pan.cn/1845440081/yk6baz03t0m000d7w33g9pf7v26g0mpyDIYxAIFxDda1DGxPDwUzAa==.png)

:::

::::

这时应用已经注册完毕，接下来，访问如下域名：

```
https://example.org/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=code&scope=read+write+push
```

其中 ``YOUR_CLIENT_ID`` 字段换成刚刚得到的那一串，``example.org`` 填写自己所用实例的域名，最后的 ``scope`` 按照设置时给的权限来填写.

将上述 URL 粘贴到浏览器后，会进入一个登录页面，输入自己账户的用户名和密码进行登录.

之后会到达一个页面，上面写着类似这样的内容：

> 嗨嗨，`your_username`!
>
> 应用 `your_app_name` 申请以你的名义执行操作，申请的权限范围是 `read+write+push`.
> 如果选择允许，应用将跳转到：urn:ietf:wg:oauth:2.0:oob 继续操作

点击「允许」，进入新的页面，有类似这样的内容：

> Here's your out-of-band token with scope "read write push", use it wisely:
> ``YOUR_AUTHORIZATION_TOKEN``

复制这个新生成的 ``YOUR_AUTHORIZATION_TOKEN``，同样存放在某个记事本中. 在这一步得到的令牌是「带外授权令牌」，只能使用一次，所以要利用这个令牌生成可以持续使用的 API 密钥. 向实例发送下面的 ``POST`` 请求：

```bash
curl \
  -H 'Content-Type: application/json' \
  -d '{
        "redirect_uri": "urn:ietf:wg:oauth:2.0:oob",
        "client_id": "YOUR_CLIENT_ID",
        "client_secret": "YOUR_CLIENT_SECRET",
        "grant_type": "authorization_code",
        "code": "YOUR_AUTHORIZATION_TOKEN"
      }' \
  'https://example.org/oauth/token'
```

这里，

* ``YOUR_CLIENT_ID`` 是第一步得到的 client ID；
* ``YOUR_CLIENT_SECRET`` 是第一步得到的 client secret；
* ``YOUR_AUTHORIZATION_TOKEN`` 是第二步得到的 ``YOUR_AUTHORIZATION_TOKEN``.

发送请求后，将会得到类似下面的 ``json`` 格式响应：

```json
{
  "access_token": "YOUR_ACCESS_TOKEN",
  "created_at": 1719577950,
  "scope": "read",
  "token_type": "Bearer"
}
```

这里的 ``YOUR_ACCESS_TOKEN`` 就是可以反复使用的凭据.

在得到凭据之后，可以通过下面的方法验证凭据是否可用：

::: tip

```bash
curl \
  -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
  'https://example.org/api/v1/accounts/verify_credentials'
```

将之前得到的 ``YOUR_ACCESS_TOKEN`` 作为请求头.

如果成功，则会得到用户资料的 ``json`` 响应.

:::

## pre-commit

因为我使用的 VuePress 是一个静态站点生成工具，所以要求它每次在被访问时都调用一次 API 然后渲染在页面上肯定不太现实.

因此我想出来的方法是，在每一次 ``git commit`` 的时候拉取数据，存在 ``public/`` 文件夹 (也就是会部署在网站根目录的那个静态资源文件夹) 里面，每次显示的时候从这个文件里调用数据即可.

> 当然不得不说这个方法建立在站点更新速度和我在联邦宇宙发布动态的频率相匹配的基础上，如果网站很长时间不更新，动态也不会更新，这似乎是一个激励我更新的方式.
>
> 虽然但是，似乎也可以只更新动态… 是我多虑了.

为了实现这个「在 ``git commit`` 之前完成的操作」，需要用到 husky[^2]：

> husky 是一个设置 git hooks 的工具，允许你在项目中植入你设定的 git hooks，在 git 提交代码的前后，你预设的 git hooks 可以得到执行，以对代码、文件等进行预设的检查，或者运行一些脚本.

### git hooks 设置

在项目的根目录下打开命令行，pnpm 安装：

```bash
pnpm add --save-dev husky
```

然后初始化 husky：

```bash
pnpm exec husky init
```

这时，``.husky/`` 文件夹中会有一个 ``pre-commit`` 文件，``package.json`` 中也会多出 ``prepare`` 命令.

之后添加新的 git hooks，只需要修改 ``pre-commit`` 文件即可，比如这里向其中添加了一个新的钩子：

```sh title="pre-commit"
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "Running pre-commit tasks..."
pnpm precommit
```

### API fetch 脚本

现在需要一个脚本来调用之前得到的 API. 在 DeepSeek 老师的帮助下，我写出了如下 ``fetch-talks.cjs`` 以及 ``pre-commit.cjs``：

::: code-tabs

@tab fetch-talks.cjs

@[code js :collapsed-lines](../../scripts/fetch-talks.cjs)

@tab pre-commit.cjs

@[code js :collapsed-lines](../../scripts/pre-commit.cjs)

:::

> API 密钥和应用名称等，存放在根目录下的 ``.env`` 文件中，并在 ``.gitignore`` 中将这个文件忽略，保证安全性.

在 ``package.json`` 中添加新的命令：

```json title="package.json"
"scripts": {
    "prepare": "husky install",
    "fetch-talks": "node scripts/fetch-talks.cjs",
    "precommit": "node scripts/pre-commit.cjs",
  },
"devDependencies": {
    "husky": "^8.0.0",
  },
```

到此，pre-commit 就配置完成了.

## 前端

在得到数据之后，还需要在前端 ==漂亮地== 显示出来. 这里我的想法是写一个新的 Vue 组件：

@[code vue title="Talks.vue" :collapsed-lines](../.vuepress/components/Talks.vue)

将 ``.vue`` 文件放在 ``.vuepress/`` 的 ``components/`` 目录下，并在 ``client.ts`` 中注册：

```ts title="client.ts"
import { defineClientConfig } from 'vuepress/client'
import Talks from './components/Talks.vue'

export default defineClientConfig({
    app.component('Talks', Talks)
  },
})

```

之后在 markdown 文件中引用组件只需要写 ``<Talks />`` 即可.

在 ``docs/`` 目录下新建一个 markdown 文件，引用上面写好的组件，完成！

示例地址：[「动态」](/talks/)

## 后记

第一次自己从头开始写一个页面，感觉学到了不少，比如 husky 的使用、js 脚本的编写，还有 Vue 组件的一些写法之类. 不仅如此，还把我现在用的 plume 主题 (本来就是一个文档主题) 的很多功能尝试了一遍 (╹ڡ╹ ).

这篇文章也算是这学期的一个结束罢，虽然是自己兴趣爱好方面的东西. 希望出成绩之后我还能保持这样的好心态...

[^1]: 本节参考文献：[使用 API 进行身份验证 - GoToSocial 文档](https://docs.gotosocial.org/zh-cn/latest/api/authentication/).
[^2]: 这名字翻译过来是「哈士奇」…