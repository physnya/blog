<template>
	<div id="app">
		<div class="container">
			<details class="hint-container details">
				<summary>
					类型 / 状态
				</summary>
				<div class="filter-section">
					<div class="filter-group">
						<h2><i class="fas fa-filter"></i>类型</h2>
						<div class="btn-group">
							<button
								v-for="(category, key) in categories"
								:key="key"
								class="btn"
								:class="{ active: currentCategory === key }"
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
								@click="changeStatus('planTo')"
							>
								planTo
							</button>
							<button
								class="btn status-btn ing"
								:class="{ active: currentStatus === 'ing' }"
								@click="changeStatus('ing')"
							>
								ing
							</button>
							<button
								class="btn status-btn completed"
								:class="{ active: currentStatus === 'completed' }"
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
									:src="item.subject.images.common"
									:alt="item.subject.name"
								/>
							</div>
							<div class="card-content">
								<h3 class="card-title">
									<a
										:href="'https://bgm.tv/subject/'+item.subject.id"
										target="_blank"
									>{{ item.subject.name }}</a>
								</h3>
								<div class="card-meta">
									<div 
										class="card-time"
									>
										标记时间<br/>
										{{ formatDate(item.updated_at) }}
									</div>
									<div class="line"></div>
									<div 
										class="card-score"
									>
										Bangumi 评分<br/>
										{{ item.subject.score || "N/A" }}
									</div>
									<div class="line"></div>
									<div
										class="card-status"
										:class="getStatusClass(item.type)"
									>
										状态<br/>
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
				currentCategory: "book",
				currentStatus: "planTo",
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
	a {
		text-decoration: none;
		color: var(--vp-c-text-1);
		font-size: 24px;
		font-weight: 550;
	}

	a::after {
		display: none !important;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.subtitle {
		font-size: 1.2rem;
		margin-bottom: 20px;
		color: var(--vp-c-text-1);
	}

	.filter-section {
		background: var(--vp-c-default-soft);
		border-radius: 12px;
		padding: 1.2rem;
		margin-bottom: 1.5rem;
	}

	.filter-group {
		margin-bottom: 20px;
	}

	.filter-group h2 {
		font-size: 1.4rem;
		margin-bottom: 15px;
		color: var(--vp-c-text-1);
		display: flex;
		align-items: center;
	}

	.filter-group h2 i {
		margin-right: 10px;
	}

	.btn-group {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.8rem;
		margin-top: 1rem;
		padding: 1rem 0;
		overflow: auto;
	}

	.btn {
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

	.btn:hover {
		background: var(--vp-c-bg-alt);
		transform: translateY(-2px);
	}

	.btn.active {
		background: var(--vp-c-bg);
		color: var(--vp-c-text-1);
		box-shadow: 0 2px 3px rgba(50, 50, 93, 0.5), 0 0.5px 1.5px rgba(0, 0, 0, 0.08);
		border: 1px solid rgb(from var(--vp-c-bg) calc(1 - r) calc(1 - g) calc(1 - b));
	}

	.status-btn {
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

	.card-flex {
		display: flex;
		gap: 25px;
		margin-bottom: 10px;
		flex-direction: column;
		flex: auto;
	}

	.card {
		background: var(--vp-c-bg);
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		height: 100%;
		display: flex;
		flex-direction: row;
		border: 1px solid rgb(from var(--vp-c-bg) calc(1 - r) calc(1 - g) calc(1 - b));
	}

	.card:hover {
		transition: transform 0.3s, box-shadow 0.3s;
		transform: translateY(-5px);
		border: 1px solid rgb(from var(--vp-c-bg) calc(1 - r) calc(1 - g) calc(1 - b));
		box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	}

	.card-img {
		padding: 50px 10px 50px 10px;
        width: 10rem;
	}

	.card-img img {
		height: 200px;
		width: 200px;
        object-fit: contain;
	}

	.card-content {
		padding: 20px;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		width: 5rem;
	}

	.card-title {
		font-size: 1.3rem;
		margin-bottom: 10px;
		color: var(--vp-c-text-1);
		font-weight: 600;
	}

	.card-meta {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0px;
		font-size: 0.85rem;
		opacity: 0.85;
		width: 75%;
		overflow: auto;
	}

	.card-time {
		display: inline-block;
		padding: 0px 12px;
		font-size: 0.8rem;
		font-weight: 500;
		margin-top: 10px;
		text-align: center;
	}

	.card-score {
		display: inline-block;
		padding: 0px 12px;
		font-size: 0.8rem;
		font-weight: 500;
		margin-top: 10px;
		text-align: center;
	}

	.card-status {
		display: inline-block;
		padding: 0px 12px;
		font-size: 0.8rem;
		font-weight: 500;
		margin-top: 10px;
		text-align: center;
	}

	.line {
		width: 0px;
		border-right: 1.5px solid var(--vp-c-divider);
	}

	.card-summary {
		font-size: 0.9rem;
		margin-bottom: 15px;
		flex-grow: 1;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
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

	.empty-state {
		text-align: center;
		padding: 50px 20px;
		color: var(--vp-c-text-1);
	}

	.empty-state i {
		font-size: 4rem;
		margin-bottom: 20px;
		opacity: 0.3;
	}

	.empty-state h3 {
		font-size: 1.5rem;
		margin-bottom: 10px;
	}

	footer {
		text-align: center;
		padding: 30px 0;
		margin-top: 40px;
		opacity: 0.7;
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		.card-flex {
			grid-template-columns: 1fr;
		}

		.btn-group {
			justify-content: center;
		}

		h1 {
			font-size: 2.2rem;
		}
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
