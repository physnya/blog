<template>
  <div class="color-picker">
    <button class="toggle-button" @click="togglePanel">主题颜色</button>
    
    <div v-if="showPanel" class="control-panel">
      <div class="slider-container">
        <input 
          type="range" 
          min="0" 
          max="360" 
          v-model="hue" 
          @input="updateTheme"
          class="slider"
        >
      </div>
      
      <div class="color-preview" :style="{ backgroundColor: `hsl(${hue}, 50%, 50%)` }"></div>

      <div class="actions">
        <button class="reset-button" @click="resetTheme">
          <span class="icon">↺</span> 重置默认
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPanel: false,
      hue: 200, // 默认蓝色
      defaulthue: 200,
    }
  },
  mounted() {
    // 从本地存储加载保存的颜色
    const savedHue = localStorage.getItem('themeHue')
    if (savedHue) {
      this.hue = parseInt(savedHue)
      this.updateTheme()
    }
  },
  methods: {
    togglePanel() {
      this.showPanel = !this.showPanel
    },
    updateTheme() {
      // 更新 CSS 变量
      document.documentElement.style.setProperty('--theme-hue', `${this.hue}deg`)
      
      // 保存到本地存储
      localStorage.setItem('themeHue', this.hue)
    },
    resetTheme() {
      // 重置为默认值
      this.hue = this.defaulthue
      
      // 更新主题
      this.updateTheme()
    },
  }
}
</script>

<style scoped>
  .toggle-button {
    padding: 8px 16px;
  }

  .control-panel {
    margin-top: 10px;
    padding: 15px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    width: 250px;
    position: fixed;
    bottom: 10%;
    right: 10%;
    background-color: var(--vp-code-block-bg);
    display: flex;
    flex-direction: column;
  }

  .slider-container {
    margin-bottom: 15px;
    color: var(--vp-c-text-1);
  }

  .slider {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red);
    outline: none;
    appearance: none;
    -webkit-appearance: none;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    border: 2px solid #555;
    cursor: pointer;
  }

  .color-preview {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    margin: 0 auto;
    border: 1px solid #eee;
  }
</style>