<template>
  <div class="word-count-display" :class="{ loading, error }">
    <span v-if="loading" class="word-count-loading">📊 统计加载中...</span>
    <span v-else-if="error" class="word-count-error">❌ 统计加载失败</span>
    <span v-else class="word-count-value">
      <span class="word-count-icon">📝 </span>
      <span class="word-count-text">{{ displayText }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'WordCount',
  props: {
    type: {
      type: String,
      required: true,
      default: 'total'
    }
  },
  data() {
    return {
      loading: true,
      error: false,
      wordCountData: null
    };
  },
  computed: {
    displayText() {
      if (!this.wordCountData) return '';

      try {
        // 处理多个键值的情况
        if (this.type.includes(',')) {
          const keys = this.type.split(',').map(key => key.trim());
          let total = 0;
          
          for (const key of keys) {
            total += this.getValueByPath(key);
          }
          
          return `${total.toLocaleString()}`;
        }
        
        // 处理路径格式的情况
        if (this.type.includes('/')) {
          const value = this.getValueByPath(this.type);
          return `${value.toLocaleString()}`;
        }
        
        // 处理特殊键值
        if (this.type === 'total') {
          return `${this.wordCountData.total.toLocaleString()}`;
        }
        
        // 处理单个键值
        const value = this.getValueByPath(this.type);
        return `${value.toLocaleString()}`;
      } catch (error) {
        console.error('计算字数时出错:', error);
        return '统计计算错误';
      }
    }
  },
  async mounted() {
    try {
      const response = await fetch('/wordcount.json');
      if (!response.ok) throw new Error('Network response was not ok');
      
      this.wordCountData = await response.json();
      this.loading = false;
    } catch (error) {
      console.error('获取字数统计数据失败:', error);
      this.error = true;
      this.loading = false;
    }
  },
  methods: {
    // 根据路径获取值，支持嵌套结构
    getValueByPath(path) {
      const keys = path.split('/').filter(key => key !== '');
      let current = this.wordCountData;
      
      for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
          current = current[key];
        } else {
          throw new Error(`路径 ${path} 不存在于统计数据中`);
        }
      }
      
      if (typeof current === 'number') {
        return current;
      } else if (typeof current === 'object') {
        // 如果是对象，递归计算所有数字值的总和
        return this.calculateNestedTotal(current);
      } else {
        throw new Error(`路径 ${path} 的值不是数字或对象`);
      }
    },
    
    // 计算嵌套对象中所有数字值的总和
    calculateNestedTotal(data) {
      let total = 0;
      
      for (const key in data) {
        if (typeof data[key] === 'number') {
          total += data[key];
        } else if (typeof data[key] === 'object') {
          total += this.calculateNestedTotal(data[key]);
        }
      }
      
      return total;
    }
  }
};
</script>

<style scoped>
.word-count-display {
  display: inline-block;
  font-size: 1rem;
  background-color: transparent;
}

.word-count-icon {
  font-size: 1em;
}

.word-count-text {
  color: var(--vp-c-text-1);
  font-weight: 500;
}
</style>