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
            <nav class="latest-stats" aria-label="站点内容">
                <a class="stat-chip" href="#latest-note"><span>学习笔记 <small>Notes</small></span><strong>{{ formatCount(homeData.counts.notes) }}</strong></a>
                <a class="stat-chip" href="/blog/"><span>博客文章 <small>Posts</small></span><strong>{{ formatCount(homeData.counts.posts) }}</strong></a>
                <a class="stat-chip" href="/talks/"><span>日常动态 <small>Talks</small></span><strong>{{ formatCount(homeData.counts.talks) }}</strong></a>
                <a class="stat-chip" href="/bangumi/"><span>文娱收藏 <small>Bangumi</small></span><strong>{{ formatCount(homeData.counts.bangumi) }}</strong></a>
            </nav>

            <div class="latest-heading">
                <h2>最近更新 <span>Recent entries</span></h2>
            </div>

			<div class="latest-grid">
				<article id="latest-note" class="latest-card note-card">
					<div class="card-top">
						<span class="card-type">01 / 学习笔记</span>
						<time :datetime="homeData.latest.note?.isoDate">{{ formatDate(homeData.latest.note?.isoDate) }}</time>
					</div>
					<p class="card-meta">{{ homeData.latest.note?.collectionTitle }}</p>
					<h3>
						<a :href="homeData.latest.note?.path">{{
							homeData.latest.note?.title
						}}</a>
					</h3>
					<p class="card-excerpt">{{ homeData.latest.note?.excerpt }}</p>
					<div class="card-links">
						<a :href="homeData.latest.note?.path">阅读笔记 ↗</a>
						<a :href="homeData.latest.note?.collectionPath">本册目录</a>
					</div>
				</article>

				<article class="latest-card post-card">
					<div class="card-top">
						<span class="card-type">02 / 博客文章</span>
						<time :datetime="homeData.latest.post?.isoDate">{{ formatDate(homeData.latest.post?.isoDate) }}</time>
					</div>
					<p class="card-meta">{{ homeData.latest.post?.section }}</p>
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
						<a :href="homeData.latest.post?.path">阅读全文 ↗</a>
						<a href="/blog/">所有文章</a>
					</div>
				</article>

				<article class="latest-card talk-card">
					<div class="card-top">
						<span class="card-type">03 / 日常动态</span>
						<time :datetime="homeData.latest.talk?.isoDate">{{ formatDate(homeData.latest.talk?.isoDate) }}</time>
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
								<span class="card-type">04 / 文娱收藏</span>
								<time :datetime="homeData.latest.bangumi?.isoDate">{{ formatDate(homeData.latest.bangumi?.isoDate) }}</time>
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
								loading="lazy"
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
    padding-top: 0.5rem;
    padding-bottom: 3rem;
}
.latest-shell {
    font-size: 0.94rem;
}
.latest-stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin: 0.8rem 0 2.7rem;
    border-block: 1px solid var(--paper-rule);
}
.stat-chip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 1rem 1.2rem;
    color: var(--vp-c-text-1);
    text-decoration: none;
    transition: background-color 160ms;
}
.stat-chip + .stat-chip {
    border-left: 1px solid var(--paper-rule);
}
.stat-chip:hover {
    background: var(--vp-c-brand-soft);
}
.stat-chip span {
    font-size: 0.8rem;
}
.stat-chip small {
    display: block;
    color: var(--vp-c-text-2);
    font-size: 0.68rem;
    font-style: italic;
}
.stat-chip strong {
    font-size: 1.65rem;
    font-weight: 400;
    font-variant-numeric: tabular-nums;
}
.latest-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.1rem;
}
.latest-heading h2 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 500;
}
.latest-heading h2 span {
    margin-left: 0.65rem;
    color: var(--vp-c-text-2);
    font-size: 0.8rem;
    font-style: italic;
    font-weight: 400;
}
.latest-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
}
.latest-card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    gap: 0.8rem;
    padding: clamp(1.1rem, 2.3vw, 1.8rem);
    border: 1px solid var(--paper-rule);
    background: var(--paper-surface);
    box-shadow: 0 3px 8px var(--paper-shadow-color);
    scroll-margin-top: calc(var(--vp-nav-height) + 1rem);
    transition: border-color 180ms, box-shadow 180ms;
}
.latest-card:hover {
    border-color: var(--vp-c-brand-1);
    box-shadow: var(--paper-shadow);
}
.note-card {
    border-top: 3px solid var(--vp-c-brand-1);
}
.post-card {
    border-top: 3px solid var(--paper-accent);
}
.card-top, .card-links, .talk-stats, .bangumi-meta, .post-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
}
.card-top {
    justify-content: space-between;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--paper-rule);
    font-size: 0.68rem;
    color: var(--vp-c-text-2);
}
.card-type {
    color: var(--paper-accent);
    letter-spacing: 0.08em;
}
.card-top time {
    font-variant-numeric: tabular-nums;
}
.latest-card h3 {
    margin: 0;
    font-size: clamp(1.15rem, 2vw, 1.4rem);
    font-weight: 500;
    line-height: 1.5;
    overflow-wrap: anywhere;
}
.latest-card h3 a {
    color: var(--vp-c-text-1);
    text-decoration: none;
}
.latest-card h3 a:hover {
    color: var(--vp-c-brand-1);
}
.card-meta {
    margin: 0;
    font-size: 0.75rem;
    color: var(--vp-c-text-2);
}
.card-excerpt {
    margin: 0;
    font-size: 0.86rem;
    line-height: 1.85;
    color: var(--vp-c-text-2);
    overflow-wrap: anywhere;
}
.post-tags span, .bangumi-meta span {
    font-size: 0.68rem;
    color: var(--vp-c-text-2);
}
.post-tags span + span::before, .bangumi-meta span + span::before {
    content: '·';
    margin-right: 0.5rem;
}
.card-links {
    justify-content: space-between;
    margin-top: auto;
    padding-top: 0.7rem;
    border-top: 1px solid var(--paper-rule);
}
.card-links a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: var(--vp-c-brand-1);
    font-size: 0.78rem;
    text-decoration: none;
}
.card-links a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
}
.home-talk-header {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    min-width: 0;
}
.home-talk-avatar {
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    border-radius: 50%;
    object-fit: cover;
}
.home-talk-account {
    display: flex;
    flex-direction: column;
    min-width: 0;
}
.home-talk-display {
    color: var(--vp-c-text-1);
    font-size: 0.8rem;
    text-decoration: none;
}
.home-talk-username {
    color: var(--vp-c-text-2);
    font-size: 0.68rem;
}
.home-talk-display, .home-talk-username {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.home-talk-media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(86px, 1fr));
    gap: 0.5rem;
}
.home-talk-media-item {
    display: block;
    overflow: hidden;
    border: 1px solid var(--paper-rule);
}
.home-talk-media-image {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
}
.talk-stats {
    color: var(--vp-c-text-2);
    font-size: 0.7rem;
    gap: 1rem;
}
.talk-stat-item {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
}
.bangumi-content {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    height: 100%;
}
.bangumi-main {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.8rem;
    min-width: 0;
    height: 100%;
}
.bangumi-cover {
    display: block;
    flex: 0 0 5rem;
    padding: 0.25rem;
    border: 1px solid var(--paper-rule);
    box-shadow: 2px 3px 0 var(--paper-rule);
}
.bangumi-cover img {
    display: block;
    width: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
}
@media (max-width: 719px) {
    .latest-stats {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        margin-bottom: 1.8rem;
    }
    .stat-chip {
        padding: 0.8rem;
    }
    .stat-chip:nth-child(3) {
        border-left: 0;
    }
    .stat-chip:nth-child(n + 3) {
        border-top: 1px solid var(--paper-rule);
    }
    .latest-grid {
        grid-template-columns: minmax(0, 1fr);
    }
    .latest-heading h2 span {
        display: block;
        margin: 0.3rem 0 0;
    }
}
@media (max-width: 379px) {
    .bangumi-content {
        flex-direction: column-reverse;
    }
    .bangumi-cover {
        flex-basis: auto;
        width: 5rem;
    }
}
@media (prefers-reduced-motion: reduce) {
    .latest-card, .stat-chip {
        transition: none;
    }
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
