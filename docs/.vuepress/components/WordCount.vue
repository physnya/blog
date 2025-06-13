<template>
	<div class="word-count">
		<span v-if="loading">📝 统计中...</span>
		<span v-else-if="error">❌ 统计失败</span>
		<span v-else>
			📝 全站字数: <strong>{{ totalWords.toLocaleString() }}</strong> 字
			<span v-if="lastUpdated"> | 最后更新: {{ formattedDate }}</span>
		</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loading: true,
				error: false,
				totalWords: 0,
				lastUpdated: null,
			};
		},
		computed: {
			formattedDate() {
				if (!this.lastUpdated) return "";
				const date = new Date(this.lastUpdated);
				return date.toLocaleDateString("zh-CN", {
					year: "numeric",
					month: "2-digit",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
				});
			},
		},
		async mounted() {
			try {
				const response = await fetch("/wordcount.json");
				if (!response.ok) throw new Error("Network response was not ok");

				const data = await response.json();
				this.totalWords = data.totalWords;
				this.lastUpdated = data.lastUpdated;
				this.loading = false;
			} catch (error) {
				console.error("获取字数统计失败:", error);
				this.error = true;
				this.loading = false;
			}
		},
	};
</script>

<style scoped>
	.word-count {
		margin-top: 1rem;
		font-size: 1rem;
		color: var(--vp-c-text-1);
	}

	.word-count strong {
		font-weight: 600;
	}
</style>
