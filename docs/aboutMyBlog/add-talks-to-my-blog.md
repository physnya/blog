---
title: 为 blog 添加「动态」页面
tags:
  - blog
  - GoToSocial
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
```js :collapsed-lines
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

// 加载环境变量
dotenv.config();

// 配置参数
const INSTANCE = process.env.GTS_INSTANCE;
const USER_ID = process.env.USER_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const OUTPUT_DIR = path.resolve(__dirname, "../docs/.vuepress/public");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "talks.json");

// 获取动态数据
async function fetchTalks() {
	let allToots = [];
	let lastId = null;
	const maxPages = 5; // 限制页数，避免过多请求
	const limit = 40; // 每页数量

	try {
		for (let i = 0; i < maxPages; i++) {
			let url = `https://${INSTANCE}/api/v1/accounts/${USER_ID}/statuses?limit=${limit}`;
			if (lastId) url += `&max_id=${lastId}`;

			const headers = {
				Accept: "application/json",
				"User-Agent": "NodeJS/Fetcher",
			};

			if (ACCESS_TOKEN) {
				headers["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
			}

			const response = await axios.get(url, { headers });
			const data = response.data;

			if (!data || data.length === 0) break;

			// 过滤转帖和回复
			const filtered = data.filter((toot) => !toot.reblog && !toot.in_reply_to_id);
			allToots = [...allToots, ...filtered];

			lastId = data[data.length - 1].id;
			console.log(`Fetched page ${i + 1}: ${filtered.length} items`);
		}

		return allToots;
	} catch (error) {
		console.error("Error fetching talks:", error.message);
		return [];
	}
}

// 主函数
(async () => {
	try {
		// 确保输出目录存在
		if (!fs.existsSync(OUTPUT_DIR)) {
			fs.mkdirSync(OUTPUT_DIR, { recursive: true });
		}

		// 获取并保存数据
		const talks = await fetchTalks();
		fs.writeFileSync(OUTPUT_FILE, JSON.stringify(talks, null, 2));
		console.log(`✅ Successfully saved ${talks.length} talks to ${OUTPUT_FILE}`);
	} catch (error) {
		console.error("❌ Failed to fetch talks:", error);
		process.exit(1);
	}
})();
```
@tab pre-commit.cjs
```js
const { execSync } = require("child_process");

console.log("Running pre-commit hook...");

try {
	// 1. 获取最新动态数据
	console.log("Fetching latest talks data...");
	execSync("node scripts/fetch-talks.cjs", { stdio: "inherit" });

	// 2. 添加更新后的数据文件
	execSync("git add docs/.vuepress/public/talks.json", { stdio: "inherit" });

	console.log("✅ Pre-commit hook completed successfully");
} catch (error) {
	console.error("❌ Pre-commit hook failed:", error.message);
	process.exit(1);
}
```
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

```vue title="Talks.vue" :collapsed-lines
<template>
	<div class="talks-container">
		<h1 class="page-title">我的动态</h1>

		<div
			v-if="loading"
			class="loading"
		>
			<div class="spinner"></div>
			<p>加载动态中...</p>
		</div>

		<div
			v-else-if="error"
			class="error"
		>
			<p>{{ error }}</p>
			<button
				@click="fetchTalks"
				class="retry-btn"
			>
				重试
			</button>
		</div>

		<div v-else>
			<div
				v-if="filteredToots.length === 0"
				class="empty"
			>
				<p>
					还没有动态，去
					<a
						:href="mastodonProfile"
						target="_blank"
						>GoToSocial</a
					>
					发布一条吧
				</p>
			</div>

			<div v-else>
				<div
					v-for="toot in pagedToots"
					:key="toot.id"
					class="toot-card"
				>
					<div class="toot-header">
						<img
							:src="toot.account.avatar"
							alt="头像"
							class="avatar"
						/>
						<div class="account-info">
							<span class="display-name">{{ toot.account.display_name }}</span>
							<span class="username"
								>@{{ toot.account.username }}@{{ instanceDomain }}</span
							>
						</div>
						<div class="toot-date">
							{{ formatDate(toot.created_at) }}
						</div>
					</div>

					<div
						class="toot-content"
						v-html="toot.content"
					></div>

					<div
						v-if="toot.media_attachments.length"
						class="media-grid"
					>
						<div
							v-for="media in toot.media_attachments"
							:key="media.id"
							class="media-item"
						>
							<img
								v-if="media.type === 'image'"
								:src="media.url"
								:alt="media.description || '图片'"
								class="media-image"
								@click="openLightbox(media.url)"
							/>
						</div>
					</div>

					<div class="toot-stats">
						<span class="stat-item">
							<span class="vpi-reply"></span> {{ toot.replies_count }}
						</span>
						<span class="stat-item">
							<span class="vpi-reblog"></span> {{ toot.reblogs_count }}
						</span>
						<span class="stat-item">
							<span class="vpi-star"></span> {{ toot.favourites_count }}
						</span>
					</div>
				</div>

				<div
					v-if="totalPages > 1"
					class="pagination"
				>
					<button
						@click="currentPage = Math.max(1, currentPage - 1)"
						:disabled="currentPage === 1"
						class="pagination-button prev"
					>
						上一页
					</button>

					<span class="page-info"
						>第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span
					>

					<button
						@click="currentPage = Math.min(totalPages, currentPage + 1)"
						:disabled="currentPage === totalPages"
						class="pagination-button next"
					>
						下一页
					</button>
				</div>
			</div>
		</div>

		<!-- 图片灯箱 -->
		<div
			v-if="lightboxVisible"
			class="lightbox"
			@click.self="closeLightbox"
		>
			<div class="lightbox-content">
				<img
					:src="currentImage"
					alt="大图预览"
				/>
				<button
					class="close-btn"
					@click="closeLightbox"
				>
					×
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Talks",
		data() {
			return {
				loading: true,
				error: null,
				toots: [],
				currentPage: 1,
				itemsPerPage: 10,
				instanceDomain: "scg.owu.one",
				mastodonProfile: "https://scg.owu.one/@physnya",
				lightboxVisible: false,
				currentImage: "",
			};
		},
		computed: {
			// 过滤转帖和回复
			filteredToots() {
				return this.toots.filter((toot) => !toot.reblog && !toot.in_reply_to_id);
			},
			// 当前页显示的说
			pagedToots() {
				const start = (this.currentPage - 1) * this.itemsPerPage;
				const end = start + this.itemsPerPage;
				return this.filteredToots.slice(start, end);
			},
			// 总页数
			totalPages() {
				return Math.ceil(this.filteredToots.length / this.itemsPerPage);
			},
		},
		mounted() {
			this.fetchTalks();
		},
		methods: {
			async fetchTalks() {
				try {
					this.loading = true;
					this.error = null;

					// 获取数据
					const response = await fetch("/talks.json");

					if (!response.ok) {
						throw new Error(`数据加载失败: ${response.status}`);
					}

					this.toots = await response.json();
					this.loading = false;

					console.log(`成功加载 ${this.toots.length} 条动态`);
				} catch (error) {
					this.error = error.message;
					this.loading = false;
					console.error("加载动态失败:", error);
				}
			},
			formatDate(dateString) {
				const date = new Date(dateString);
				return date.toLocaleString("zh-CN", {
					year: "numeric",
					month: "2-digit",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
				});
			},
			openLightbox(imageUrl) {
				this.currentImage = imageUrl;
				this.lightboxVisible = true;
				document.body.style.overflow = "hidden";
			},
			closeLightbox() {
				this.lightboxVisible = false;
				document.body.style.overflow = "";
			},
		},
	};
</script>

<style scoped>
	.talks-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 1.5rem;
	}

	.page-title {
		text-align: center;
		margin-bottom: 1.5rem;
		color: var(--vp-c-text-1);
		font-size: 1.5rem;
		font-weight: 600;
	}

	.toot-card {
		background: var(--vp-c-bg);
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		padding: 1.2rem;
		margin-bottom: 1.5rem;
		transition: transform 0.3s, box-shadow 0.3s;
		border: 1px solid rgb(from var(--vp-c-bg) calc(1 - r) calc(1 - g) calc(1 - b));
	}

	.toot-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 1.5px 2px
			rgb(from var(--vp-c-bg) calc(1 - r) calc(1 - g) calc(1 - b));
	}

	.toot-header {
		display: flex;
		align-items: center;
		margin-bottom: 1.5rem;
		position: relative;
	}

	.avatar {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		margin-right: 1.2rem;
		border: 3px solid #f8f9fa;
		box-shadow: 0 0.5px 1.5px
			rgb(from var(--vp-c-bg) calc(1 - r) calc(1 - g) calc(1 - b));
	}

	.account-info {
		flex: 1;
	}

	.display-name {
		font-weight: 700;
		font-size: 1.1rem;
		display: block;
		color: var(--vp-c-text-1);
		margin-bottom: 0.2rem;
	}

	.username {
		color: var(--vp-c-text-2);
		font-size: 0.95rem;
	}

	.toot-date {
		position: absolute;
		top: 0;
		right: 0;
		color: var(--vp-c-text-2);
		font-size: 0.9rem;
	}

	.toot-content {
		line-height: 1.7;
		color: var(--vp-c-text-1);
		font-size: 1rem;
		margin-bottom: 1.5rem;
	}

	.toot-content >>> a {
		color: #3182ce;
		text-decoration: none;
		border-bottom: 1px solid #bee3f8;
		transition: all 0.2s;
	}

	.toot-content >>> a:hover {
		color: #2b6cb0;
		border-bottom-color: #3182ce;
	}

	.media-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 15px;
		margin: 1.8rem 0;
	}

	.media-item {
		border-radius: 10px;
		overflow: hidden;
		background: #f8fafc;
		cursor: pointer;
		transition: transform 0.3s;
	}

	.media-item:hover {
		transform: scale(1.03);
	}

	.media-image {
		width: 100%;
		height: auto;
		display: block;
		aspect-ratio: 1/1;
		object-fit: cover;
	}

	.toot-stats {
		display: flex;
		gap: 1.8rem;
		padding-top: 1.2rem;
		border-top: 1px solid #edf2f7;
		color: #718096;
		font-size: 0.95rem;
	}

	.stat-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.8rem;
		margin-top: 3rem;
		padding: 1.2rem 0;
	}

	.pagination-button {
		padding: 0.8rem 2rem;
		background: var(--vp-c-bg-elv);
		color: var(--vp-c-text-1);
		border: none;
		border-radius: 8px;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 600;
		transition: background 0.3s;
		box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	}

	.pagination-button:hover:not(:disabled) {
		background: var(--vp-c-bg-alt);
		transform: translateY(-2px);
	}

	.pagination-button:disabled {
		background: var(--vp-c-bg);
		cursor: not-allowed;
		opacity: 0.7;
		transform: none;
	}

	.page-info {
		color: var(--vp-c-text-2);
		font-size: 1rem;
		font-weight: 500;
	}

	/* 加载状态 */
	.loading {
		text-align: center;
		padding: 3rem;
		color: var(--vp-c-text-2);
	}

	.spinner {
		width: 50px;
		height: 50px;
		border: 5px solid rgba(49, 130, 206, 0.2);
		border-top: 5px solid #3182ce;
		border-radius: 50%;
		margin: 0 auto 1.5rem;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	/* 错误状态 */
	.error {
		text-align: center;
		padding: 3rem;
		background: #fff5f5;
		border-radius: 12px;
		color: #e53e3e;
		margin: 2rem 0;
	}

	.retry-btn {
		margin-top: 1.5rem;
		padding: 0.7rem 1.5rem;
		background: #e53e3e;
		color: white;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		font-size: 1rem;
		transition: background 0.2s;
	}

	.retry-btn:hover {
		background: #c53030;
	}

	/* 空状态 */
	.empty {
		text-align: center;
		padding: 3rem;
		background: #f0f9ff;
		border-radius: 12px;
		color: #3182ce;
		margin: 2rem 0;
	}

	.empty a {
		color: #3182ce;
		font-weight: 600;
		text-decoration: none;
	}

	.empty a:hover {
		text-decoration: underline;
	}

	/* 灯箱 */
	.lightbox {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.lightbox-content {
		position: relative;
		max-width: 90%;
		max-height: 90%;
	}

	.lightbox-content img {
		max-width: 100%;
		max-height: 80vh;
		border-radius: 8px;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
	}

	.close-btn {
		position: absolute;
		top: -40px;
		right: 0;
		background: none;
		border: none;
		color: white;
		font-size: 2.5rem;
		cursor: pointer;
		opacity: 0.7;
		transition: opacity 0.2s;
	}

	.close-btn:hover {
		opacity: 1;
	}

	/* 响应式设计 */
	@media (max-width: 768px) {
		.talks-container {
			padding: 1.2rem;
		}

		.page-title {
			font-size: 2rem;
		}

		.toot-card {
			padding: 1.3rem;
		}

		.avatar {
			width: 50px;
			height: 50px;
		}

		.toot-date {
			position: static;
			margin-top: 0.5rem;
			font-size: 0.85rem;
		}

		.media-grid {
			grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		}

		.pagination {
			flex-direction: column;
			gap: 1.2rem;
		}
	}

	@media (max-width: 480px) {
		.toot-header {
			flex-direction: column;
			align-items: flex-start;
		}

		.avatar {
			margin-bottom: 1rem;
		}

		.toot-content {
			font-size: 1.05rem;
		}

		.media-grid {
			grid-template-columns: 1fr;
		}
	}

	/* 图标 */
	.vpi-reply {
		--icon: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Im04IDE3bC02LTZsNi02bDEuNDI1IDEuNGwtNC42IDQuNmw0LjYgNC42em0xMiAydi00cTAtMS4yNS0uODc1LTIuMTI1VDE3IDEyaC02LjE3NWwzLjYgMy42TDEzIDE3bC02LTZsNi02bDEuNDI1IDEuNGwtMy42IDMuNkgxN3EyLjA3NSAwIDMuNTM4IDEuNDYzVDIyIDE1djR6Ii8+PC9zdmc+);
	}

	.vpi-star {
		--icon: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik03LjYyNSA2LjRMMTIgLjcyNUwxNi4zNzUgNi40bDYuODUgMi4zbC00LjMyNSA2LjEyNWwuMTc1IDYuODI1TDEyIDE5LjY3NUw0LjkyNSAyMS42NUw1LjEgMTQuOEwuOCA4Ljd6TTguODUgOC4xMjVMNCA5LjcyNUw3LjEgMTQuMkw3IDE4Ljk3NWw1LTEuMzc1bDUgMS40bC0uMS00LjhMMjAgOS43NzVsLTQuODUtMS42NUwxMiA0ek0xMiAxMS41Ii8+PC9zdmc+);
	}

	.vpi-reblog {
		--icon: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMCAyMnYtNC4xbDguNzc1LTguNzI1bDQuMDUgNC4wNzVMMTQuMSAyMnptOS45MjUtOC43bC0xLjI1LTEuMjI1ek0xMiAyMGgxLjI1bDQuMDUtNC4wNWwtLjYyNS0uNjI1bC0uNjI1LS42MjVMMTIgMTguNzV6bTQuNjc1LTQuNjc1bC0uNjI1LS42MjV6bC42MjUuNjI1ek0xMC43NSA5LjI1bC0xLjQtMS40MjVMMTEuMTc1IDZoLTMuMzVxLS4yMjUuNjUtLjcgMS4xMjVUNiA3LjgyNXY4LjM1cS44NzUuMzI1IDEuNDM4IDEuMDg4VDggMTlxMCAxLjI1LS44NzUgMi4xMjVUNSAyMnQtMi4xMjUtLjg3NVQyIDE5cTAtLjk3NS41NjMtMS43MjVUNCAxNi4yVjcuODI1UTMuMTI1IDcuNSAyLjU2MyA2LjczN1QyIDVxMC0xLjI1Ljg3NS0yLjEyNVQ1IDJxLjk3NSAwIDEuNzM4LjU2M1Q3LjgyNSA0aDMuMzVMOS4zNSAyLjE3NUwxMC43NS43NUwxNSA1ek0xOSAycTEuMjUgMCAyLjEyNS44NzVUMjIgNXQtLjg3NSAyLjEyNVQxOSA4dC0yLjEyNS0uODc1VDE2IDV0Ljg3NS0yLjEyNVQxOSAyTTUgMjBxLjQyNSAwIC43MTMtLjI4OFQ2IDE5dC0uMjg4LS43MTJUNSAxOHQtLjcxMi4yODhUNCAxOXQuMjg4LjcxM1Q1IDIwTTUgNnEuNDI1IDAgLjcxMy0uMjg4VDYgNXQtLjI4OC0uNzEyVDUgNHQtLjcxMi4yODhUNCA1dC4yODguNzEzVDUgNm0xNCAwcS40MjUgMCAuNzEzLS4yODhUMjAgNXQtLjI4OC0uNzEyVDE5IDR0LS43MTIuMjg4VDE4IDV0LjI4OC43MTNUMTkgNm0wLTEiLz48L3N2Zz4=);
	}
</style>

```

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