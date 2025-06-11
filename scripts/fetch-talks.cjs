// 使用 CommonJS 语法替代 ES 模块语法
const axios = require('axios'); // 修改这里
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// 加载环境变量
dotenv.config();

// 配置参数
const INSTANCE = process.env.GTS_INSTANCE || 'scg.owu.one';
const USER_ID = process.env.USER_ID || '01S7TWZEND5J9SQ9XRCDCR3VCJ';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || '';
const OUTPUT_DIR = path.resolve(__dirname, '../docs/.vuepress/public');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'talks.json');

// 获取说说数据
async function fetchTalks() {
  let allToots = [];
  let lastId = null;
  const maxPages = 5; // 限制页数，避免过多请求
  const limit = 40; // 每页数量

  try {
    for (let i = 0; i < maxPages; i++) {
      let url = `https://${INSTANCE}/api/v1/accounts/${USER_ID}/statuses?limit=${limit}`;
      if (lastId) url += `&max_id=${lastId}`;
      
      const headers = {
        'Accept': 'application/json',
        'User-Agent': 'NodeJS/Fetcher'
      };
      
      if (ACCESS_TOKEN) {
        headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
      }
      
      const response = await axios.get(url, { headers }); // 使用 axios.get
      const data = response.data;
      
      if (!data || data.length === 0) break;
      
      // 过滤转帖和回复
      const filtered = data.filter(toot => !toot.reblog && !toot.in_reply_to_id);
      allToots = [...allToots, ...filtered];
      
      lastId = data[data.length - 1].id;
      console.log(`Fetched page ${i + 1}: ${filtered.length} items`);
    }
    
    return allToots;
  } catch (error) {
    console.error('Error fetching talks:', error.message);
    return [];
  }
}

// 主函数
(async () => {
  try {
    // 确保输出目录存在
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    // 获取并保存数据
    const talks = await fetchTalks();
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(talks, null, 2));
    console.log(`✅ Successfully saved ${talks.length} talks to ${OUTPUT_FILE}`);
    
  } catch (error) {
    console.error('❌ Failed to fetch talks:', error);
    process.exit(1);
  }
})();