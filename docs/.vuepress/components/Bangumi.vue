<template>
	<div class="bangumi-library">
		<div class="container">
			<details class="hint-container details">
				<summary>类型 / 状态</summary>
				<div class="filter-section">
					<div class="filter-group">
						<h2><i class="fas fa-filter"></i>类型</h2>
						<div class="btn-group">
							<button
								v-for="(category, key) in categories"
								:key="key"
								class="btn"
								:class="{ active: currentCategory === key }"
                                :aria-pressed="currentCategory === key"
								@click="changeCategory(key)"
							>
								{{ category.name }}
							</button>
						</div>
					</div>

					<div class="filter-group">
						<h2><i class="fas fa-tasks"></i>状态</h2>
						<div class="btn-group">
							<button
								class="btn status-btn planTo"
								:class="{ active: currentStatus === 'planTo' }"
                                :aria-pressed="currentStatus === 'planTo'"
								@click="changeStatus('planTo')"
							>
								planTo
							</button>
							<button
								class="btn status-btn ing"
								:class="{ active: currentStatus === 'ing' }"
                                :aria-pressed="currentStatus === 'ing'"
								@click="changeStatus('ing')"
							>
								ing
							</button>
							<button
								class="btn status-btn completed"
								:class="{ active: currentStatus === 'completed' }"
                                :aria-pressed="currentStatus === 'completed'"
								@click="changeStatus('completed')"
							>
								completed
							</button>
						</div>
					</div>
				</div>
			</details>

			<transition
				name="fade"
				mode="out-in"
			>
				<div
					v-if="filteredItems.length > 0"
					key="has-items"
				>
					<div class="card-flex">
						<div
							v-for="(item, index) in paginatedItems"
							:key="index"
							class="card"
						>
							<div class="card-img">
								<img
									loading="lazy"
                                    :src="item.subject.images.common"
									:alt="item.subject.name"
								/>
							</div>
							<div class="card-content">
								<h3 class="card-title">
									<a
										:href="'https://bgm.tv/subject/' + item.subject.id"
										target="_blank"
										>{{ item.subject.name }}</a
									>
								</h3>
								<div class="card-meta">
									<div class="card-time">
										标记时间<br />
										{{ formatDate(item.updated_at) }}
									</div>
									<div class="line"></div>
									<div class="card-score">
										Bangumi 评分<br />
										{{ item.subject.score || "N/A" }}
									</div>
									<div class="line"></div>
									<div
										class="card-status"
										:class="getStatusClass(item.type)"
									>
										状态<br />
										{{ getStatusText(item.type) }}
									</div>
								</div>
								<p class="card-summary">
									{{ truncateSummary(item.subject.short_summary) }}
								</p>
							</div>
						</div>
					</div>

					<div class="pagination">
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

				<div
					v-else
					key="no-items"
					class="empty-state"
				>
					<i class="fas fa-inbox"></i>
					<h3>没有找到收藏条目</h3>
					<p>请尝试选择其他类型或状态</p>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bangumiData: [],
				currentCategory: "anime",
				currentStatus: "ing",
				currentPage: 1,
				itemsPerPage: 10,
				categories: {
					book: { name: "书籍", icon: "fas fa-book" },
					anime: { name: "动画", icon: "fas fa-film" },
					music: { name: "音乐", icon: "fas fa-music" },
					game: { name: "游戏", icon: "fas fa-gamepad" },
				},
			};
		},
		computed: {
			// 获取当前选中的条目
			filteredItems() {
				const category = this.bangumiData[this.currentCategory];
				if (category && category[this.currentStatus]) {
					return category[this.currentStatus];
				}
				return [];
			},

			// 分页处理
			paginatedItems() {
				const start = (this.currentPage - 1) * this.itemsPerPage;
				const end = start + this.itemsPerPage;
				return this.filteredItems.slice(start, end);
			},

			// 计算总页数
			totalPages() {
				return Math.ceil(this.filteredItems.length / this.itemsPerPage) || 1;
			},
		},
		methods: {
			// 切换媒体类型
			changeCategory(category) {
				this.currentCategory = category;
				this.currentPage = 1;
			},

			// 切换状态
			changeStatus(status) {
				this.currentStatus = status;
				this.currentPage = 1;
			},

			// 格式化日期
			formatDate(dateString) {
				if (!dateString) return "未知日期";
				const date = new Date(dateString);
				return date.toLocaleDateString("zh-CN");
			},

			// 截断摘要
			truncateSummary(summary) {
				if (!summary) return "暂无简介";
				return summary.length > 150 ? summary.substring(0, 150) + "..." : summary;
			},

			// 获取状态文本
			getStatusText(type) {
				const statusMap = {
					1: "planTo",
					2: "completed",
					3: "ing",
				};
				return statusMap[type] || "未知状态";
			},

			// 获取状态类名
			getStatusClass(type) {
				const classMap = {
					1: "planTo",
					2: "completed",
					3: "ing",
				};
				return classMap[type] || "";
			},

			// 切换分页
			changePage(page) {
				this.currentPage = page;
			},

			// 上一页
			prevPage() {
				if (this.currentPage > 1) {
					this.currentPage--;
				}
			},

			// 下一页
			nextPage() {
				if (this.currentPage < this.totalPages) {
					this.currentPage++;
				}
			},
		},
		mounted() {
			fetch("/bangumi.json")
				.then((response) => response.json())
				.then((data) => {
					this.bangumiData = data;
				})
				.catch((error) => {
					console.error("Error fetching bangumi data:", error);
				});
		},
	};
</script>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
}
a {
    color: var(--vp-c-text-1);
    text-decoration: none;
}
a:hover {
    color: var(--vp-c-brand-1);
}
.filter-section {
    padding: 0.5rem 0;
}
.filter-group + .filter-group {
    margin-top: 1.2rem;
}
.filter-group h2 {
    margin: 0 0 0.7rem;
    padding: 0;
    border: 0;
    font-size: 1rem;
}
.btn-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}
.btn, .pagination-button {
    min-height: 44px;
    padding: 0.45rem 0.9rem;
    border: 1px solid var(--paper-rule);
    border-radius: 2px;
    background: var(--paper-surface);
    color: var(--vp-c-text-1);
    font: inherit;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background-color 160ms, border-color 160ms;
}
.btn:hover, .pagination-button:hover:not(:disabled) {
    background: var(--vp-c-bg-soft);
    border-color: var(--vp-c-brand-1);
}
.btn.active {
    background: var(--vp-c-brand-1);
    border-color: var(--vp-c-brand-1);
    color: var(--paper-surface);
}
.pagination-button:disabled {
    cursor: not-allowed;
    opacity: 0.45;
}
.card-flex {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.card {
    display: flex;
    align-items: flex-start;
    gap: 1.2rem;
    padding: 1.2rem;
    border: 1px solid var(--paper-rule);
    background: var(--paper-surface);
    box-shadow: 0 3px 8px var(--paper-shadow-color);
    transition: border-color 180ms;
}
.card:hover {
    border-color: var(--vp-c-brand-1);
}
.card-img {
    flex: 0 0 6rem;
    padding: 0.25rem;
    border: 1px solid var(--paper-rule);
    box-shadow: 2px 3px 0 var(--paper-rule);
}
.card-img img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 2 / 3;
    object-fit: cover;
}
.card-content {
    min-width: 0;
    flex: 1;
}
.card-title {
    margin: 0 0 0.7rem;
    font-size: 1.15rem;
    font-weight: 500;
    line-height: 1.5;
    overflow-wrap: anywhere;
}
.card-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 0.8rem;
    color: var(--vp-c-text-2);
    font-size: 0.7rem;
    line-height: 1.7;
}
.line {
    border-right: 1px solid var(--paper-rule);
}
.card-summary {
    margin: 0.8rem 0 0;
    font-size: 0.85rem;
    color: var(--vp-c-text-2);
    overflow-wrap: anywhere;
}
.pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    margin-top: 2rem;
}
.page-info {
    color: var(--vp-c-text-2);
    font-size: 0.75rem;
}
.empty-state {
    padding: 2rem 1rem;
    text-align: center;
    color: var(--vp-c-text-2);
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 180ms;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
@media (max-width: 639px) {
    .card {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
    .card-img {
        flex-basis: auto;
        width: 5rem;
    }
    .card-meta {
        font-size: 0.72rem;
    }
}
</style>
