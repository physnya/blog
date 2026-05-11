<script setup lang="ts">
	import type { ThemeHomeConfigBase } from "vuepress-theme-plume";
	import { VPHomeBox } from "vuepress-theme-plume/client";
	import homeData from "../public/home-data.json";

	const props = defineProps<ThemeHomeConfigBase>();

	function formatDate(isoDate?: string) {
		if (!isoDate) {
			return "";
		}

		return new Intl.DateTimeFormat("zh-CN", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		}).format(new Date(isoDate));
	}

	function formatCount(value: number) {
		return new Intl.NumberFormat("zh-CN").format(value);
	}

	function isExternalLink(link?: string) {
		return !!link && /^https?:\/\//.test(link);
	}
</script>

<template>
	<VPHomeBox
		class="home-latest"
		:type="props.type"
		:background-image="props.backgroundImage"
		:background-attachment="props.backgroundAttachment"
		:full="props.full"
		:index="0"
	>
		<div class="latest-shell">
			<div class="latest-heading">
				<div>
					<h2>Recent Update</h2>
				</div>
			</div>

			<div class="latest-stats">
				<div class="stat-chip">
					<span>Notes</span>
					<strong>{{ formatCount(homeData.counts.notes) }}</strong>
				</div>
				<div class="stat-chip">
					<span>Posts</span>
					<strong>{{ formatCount(homeData.counts.posts) }}</strong>
				</div>
				<div class="stat-chip">
					<span>Talks</span>
					<strong>{{ formatCount(homeData.counts.talks) }}</strong>
				</div>
				<div class="stat-chip">
					<span>Bangumi</span>
					<strong>{{ formatCount(homeData.counts.bangumi) }}</strong>
				</div>
			</div>

			<div class="latest-grid">
				<article class="latest-card note-card">
					<div class="card-top">
						<span class="card-type">Note</span>
						<time>{{ formatDate(homeData.latest.note?.isoDate) }}</time>
					</div>
					<p class="card-meta">{{ homeData.latest.note?.collectionTitle }}</p>
					<h3>
						<a :href="homeData.latest.note?.path">{{
							homeData.latest.note?.title
						}}</a>
					</h3>
					<p class="card-excerpt">{{ homeData.latest.note?.excerpt }}</p>
					<div class="card-links">
						<a :href="homeData.latest.note?.path">阅读</a>
						<a :href="homeData.latest.note?.collectionPath">更多</a>
					</div>
				</article>

				<article class="latest-card post-card">
					<div class="card-top">
						<span class="card-type">Blog</span>
						<time>{{ formatDate(homeData.latest.post?.isoDate) }}</time>
					</div>
					<p class="card-meta">/blog/{{ homeData.latest.post?.section }}</p>
					<h3>
						<a :href="homeData.latest.post?.path">{{
							homeData.latest.post?.title
						}}</a>
					</h3>
					<p class="card-excerpt">{{ homeData.latest.post?.excerpt }}</p>
					<div class="post-tags">
						<span
							v-for="tag in homeData.latest.post?.tags ?? []"
							:key="tag"
							>{{ tag }}</span
						>
					</div>
					<div class="card-links">
						<a :href="homeData.latest.post?.path">阅读</a>
						<a href="/blog/">更多</a>
					</div>
				</article>

				<article class="latest-card talk-card">
					<div class="card-top">
						<span class="card-type">Talk</span>
						<time>{{ formatDate(homeData.latest.talk?.isoDate) }}</time>
					</div>

					<div class="home-talk-header">
						<img
							v-if="homeData.latest.talk?.account.avatar"
							:src="homeData.latest.talk?.account.avatar"
							:alt="homeData.latest.talk?.account.displayName || '头像'"
							class="home-talk-avatar"
							no-view
						/>
						<div class="home-talk-account">
							<a
								:href="
									homeData.latest.talk?.account.profile || homeData.latest.talk?.path
								"
								target="_blank"
								rel="noreferrer"
								class="home-talk-display"
							>
								{{ homeData.latest.talk?.account.displayName }}
							</a>
							<span class="home-talk-username">
								@{{ homeData.latest.talk?.account.username }}@{{
									homeData.latest.talk?.account.instanceDomain
								}}
							</span>
						</div>
					</div>

					<h3>
						<a
							:href="homeData.latest.talk?.path"
							:target="
								isExternalLink(homeData.latest.talk?.path) ? '_blank' : undefined
							"
							rel="noreferrer"
						>
							{{ homeData.latest.talk?.title }}
						</a>
					</h3>
					<p class="card-excerpt">{{ homeData.latest.talk?.excerpt }}</p>
					<div
						v-if="homeData.latest.talk?.media.length"
						class="home-talk-media-grid"
					>
						<a
							v-for="media in homeData.latest.talk?.media"
							:key="media.id"
							:href="media.url"
							target="_blank"
							rel="noreferrer"
							class="home-talk-media-item"
						>
							<img
								:src="media.previewUrl"
								:alt="media.description"
								class="home-talk-media-image"
							/>
						</a>
					</div>
					<div class="talk-stats">
						<span class="talk-stat-item">
							<span class="vpi-reply"></span> {{ homeData.latest.talk?.stats.replies }}
						</span>
						<span class="talk-stat-item">
							<span class="vpi-reblog"></span>
							{{ homeData.latest.talk?.stats.reblogs }}
						</span>
						<span class="talk-stat-item">
							<span class="vpi-star"></span>
							{{ homeData.latest.talk?.stats.favourites }}
						</span>
					</div>
					<div class="card-links">
						<a
							:href="homeData.latest.talk?.path"
							:target="
								isExternalLink(homeData.latest.talk?.path) ? '_blank' : undefined
							"
							rel="noreferrer"
						>
							查看原文
						</a>
						<a href="/talks/">动态</a>
					</div>
				</article>

				<article class="latest-card bangumi-card">
					<div class="bangumi-content">
						<div class="bangumi-main">
							<div class="card-top">
								<span class="card-type">Bangumi</span>
								<time>{{ formatDate(homeData.latest.bangumi?.isoDate) }}</time>
							</div>
							<div class="bangumi-meta">
								<span>{{ homeData.latest.bangumi?.category }}</span>
								<span>{{ homeData.latest.bangumi?.status }}</span>
								<span v-if="homeData.latest.bangumi?.score"
									>评分{{ homeData.latest.bangumi?.score }}</span
								>
							</div>
							<h3>
								<a
									:href="homeData.latest.bangumi?.path"
									:target="
										isExternalLink(homeData.latest.bangumi?.path) ? '_blank' : undefined
									"
									rel="noreferrer"
								>
									{{ homeData.latest.bangumi?.title }}
								</a>
							</h3>
							<p
								v-if="homeData.latest.bangumi?.subtitle"
								class="card-meta"
							>
								{{ homeData.latest.bangumi?.subtitle }}
							</p>
							<p class="card-excerpt">{{ homeData.latest.bangumi?.excerpt }}</p>
							<div class="card-links">
								<a
									:href="homeData.latest.bangumi?.path"
									:target="
										isExternalLink(homeData.latest.bangumi?.path) ? '_blank' : undefined
									"
									rel="noreferrer"
								>
									前往 Bangumi
								</a>
								<a href="/bangumi/">收藏页</a>
							</div>
						</div>

						<a
							v-if="homeData.latest.bangumi?.image"
							class="bangumi-cover"
							:href="homeData.latest.bangumi?.path"
							:target="
								isExternalLink(homeData.latest.bangumi?.path) ? '_blank' : undefined
							"
							rel="noreferrer"
						>
							<img
								:src="homeData.latest.bangumi?.image"
								:alt="homeData.latest.bangumi?.title"
							/>
						</a>
					</div>
				</article>
			</div>
		</div>
	</VPHomeBox>
</template>

<style scoped>
	.home-latest {
		position: relative;
		overflow: hidden;
	}

	.latest-shell {
		position: relative;
		padding: 0.4rem 0 0;
		font-size: 0.94rem;
	}

	.latest-shell::before {
		position: absolute;
		inset: -2rem -2rem auto;
		height: 35rem;
		background:
			radial-gradient(
				circle at 15% 20%,
				rgba(80, 134, 161, 0.16),
				transparent 35%
			),
			radial-gradient(
				circle at 82% 10%,
				rgba(200, 168, 122, 0.14),
				transparent 30%
			),
			linear-gradient(180deg, rgba(255, 255, 255, 0.26), rgba(255, 255, 255, 0));
		content: "";
		pointer-events: none;
		border-radius: 5px;
	}

	.latest-heading,
	.latest-stats,
	.latest-grid {
		position: relative;
		z-index: 1;
	}

	.latest-heading {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		margin-bottom: 1rem;
	}

	.latest-heading h2 {
		margin: 0;
		font-size: clamp(1.55rem, 2.7vw, 2.2rem);
		line-height: 1.05;
	}

	.latest-text {
		max-width: 34rem;
		margin: 0;
		color: var(--vp-c-text-2);
		font-size: 0.92rem;
	}

	.latest-stats {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.stat-chip,
	.latest-card {
		background: rgba(255, 255, 255, 0.1);
		-webkit-backdrop-filter: blur(1.5px);
		backdrop-filter: blur(1.5px);
		border-radius: 12px;
		box-shadow:
			0 8px 32px rgba(31, 38, 135, 0.08),
			inset 0 1px 2px rgba(255, 255, 255, 0.6);
		border: 0.5px solid
			rgba(from var(--vp-code-block-bg) calc(1 - r) calc(1 - g) calc(1 - b));
	}

	.stat-chip {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		padding: 0.9rem 1rem;
	}

	.stat-chip span {
		font-size: 0.92rem;
		color: var(--vp-c-text-2);
	}

	.stat-chip strong {
		font-family: "Ysabeau", var(--vp-font-family-base);
		font-size: 1.08rem;
		font-weight: 500;
	}

	.latest-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1rem;
	}

	.latest-card {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.78rem;
		padding: 1rem 1rem 0.92rem;
		overflow: hidden;
	}

	.talk-card {
		gap: 0.58rem;
	}

	.latest-card:hover {
		transform: translateY(-3px);
		box-shadow:
			0 8px 32px rgba(31, 38, 135, 0.08),
			inset 0 1px 2px rgba(255, 255, 255, 0.6);
	}

	.latest-card::after {
		position: absolute;
		inset: auto -4rem -4rem auto;
		width: 10rem;
		height: 10rem;
		border-radius: 999px;
		filter: blur(12px);
		content: "";
		opacity: 0.7;
		pointer-events: none;
	}

	.note-card::after {
		background: rgba(96, 166, 152, 0.18);
	}

	.post-card::after {
		background: rgba(204, 164, 95, 0.18);
	}

	.talk-card::after {
		background: rgba(92, 132, 194, 0.18);
	}

	.bangumi-card::after {
		background: rgba(181, 111, 121, 0.18);
	}

	.card-top,
	.card-links,
	.talk-stats,
	.bangumi-meta,
	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.55rem;
		align-items: center;
	}

	.card-top {
		justify-content: space-between;
		color: var(--vp-c-text-3);
		font-size: 0.76rem;
	}

	.card-type,
	.bangumi-meta span,
	.post-tags span {
		padding: 0.22rem 0.58rem;
		border-radius: 999px;
		background: rgba(80, 134, 161, 0.1);
		color: var(--vp-c-brand-1);
		font-size: 0.72rem;
	}

	.latest-card h3 {
		margin: 0;
		font-size: 1.08rem;
		line-height: 1.34;
	}

	.card-meta {
		margin: 0;
		color: var(--vp-c-text-2);
		font-size: 0.84rem;
	}

	.card-excerpt {
		margin: 0;
		color: var(--vp-c-text-2);
		font-size: 0.88rem;
		line-height: 1.68;
		overflow-wrap: anywhere;
		word-break: break-word;
	}

	.talk-card .card-excerpt {
		line-height: 1.58;
	}

	.home-talk-header {
		display: flex;
		align-items: center;
		gap: 0.72rem;
		min-width: 0;
	}

	.home-talk-avatar {
		width: 44px;
		height: 44px;
		flex: 0 0 44px;
		border-radius: 50%;
		border: 2px solid #f8f9fa;
		box-shadow: 0 0.5px 1.5px
			rgb(from var(--vp-code-block-bg) calc(1 - r) calc(1 - g) calc(1 - b));
		object-fit: cover;
	}

	.home-talk-account {
		display: flex;
		flex: 1;
		min-width: 0;
		flex-direction: column;
	}

	.home-talk-display {
		overflow: hidden;
		color: var(--vp-c-text-1);
		font-size: 0.92rem;
		font-weight: 500;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.home-talk-username {
		overflow: hidden;
		color: var(--vp-c-text-2);
		font-size: 0.78rem;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.home-talk-media-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(86px, 1fr));
		gap: 0.45rem;
		margin-top: -0.2rem;
	}

	.home-talk-media-item {
		display: block;
		border-radius: 10px;
		overflow: hidden;
		background: #f8fafc;
		transition: transform 0.3s;
	}

	.home-talk-media-item:hover {
		transform: scale(1.03);
	}

	.home-talk-media-image {
		display: block;
		width: 100%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
	}

	.card-links {
		margin-top: auto;
	}

	.card-links a {
		display: inline-flex;
		align-items: center;
		padding: 0.22rem 0.58rem;
		border-radius: 3px;
		background: rgba(80, 134, 161, 0.1);
		color: var(--vp-c-brand-1);
		font-size: 0.72rem;
		text-decoration: none;
		transition:
			transform 0.2s ease,
			background-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	.card-links a:hover,
	.latest-card h3 a:hover,
	.bangumi-cover:hover {
		transform: translateY(-1px);
	}

	.talk-stats {
		color: var(--vp-c-text-3);
		font-size: 0.78rem;
		column-gap: 0.9rem;
		row-gap: 0.45rem;
	}

	.talk-stat-item {
		display: inline-flex;
		align-items: center;
		gap: 0.32rem;
		line-height: 1.2;
	}

	.bangumi-content {
		display: flex;
		flex-direction: column-reverse;
		gap: 1rem;
		height: auto;
	}

	.bangumi-cover {
		display: block;
		width: 100%;
		max-width: 7rem;
		margin: 0 auto;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 18px 40px rgba(48, 38, 51, 0.18);
	}

	.bangumi-cover img {
		display: block;
		width: 100%;
		aspect-ratio: 2 / 3;
		object-fit: cover;
	}

	.latest-card h3 a,
	.bangumi-cover {
		transition: transform 0.2s ease;
	}

	:deep(.home-latest a) {
		text-decoration: none;
	}

	@media (min-width: 720px) {
		.latest-heading {
			flex-direction: row;
			justify-content: space-between;
			align-items: end;
		}

		.latest-stats {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (min-width: 960px) {
		.latest-grid {
			grid-template-columns: repeat(12, minmax(0, 1fr));
		}

		.note-card,
		.post-card {
			grid-column: span 6;
		}

		.talk-card {
			grid-column: span 7;
		}

		.bangumi-card {
			grid-column: span 5;
		}

		.bangumi-content {
			flex-direction: row;
			align-items: flex-start;
		}

		.bangumi-main {
			display: flex;
			flex: 1;
			flex-direction: column;
			gap: 0.9rem;
		}

		.bangumi-cover {
			flex: 0 0 6.6rem;
			max-width: none;
			margin: 0;
		}
	}

	:global(html.dark) .latest-shell::before {
		background:
			radial-gradient(
				circle at 15% 20%,
				rgba(86, 117, 128, 0.18),
				transparent 35%
			),
			radial-gradient(
				circle at 82% 10%,
				rgba(135, 116, 90, 0.14),
				transparent 30%
			),
			linear-gradient(180deg, rgba(214, 223, 228, 0.04), rgba(214, 223, 228, 0));
	}

	:global(html.dark) .stat-chip,
	:global(html.dark) .latest-card {
		background: rgba(255, 255, 255, 0.06);
	}

	:global(html.dark) .card-links a {
		background: rgba(80, 134, 161, 0.16);
	}

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
