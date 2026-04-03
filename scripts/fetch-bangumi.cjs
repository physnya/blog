"use strict";

const axios = require("axios");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

// 简单 logger
const logger = {
	info: console.log,
	error: console.error,
};

// 加载环境变量
dotenv.config();

// 配置参数
const BASE_URL = "https://api.bgm.tv";
const SUBJECT_TYPE = [1, 2, 3, 4];
const SUBJECT_TYPE_KEY = ["", "book", "anime", "music", "game"];
const COLLECTION_TYPE = [1, 2, 3];
const COLLECTION_TYPE_KEY = ["", "planTo", "completed", "ing"];
const LIMIT = 100;
const USER_AGENT = "physnya/blog (https://github.com/physnya/blog)";
const BANGUMI_USER_NAME = process.env.BANGUMI_USER_NAME;
const USE_SYSTEM_PROXY = ["1", "true", "yes", "on"].includes(
	(process.env.USE_SYSTEM_PROXY || "").toLowerCase()
);
const OUTPUT_DIR = path.resolve(__dirname, "../docs/.vuepress/public");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "bangumi.json");

// 获取条目数据
async function fetchBangumis(s_type) {
    let planTo = [];
    let completed = [];
    let ing = [];

    for (const type of COLLECTION_TYPE) {
        logger.info(`   Fetching: ${COLLECTION_TYPE_KEY[type]}`);

        let totalPage = 0;
        let currentPage = 0;
        do {
            try {
				const requestConfig = {
					headers: {
						"User-Agent": USER_AGENT,
						"Content-Type": "application/json",
					},
					timeout: 15_000,
				};

				// 默认不读取 Shell 的 HTTP(S)_PROXY，避免本地代理没启动导致失败
				if (!USE_SYSTEM_PROXY) {
					requestConfig.proxy = false;
				}

				const res = await axios.get(
					`${BASE_URL}/v0/users/${BANGUMI_USER_NAME}/collections?subject_type=${s_type}&type=${type}&limit=${LIMIT}&offset=${
						currentPage * LIMIT
					}`,
					requestConfig
				);

                if (totalPage === 0) totalPage = Math.ceil(res.data.total / LIMIT);

                switch (type) {
                    case 1:
                        planTo = planTo.concat(res.data.data);
                        break;
                    case 2:
                        completed = completed.concat(res.data.data);
                        break;
                    case 3:
                        ing = ing.concat(res.data.data);
                        break;
                }

                currentPage++;
            } catch (err) {
                logger.error("Error fetching data from bgm.tv");
                logger.error(err.message);
                if (err.code) {
					logger.error(`Error code: ${err.code}`);
				}
				if (!USE_SYSTEM_PROXY) {
					logger.error("Hint: set USE_SYSTEM_PROXY=1 if your network requires proxy.");
				}
                break;
            }
        } while (currentPage < totalPage);
    }
    return { planTo, completed, ing };
}

// 获取不同种类条目
async function fetchBangumisInSubject() {
    let book = [];
    let anime = [];
    let music = [];
    let game = [];

    for (const s_type of SUBJECT_TYPE) {
        logger.info(`Fetching: ${SUBJECT_TYPE_KEY[s_type]}`);

        switch (s_type) {
            case 1:
                book = await fetchBangumis(s_type);
                break;
            case 2:
                anime = await fetchBangumis(s_type);
                break;
            case 3:
                music = await fetchBangumis(s_type);
                break;
            case 4:
                game = await fetchBangumis(s_type);
                break;
        }
    }
    return { book, anime, music, game };
}

// 主函数
(async () => {
	try {
		// 确保输出目录存在
		if (!fs.existsSync(OUTPUT_DIR)) {
			fs.mkdirSync(OUTPUT_DIR, { recursive: true });
		}

		// 获取并保存数据
		const items = await fetchBangumisInSubject();
		fs.writeFileSync(OUTPUT_FILE, JSON.stringify(items, null, 2));
		console.log(`Successfully saved bangumis to ${OUTPUT_FILE}`);
	} catch (error) {
		console.error("Failed to fetch bangumis:", error);
		process.exit(1);
	}
})();
