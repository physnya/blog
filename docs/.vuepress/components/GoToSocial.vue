<template>
  <div class="talks-container">
    <article v-for="toot in pagedToots" :key="toot.id" class="post">
      <div class="post-header">
        <img :src="toot.account.avatar" alt="Avatar" class="avatar">
        <div class="post-meta">
          <h2 class="display-name">
            {{ toot.account.display_name }}
            <span class="username">@{{ toot.account.username }}</span>
          </h2>
          <time :datetime="toot.created_at">{{ formatDate(toot.created_at) }}</time>
        </div>
      </div>
      <div class="post-content" v-html="toot.content"></div>
      
      <div v-if="toot.media_attachments.length" class="media-attachments">
        <img 
          v-for="media in toot.media_attachments" 
          v-if="media.type === 'image'"
          :key="media.id" 
          :src="media.url" 
          alt="Media" 
          class="attachment"
        >
      </div>
      
      <div class="post-footer">
        <span class="interactions">
          <span>🔁 {{ toot.reblogs_count }}</span>
          <span>⭐ {{ toot.favourites_count }}</span>
        </span>
      </div>
    </article>
    
    <div v-if="totalPages > 1" class="pagination">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1"
        class="prev"
      >
        上一页
      </button>
      
      <span>第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
      
      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages"
        class="next"
      >
        下一页
      </button>
    </div>
    
    <div v-if="loading" class="loading">加载中...</div>
    <div v-if="error" class="error">加载失败: {{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toots: [],
      loading: true,
      error: null,
      currentPage: 1,
      itemsPerPage: 20
    }
  },
  computed: {
    // 过滤转帖和回复
    filteredToots() {
      return this.toots.filter(
        toot => !toot.reblog && !toot.in_reply_to_id
      );
    },
    // 分页计算
    pagedToots() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredToots.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredToots.length / this.itemsPerPage);
    }
  },
  mounted() {
    this.fetchTalks();
  },
  methods: {
    async fetchTalks() {
      try {
        const response = await fetch('/data/talks.json');
        if (!response.ok) throw new Error('网络响应异常');
        
        this.toots = await response.json();
        this.loading = false;
      } catch (err) {
        console.error('获取说说失败:', err);
        this.error = err.message;
        this.loading = false;
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    }
  }
}
</script>

<style scoped>
.talks-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.post {
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 15px;
}

.post-meta {
  flex: 1;
}

.display-name {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 0 0.25rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.username {
  color: #666;
  font-size: 0.9rem;
  font-weight: normal;
}

time {
  color: #888;
  font-size: 0.85rem;
}

.post-content {
  margin: 1rem 0;
  line-height: 1.6;
}

.media-attachments {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  margin-top: 1rem;
}

.attachment {
  width: 100%;
  border-radius: 4px;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.post-footer {
  margin-top: 1rem;
  color: #666;
  font-size: 0.9rem;
}

.interactions span {
  margin-right: 20px;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.prev, .next {
  padding: 0.5rem 1.5rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.prev:disabled, .next:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  font-size: 1.1rem;
}

.error {
  color: #e53935;
}

@media (max-width: 768px) {
  .talks-container {
    padding: 1rem;
  }
  
  .post {
    padding: 1rem;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
  }
  
  .display-name {
    font-size: 1rem;
  }
  
  .pagination {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>