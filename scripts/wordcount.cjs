#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');
const matter = require('gray-matter');

// 配置参数
const config = {
  contentDir: path.join(__dirname, '../docs'),
  outputFile: path.join(__dirname, '../docs/.vuepress/public/wordcount.json'),
  excludePatterns: ['**/node_modules/**', '**/.vuepress/**'],
  mathPatterns: [
    /\$.*?\$/g,         // 行内公式 $...$
    /\$\$.*?\$\$/gs,    // 块级公式 $$...$$
    /\\\(.*?\\\)/gs,    // \(...\)
    /\\\[.*?\\\]/gs,    // \[...\]
    /\\begin\{.*?\}.*?\\end\{.*?\}/gs // LaTeX 环境
  ]
};

// 自定义字数统计函数
function countWords(content) {
  let cleanContent = content;

  // 1. 移除数学公式
  /* config.mathPatterns.forEach(pattern => {
    cleanContent = cleanContent.replace(pattern, '');
  }); */
  
  // 2. 移除HTML标签
  cleanContent = cleanContent.replace(/<[^>]+>/g, ' ');
  
  // 3. 移除代码块
  /* cleanContent = cleanContent.replace(/```[\s\S]*?```/g, '');
  cleanContent = cleanContent.replace(/~~~[\s\S]*?~~~/g, ''); */
  
  // 4. 移除特殊标记
  cleanContent = cleanContent.replace(/:::.*?:::/gs, '');
  
  // 5. 统计中文字数和英文单词
  const chineseChars = cleanContent.match(/\p{sc=Han}/gu) || [];
  const englishWords = cleanContent.match(/[a-zA-Z]+(?:[''-][a-zA-Z]+)*/g) || [];
  
  return chineseChars.length + englishWords.length;
}

// 从 front matter 中提取 permalink
function extractPermalink(filePath, content) {
  try {
    const { data } = matter(content);
    
    // 如果有自定义的 permalink，直接使用
    if (data.permalink) {
      let permalink = data.permalink;
      
      // 如果是 README 文件，确保 permalink 以 /index/ 结尾
      if (path.basename(filePath).toLowerCase() === 'readme.md') {
        // 确保 permalink 以斜杠结尾
        if (!permalink.endsWith('/')) {
          permalink += '/';
        }
        // 添加 index/ 到 permalink
        permalink += 'index/';
      }
      
      return permalink;
    }
    
    // 如果没有 permalink，使用文件路径生成（仅适用于非 README 文件）
    const relativePath = path.relative(config.contentDir, filePath);
    const pathWithoutExt = relativePath.replace(/\.md$/, '');
    return `/${pathWithoutExt}/`;
  } catch (error) {
    console.warn(`无法解析文件 ${filePath} 的 front matter:`, error);
    
    // 如果解析失败，尝试根据文件路径生成 permalink
    const relativePath = path.relative(config.contentDir, filePath);
    const pathWithoutExt = relativePath.replace(/\.md$/, '');
    return `/${pathWithoutExt}/`;
  }
}

// 根据 permalink 构建嵌套数据结构
function buildNestedStructure(filesData) {
  const result = {};
  
  for (const { permalink, wordCount } of filesData) {
    if (!permalink) continue;
    
    // 清理 permalink：移除首尾斜杠
    let cleanPermalink = permalink.replace(/^\/|\/$/g, '');
    
    // 处理根目录的 index (permalink 为 "index")
    if (cleanPermalink === 'index') {
      result.index = wordCount;
      continue;
    }
    
    // 分割路径部分
    const pathParts = cleanPermalink.split('/');
    
    let currentLevel = result;
    
    // 遍历路径的每一部分
    for (let i = 0; i < pathParts.length; i++) {
      const part = pathParts[i];
      
      // 跳过空的部分
      if (!part) continue;
      
      // 如果是最后一部分，存储字数
      if (i === pathParts.length - 1) {
        currentLevel[part] = wordCount;
      } else {
        // 如果不是最后一部分，创建嵌套对象
        if (!currentLevel[part]) {
          currentLevel[part] = {};
        }
        currentLevel = currentLevel[part];
      }
    }
  }
  
  return result;
}

// 主统计函数
function calculateWordsByPermalink() {
  const files = globSync(`${config.contentDir}/**/*.md`, {
    ignore: config.excludePatterns,
    nodir: true
  });
  
  const filesData = [];
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf-8');
      const wordCount = countWords(content);
      const permalink = extractPermalink(file, content);
      
      filesData.push({
        filePath: file,
        permalink: permalink,
        wordCount: wordCount
      });
    } catch (error) {
      console.error(`处理文件 ${file} 时出错:`, error);
    }
  }
  
  const nestedData = buildNestedStructure(filesData);
  
  // 添加总字数统计
  let totalWords = 0;
  
  // 计算总字数
  const calculateTotal = (data) => {
    let total = 0;
    for (const key in data) {
      if (typeof data[key] === 'object') {
        total += calculateTotal(data[key]);
      } else {
        total += data[key];
      }
    }
    return total;
  };
  
  totalWords = calculateTotal(nestedData);
  
  return {
    ...nestedData,
    total: totalWords,
    lastUpdated: new Date().toISOString(),
    fileCount: filesData.length
  };
}

// 执行统计
try {
  const stats = calculateWordsByPermalink();
  
  // 确保输出目录存在
  const outputDir = path.dirname(config.outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // 写入统计结果为 JSON 格式
  fs.writeFileSync(config.outputFile, JSON.stringify(stats, null, 2));
  
  console.log('\n字数统计完成!');
  console.log(`总字数: ${stats.total.toLocaleString()} 字`);
  console.log(`文件数量: ${stats.fileCount} 个`);
  console.log(`结果已保存到: ${config.outputFile}`);
} catch (err) {
  console.error('字数统计失败:', err);
  process.exit(1);
}