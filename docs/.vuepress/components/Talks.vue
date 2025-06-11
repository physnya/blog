<template>
  <div class="talks-container">
    <h1 class="page-title">我的说说</h1>
    
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>加载说说中...</p>
    </div>
    
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="fetchTalks" class="retry-btn">重试</button>
    </div>
    
    <div v-else>
      <div v-if="filteredToots.length === 0" class="empty">
        <p>还没有说说，去 <a :href="mastodonProfile" target="_blank">Mastodon</a> 发布一条吧</p>
      </div>
      
      <div v-else>
        <div v-for="toot in pagedToots" :key="toot.id" class="toot-card">
          <div class="toot-header">
            <img :src="toot.account.avatar" alt="头像" class="avatar">
            <div class="account-info">
              <span class="display-name">{{ toot.account.display_name }}</span>
              <span class="username">@{{ toot.account.username }}@{{ instanceDomain }}</span>
            </div>
            <div class="toot-date">
              {{ formatDate(toot.created_at) }}
            </div>
          </div>
          
          <div class="toot-content" v-html="toot.content"></div>
          
          <div v-if="toot.media_attachments.length" class="media-grid">
            <div v-for="media in toot.media_attachments" :key="media.id" class="media-item">
              <img v-if="media.type === 'image'" 
                   :src="media.url" 
                   :alt="media.description || '图片'" 
                   class="media-image"
                   @click="openLightbox(media.url)">
            </div>
          </div>
          
          <div class="toot-stats">
            <span class="stat-item">
              <i class="icon-reply"></i> {{ toot.replies_count }}
            </span>
            <span class="stat-item">
              <i class="icon-reblog"></i> {{ toot.reblogs_count }}
            </span>
            <span class="stat-item">
              <i class="icon-favorite"></i> {{ toot.favourites_count }}
            </span>
          </div>
        </div>
        
        <div v-if="totalPages > 1" class="pagination">
          <button 
            @click="currentPage = Math.max(1, currentPage - 1)"
            :disabled="currentPage === 1"
            class="pagination-button prev"
          >
            上一页
          </button>
          
          <span class="page-info">第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
          
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
    <div v-if="lightboxVisible" class="lightbox" @click.self="closeLightbox">
      <div class="lightbox-content">
        <img :src="currentImage" alt="大图预览">
        <button class="close-btn" @click="closeLightbox">×</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Talks',
  data() {
    return {
      loading: true,
      error: null,
      toots: [],
      currentPage: 1,
      itemsPerPage: 10,
      instanceDomain: 'scg.owu.one',
      mastodonProfile: 'https://scg.owu.one/@physnya',
      lightboxVisible: false,
      currentImage: ''
    };
  },
  computed: {
    // 过滤转帖和回复
    filteredToots() {
      return this.toots.filter(
        toot => !toot.reblog && !toot.in_reply_to_id
      );
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
    }
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
        const response = await fetch('/talks.json');
        
        if (!response.ok) {
          throw new Error(`数据加载失败: ${response.status}`);
        }
        
        this.toots = await response.json();
        this.loading = false;
        
        console.log(`成功加载 ${this.toots.length} 条说说`);
      } catch (error) {
        this.error = error.message;
        this.loading = false;
        console.error('加载说说失败:', error);
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    openLightbox(imageUrl) {
      this.currentImage = imageUrl;
      this.lightboxVisible = true;
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.lightboxVisible = false;
      document.body.style.overflow = '';
    }
  }
};
</script>

<style scoped>
.talks-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-size: 2.5rem;
  font-weight: 600;
}

.toot-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 1.8rem;
  margin-bottom: 2.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #eee;
}

.toot-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
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
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.account-info {
  flex: 1;
}

.display-name {
  font-weight: 700;
  font-size: 1.3rem;
  display: block;
  color: #1a202c;
  margin-bottom: 0.2rem;
}

.username {
  color: #718096;
  font-size: 0.95rem;
}

.toot-date {
  position: absolute;
  top: 0;
  right: 0;
  color: #a0aec0;
  font-size: 0.9rem;
}

.toot-content {
  line-height: 1.7;
  color: #2d3748;
  font-size: 1.15rem;
  margin-bottom: 1.8rem;
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
  background: #3182ce;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.3s;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.pagination-button:hover:not(:disabled) {
  background: #2b6cb0;
  transform: translateY(-2px);
}

.pagination-button:disabled {
  background: #cbd5e0;
  cursor: not-allowed;
  opacity: 0.7;
  transform: none;
}

.page-info {
  color: #4a5568;
  font-size: 1rem;
  font-weight: 500;
}

/* 加载状态 */
.loading {
  text-align: center;
  padding: 3rem;
  color: #4a5568;
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
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
</style>