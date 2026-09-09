<template>
	<div class="talks-container">
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
				v-if="displayThreads.length === 0"
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
					v-for="toot in pagedThreads"
					:key="toot.id"
					:class="['toot-card', { pinned: toot.pinned }]"
				>
					<div
						v-if="toot.pinned"
						class="pinned-label"
					>
						<span class="vpi-pin"></span> pinned
					</div>
					<div class="toot-header">
						<img
							:src="toot.account.avatar"
							alt="头像"
							class="avatar"
							no-view
						/>
						<div class="account-info">
							<a
								:href="mastodonProfile"
								target="_blank"
								class="mastodonProfile"
							>
								<span class="display-name">{{ toot.account.display_name }}</span>
							</a>
							<span class="username"
								>@{{ toot.account.username }}@{{ instanceDomain }}</span
							>
						</div>
						<div class="toot-date">
							<a
								:href="toot.uri"
								target="_blank"
							>
								{{ formatDate(toot.created_at) }}
							</a>
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
							/>
						</div>
					</div>

					<div class="toot-stats">
						<span class="stat-item">
							<a
								:href="toot.uri"
								target="_blank"
							>
								<span class="vpi-reply"></span> {{ toot.replies_count }}
							</a>
						</span>
						<span class="stat-item">
							<a
								:href="toot.uri"
								target="_blank"
							>
								<span class="vpi-reblog"></span> {{ toot.reblogs_count }}
							</a>
						</span>
						<span class="stat-item">
							<a
								:href="toot.uri"
								target="_blank"
							>
								<span class="vpi-star"></span> {{ toot.favourites_count }}
							</a>
						</span>
					</div>

					<div
						v-if="toot.replies.length"
						class="reply-list"
					>
						<div
							v-for="reply in toot.replies"
							:key="reply.id"
							class="toot-card reply-card"
						>
							<div class="toot-header">
								<img
									:src="reply.account.avatar"
									alt="头像"
									class="avatar"
									no-view
								/>
								<div class="account-info">
									<a
										:href="mastodonProfile"
										target="_blank"
										class="mastodonProfile"
									>
										<span class="display-name">{{ reply.account.display_name }}</span>
									</a>
									<span class="username"
										>@{{ reply.account.username }}@{{ instanceDomain }}</span
									>
								</div>
								<div class="toot-date">
									<a
										:href="reply.uri"
										target="_blank"
									>
										{{ formatDate(reply.created_at) }}
									</a>
								</div>
							</div>

							<div
								class="toot-content"
								v-html="reply.content"
							></div>

							<div
								v-if="reply.media_attachments.length"
								class="media-grid"
							>
								<div
									v-for="media in reply.media_attachments"
									:key="media.id"
									class="media-item"
								>
									<img
										v-if="media.type === 'image'"
										:src="media.url"
										:alt="media.description || '图片'"
										class="media-image"
									/>
								</div>
							</div>

							<div class="toot-stats">
								<span class="stat-item">
									<a
										:href="reply.uri"
										target="_blank"
									>
										<span class="vpi-reply"></span> {{ reply.replies_count }}
									</a>
								</span>
								<span class="stat-item">
									<a
										:href="reply.uri"
										target="_blank"
									>
										<span class="vpi-reblog"></span> {{ reply.reblogs_count }}
									</a>
								</span>
								<span class="stat-item">
									<a
										:href="reply.uri"
										target="_blank"
									>
										<span class="vpi-star"></span> {{ reply.favourites_count }}
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div
					v-if="totalPages > 1"
					class="pagination"
				>
					<a href="#top">
						<button
							@click="currentPage = Math.max(1, currentPage - 1)"
							:disabled="currentPage === 1"
							class="pagination-button prev"
						>
							上一页
						</button>
					</a>

					<span class="page-info"
						>第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span
					>

					<a href="#top">
						<button
							@click="currentPage = Math.min(totalPages, currentPage + 1)"
							:disabled="currentPage === totalPages"
							class="pagination-button next"
						>
							下一页
						</button>
					</a>
				</div>
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
				currentImage: "",
			};
		},
		computed: {
			ownAccountId() {
				const ownToot = this.toots.find((toot) => toot.account && toot.account.id);
				return ownToot ? ownToot.account.id : null;
			},
			// 过滤转帖和回复给其他人的动态
			filteredToots() {
				return this.toots.filter((toot) => {
					if (toot.reblog) return false;
					if (!toot.in_reply_to_id) return true;
					return (
						!toot.in_reply_to_account_id ||
						toot.in_reply_to_account_id === this.ownAccountId
					);
				});
			},
			displayThreads() {
				const tootMap = new Map();
				const childToParent = new Map();

				this.filteredToots.forEach((toot) => {
					tootMap.set(toot.id, {
						...toot,
						replies: [],
					});
				});

				tootMap.forEach((toot) => {
					if (toot.in_reply_to_id && tootMap.has(toot.in_reply_to_id)) {
						childToParent.set(toot.id, toot.in_reply_to_id);
					}
				});

				const findThreadRootId = (toot) => {
					let rootId = toot.in_reply_to_id;
					while (rootId && childToParent.has(rootId)) {
						rootId = childToParent.get(rootId);
					}
					return rootId;
				};

				const roots = [];
				tootMap.forEach((toot) => {
					if (!toot.in_reply_to_id || !tootMap.has(toot.in_reply_to_id)) {
						roots.push(toot);
						return;
					}

					const root = tootMap.get(findThreadRootId(toot));
					if (root) {
						root.replies.push(toot);
					}
				});

				const byCreatedAtDesc = (a, b) =>
					Date.parse(b.created_at) - Date.parse(a.created_at);
				const byCreatedAtAsc = (a, b) =>
					Date.parse(a.created_at) - Date.parse(b.created_at);

				roots.forEach((toot) => {
					toot.replies.sort(byCreatedAtAsc);
				});

				return roots.sort((a, b) => {
					if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
					return byCreatedAtDesc(a, b);
				});
			},
			// 当前页显示的动态
			pagedThreads() {
				const start = (this.currentPage - 1) * this.itemsPerPage;
				const end = start + this.itemsPerPage;
				return this.displayThreads.slice(start, end);
			},
			// 总页数
			totalPages() {
				return Math.ceil(this.displayThreads.length / this.itemsPerPage);
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
		},
	};
</script>

<style scoped>
.talks-container {
    max-width: 1100px;
    margin: 0 auto;
}
.toot-card {
    padding: 1.3rem;
    margin-bottom: 1.2rem;
    border: 1px solid var(--paper-rule);
    border-radius: 2px;
    background: var(--paper-surface);
    box-shadow: 0 3px 8px var(--paper-shadow-color);
}
.toot-card.pinned {
    border-top: 3px solid var(--paper-accent);
}
.pinned-label {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0.9rem;
    color: var(--paper-accent);
    font-size: 0.75rem;
}
.reply-list {
    margin-top: 1.2rem;
    padding-left: 0.8rem;
    border-left: 2px solid var(--paper-rule);
}
.reply-card {
    padding: 0.8rem;
    box-shadow: none;
    background: var(--vp-c-bg);
}
.reply-card:last-child {
    margin-bottom: 0;
}
.toot-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 0.7rem;
    margin-bottom: 1.1rem;
}
.avatar {
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    border-radius: 50%;
    object-fit: cover;
}
.account-info {
    flex: 1;
    min-width: 0;
}
.display-name {
    display: block;
    color: var(--vp-c-text-1);
    font-size: 0.9rem;
}
.username {
    display: block;
    color: var(--vp-c-text-2);
    font-size: 0.7rem;
    overflow-wrap: anywhere;
}
.mastodonProfile, .toot-date a, .stat-item a {
    color: inherit;
    text-decoration: none;
}
.toot-date {
    width: 100%;
    color: var(--vp-c-text-2);
    font-size: 0.7rem;
}
.toot-content {
    margin-bottom: 1.1rem;
    color: var(--vp-c-text-1);
    font-size: 0.9rem;
    line-height: 1.85;
    overflow-wrap: anywhere;
}
.toot-content :deep(a) {
    color: var(--vp-c-brand-1);
    text-decoration: underline;
    text-underline-offset: 3px;
}
.media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
    gap: 0.6rem;
    margin: 1rem 0;
}
.media-item {
    overflow: hidden;
    border: 1px solid var(--paper-rule);
    background: var(--vp-c-bg-soft);
}
.media-image {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
}
.toot-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 0.8rem;
    border-top: 1px solid var(--paper-rule);
    color: var(--vp-c-text-2);
    font-size: 0.75rem;
}
.stat-item, .stat-item a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
}
.pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    margin-top: 2rem;
}
.pagination-button, .retry-btn {
    min-height: 44px;
    padding: 0.45rem 0.9rem;
    border: 1px solid var(--paper-rule);
    border-radius: 2px;
    background: var(--paper-surface);
    color: var(--vp-c-text-1);
    font: inherit;
    font-size: 0.8rem;
    cursor: pointer;
}
.pagination-button:hover:not(:disabled), .retry-btn:hover {
    border-color: var(--vp-c-brand-1);
    background: var(--vp-c-bg-soft);
}
.pagination-button:disabled {
    opacity: 0.45;
    cursor: not-allowed;
}
.page-info {
    color: var(--vp-c-text-2);
    font-size: 0.75rem;
}
.loading, .error, .empty {
    padding: 2rem 1rem;
    color: var(--vp-c-text-2);
    text-align: center;
}
.error {
    border: 1px solid var(--paper-accent);
    color: var(--paper-accent);
}
.spinner {
    width: 32px;
    height: 32px;
    margin: 0 auto 1rem;
    border: 2px solid var(--paper-rule);
    border-top-color: var(--vp-c-brand-1);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
@media (max-width: 639px) {
    .toot-card {
        padding: 0.9rem;
    }
    .reply-list {
        padding-left: 0.5rem;
    }
    .reply-card {
        padding: 0.65rem;
    }
    .display-name {
        overflow-wrap: anywhere;
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

	.vpi-pin {
		--icon: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Im0xNyAxMmwzIDNsLTEuNSAxLjVsLTIuMjUtMi4yNUwxMyAxNy41VjIyaC0ydi00LjVsLTMuMjUtMy4yNUw1LjUgMTYuNUw0IDE1bDMtM2gxMHptLTEuNS0xMEwxNyAzaC0yLjI1bC0yLjUgMi41bC00LTFMMTIgOC4yNUw4LjI1IDEybDMuNSAzLjVsNS43NS01Ljc1TDE3LjUgN0wxOSAzLjVMMTcuNSAyeiIvPjwvc3ZnPg==);
	}
</style>
