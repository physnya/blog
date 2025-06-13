#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

// 配置参数
const config = {
  contentDir: path.join(__dirname, '../docs'),
  outputFile: path.join(__dirname, '../docs/.vuepress/public/wordcount.json'),
  excludePatterns: ['**/node_modules/**', '**/.vuepress/**'],
  mathPatterns: [
    /\$.*?\$/g,         // 行内公式 $...$
    /\$\$.*?\$\$/gs,    // 块级公式 $$...$$
    /\\\(.*?\\\)/gs,    // \(...\)
    /\\\[.*?\\\]/gs,   // \[...\]
    /\\begin\{.*?\}.*?\\end\{.*?\}/gs // LaTeX 环境
  ]
};

// 自定义字数统计函数
function countWords(content) {
  let cleanContent = content;

  // 1. 移除数学公式
  // config.mathPatterns.forEach(pattern => {
  //   cleanContent = cleanContent.replace(pattern, '');
  // });
  
  // 2. 移除HTML标签
  cleanContent = cleanContent.replace(/<[^>]+>/g, ' ');
  
  // 3. 移除代码块
  // cleanContent = cleanContent.replace(/```[\s\S]*?```/g, '');
  // cleanContent = cleanContent.replace(/~~~[\s\S]*?~~~/g, '');
  
  // 4. 移除特殊标记
  cleanContent = cleanContent.replace(/:::.*?:::/gs, '');
  
  // 5. 统计中文字数和英文单词
  const chineseChars = cleanContent.match(/[\u4e00-\u9fa5]/g) || [];
  const englishWords = cleanContent.match(/\b[a-zA-Z]+\b/g) || [];
  
  return chineseChars.length + englishWords.length;
}

// 主统计函数（同步版本）
function calculateTotalWords() {
  const files = globSync(`${config.contentDir}/**/*.md`, {
    ignore: config.excludePatterns,
    nodir: true
  });
  
  let totalWords = 0;
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    totalWords += countWords(content);
  }
  
  return {
    totalWords,
    lastUpdated: new Date().toISOString()
  };
}

// 执行统计
try {
  const stats = calculateTotalWords();
  
  // 确保输出目录存在
  const outputDir = path.dirname(config.outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // 写入统计结果为JSON格式
  fs.writeFileSync(config.outputFile, JSON.stringify(stats, null, 2));
  
  console.log(`字数统计完成! 总字数: ${stats.totalWords.toLocaleString()}`);
  console.log(`结果已保存到: ${config.outputFile}`);
} catch (err) {
  console.error('字数统计失败:', err);
  process.exit(1);
}