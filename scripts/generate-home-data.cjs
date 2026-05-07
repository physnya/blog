const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const DOCS_DIR = path.join(ROOT, "docs");
const NOTES_CONFIG_DIR = path.join(DOCS_DIR, ".vuepress", "notes");
const PUBLIC_DIR = path.join(DOCS_DIR, ".vuepress", "public");
const OUTPUT_FILE = path.join(PUBLIC_DIR, "home-data.json");

const BANGUMI_CATEGORY_LABELS = {
	anime: "动画",
	book: "书籍",
	game: "游戏",
	music: "音乐",
};

const BANGUMI_STATUS_LABELS = {
	completed: "completed",
	ing: "ing",
	planTo: "planTo",
};

function readText(filePath) {
	return fs.readFileSync(filePath, "utf8");
}

function walkMarkdownFiles(dirPath) {
	if (!fs.existsSync(dirPath)) {
		return [];
	}

	const entries = fs.readdirSync(dirPath, { withFileTypes: true });
	const files = [];

	for (const entry of entries) {
		const fullPath = path.join(dirPath, entry.name);

		if (entry.isDirectory()) {
			files.push(...walkMarkdownFiles(fullPath));
			continue;
		}

		if (entry.isFile() && entry.name.endsWith(".md")) {
			files.push(fullPath);
		}
	}

	return files;
}

function normalizeDate(value) {
	if (!value) {
		return null;
	}

	const normalized = typeof value === "string" ? value.trim().replace(/\//g, "-") : value;
	const date = normalized instanceof Date ? normalized : new Date(normalized);

	if (Number.isNaN(date.getTime())) {
		return null;
	}

	return date.toISOString();
}

function getGitDate(filePath) {
	try {
		const relativePath = path.relative(ROOT, filePath);
		const output = execFileSync("git", ["log", "-1", "--format=%aI", "--", relativePath], {
			cwd: ROOT,
			encoding: "utf8",
			stdio: ["ignore", "pipe", "ignore"],
		}).trim();

		return output || null;
	} catch {
		return null;
	}
}

function resolveItemDate(filePath, frontmatter) {
	return (
		normalizeDate(frontmatter.createTime) ||
		normalizeDate(frontmatter.date) ||
		normalizeDate(frontmatter.lastUpdated) ||
		normalizeDate(getGitDate(filePath)) ||
		normalizeDate(fs.statSync(filePath).mtime)
	);
}

function stripMarkdown(content) {
	return content
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/~~~[\s\S]*?~~~/g, " ")
		.replace(/\$\$[\s\S]*?\$\$/g, " ")
		.replace(/\$[^$\n]+\$/g, " ")
		.replace(/!\[[^\]]*]\([^)]+\)/g, " ")
		.replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
		.replace(/<[^>]+>/g, " ")
		.replace(/^:::+.*$/gm, " ")
		.replace(/^\/[A-Za-z]+\/.*$/gm, " ")
		.replace(/^#{1,6}\s+/gm, "")
		.replace(/[*_~`>|-]/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

function truncate(text, maxLength = 88) {
	if (!text) {
		return "";
	}

	return text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text;
}

function extractTitle(content, filePath) {
	const heading = content.match(/^#\s+(.+)$/m);
	if (heading) {
		return heading[1].trim();
	}

	return path.basename(filePath, ".md");
}

function defaultPermalink(filePath) {
	const relativePath = path.relative(DOCS_DIR, filePath).replace(/\\/g, "/");
	const noExtension = relativePath.replace(/\.md$/, "");

	if (noExtension.endsWith("/README")) {
		return `/${noExtension.replace(/\/README$/, "/")}`;
	}

	return `/${noExtension}/`;
}

function getExcerpt(content) {
	return truncate(stripMarkdown(content));
}

function readNoteCollections() {
	const files = fs
		.readdirSync(NOTES_CONFIG_DIR)
		.filter((file) => file.endsWith(".ts") && file !== "index.ts");

	return files
		.map((file) => {
			const source = readText(path.join(NOTES_CONFIG_DIR, file));
			const dir = source.match(/dir:\s*["']([^"']+)["']/)?.[1];
			const title = source.match(/title:\s*["']([^"']+)["']/)?.[1];

			if (!dir || !title) {
				return null;
			}

			return {
				dir,
				title,
				path: `/${dir}/`,
			};
		})
		.filter(Boolean);
}

function collectLatestNote() {
	const collections = readNoteCollections();
	const noteItems = [];

	for (const collection of collections) {
		const dirPath = path.join(DOCS_DIR, collection.dir);
		const files = walkMarkdownFiles(dirPath).filter((filePath) => path.basename(filePath) !== "README.md");

		for (const filePath of files) {
			const raw = readText(filePath);
			const { data, content } = matter(raw);

			noteItems.push({
				path: data.permalink || defaultPermalink(filePath),
				title: data.title || extractTitle(content, filePath),
				excerpt: getExcerpt(content),
				isoDate: resolveItemDate(filePath, data),
				collectionTitle: collection.title,
				collectionPath: collection.path,
			});
		}
	}

	noteItems.sort((a, b) => Date.parse(b.isoDate) - Date.parse(a.isoDate));

	return {
		count: noteItems.length,
		latest: noteItems[0] || null,
	};
}

function collectLatestPost() {
	const files = walkMarkdownFiles(path.join(DOCS_DIR, "blog")).filter((filePath) => path.basename(filePath) !== "README.md");
	const posts = files.map((filePath) => {
		const raw = readText(filePath);
		const { data, content } = matter(raw);
		const sectionName = path.basename(path.dirname(filePath));

		return {
			path: data.permalink || defaultPermalink(filePath),
			title: data.title || extractTitle(content, filePath),
			excerpt: data.excerpt || getExcerpt(content),
			isoDate: resolveItemDate(filePath, data),
			section: sectionName,
			tags: Array.isArray(data.tags) ? data.tags.slice(0, 3) : [],
		};
	});

	posts.sort((a, b) => Date.parse(b.isoDate) - Date.parse(a.isoDate));

	return {
		count: posts.length,
		latest: posts[0] || null,
	};
}

function collectLatestTalk() {
	const talksFile = path.join(PUBLIC_DIR, "talks.json");
	if (!fs.existsSync(talksFile)) {
		return { count: 0, latest: null };
	}

	const talks = JSON.parse(readText(talksFile))
		.filter((item) => !item.reblog && !item.in_reply_to_id)
		.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));

	const latest = talks[0]
		? {
				path: talks[0].url || talks[0].uri || "/talks/",
				title: "最近一条动态",
				excerpt: truncate(stripMarkdown(talks[0].text || talks[0].content || ""), 200),
				isoDate: normalizeDate(talks[0].created_at),
				account: {
					displayName: talks[0].account?.display_name || talks[0].account?.username || "",
					username: talks[0].account?.username || "",
					instanceDomain: talks[0].account?.url ? new URL(talks[0].account.url).hostname : "",
					profile: talks[0].account?.url || "",
					avatar: talks[0].account?.avatar || talks[0].account?.avatar_static || "",
				},
				media: (talks[0].media_attachments || [])
					.filter((media) => media.type === "image")
					.slice(0, 4)
					.map((media) => ({
						id: media.id,
						url: media.url,
						previewUrl: media.preview_url || media.url,
						description: media.description || "图片",
					})),
				stats: {
					replies: talks[0].replies_count || 0,
					reblogs: talks[0].reblogs_count || 0,
					favourites: talks[0].favourites_count || 0,
				},
			}
		: null;

	return {
		count: talks.length,
		latest,
	};
}

function collectLatestBangumi() {
	const bangumiFile = path.join(PUBLIC_DIR, "bangumi.json");
	if (!fs.existsSync(bangumiFile)) {
		return { count: 0, latest: null };
	}

	const bangumi = JSON.parse(readText(bangumiFile));
	const items = [];
	const preferredItems = [];

	for (const [categoryKey, statuses] of Object.entries(bangumi)) {
		for (const [statusKey, list] of Object.entries(statuses)) {
			for (const item of list) {
				const normalizedItem = {
					title: item.subject.name_cn || item.subject.name,
					subtitle: item.subject.name_cn && item.subject.name_cn !== item.subject.name ? item.subject.name : "",
					excerpt: truncate(stripMarkdown(item.subject.short_summary || "暂无简介"), 96),
					isoDate: normalizeDate(item.updated_at),
					path: `https://bgm.tv/subject/${item.subject.id}`,
					image: item.subject.images?.common || item.subject.images?.large || item.subject.images?.medium || "",
					score: item.subject.score || null,
					category: BANGUMI_CATEGORY_LABELS[categoryKey] || categoryKey,
					status: BANGUMI_STATUS_LABELS[statusKey] || statusKey,
				};

				items.push(normalizedItem);

				if (categoryKey === "anime" && statusKey === "ing") {
					preferredItems.push(normalizedItem);
				}
			}
		}
	}

	items.sort((a, b) => Date.parse(b.isoDate) - Date.parse(a.isoDate));
	preferredItems.sort((a, b) => Date.parse(b.isoDate) - Date.parse(a.isoDate));

	return {
		count: items.length,
		latest: preferredItems[0] || items[0] || null,
	};
}

function main() {
	const notes = collectLatestNote();
	const posts = collectLatestPost();
	const talks = collectLatestTalk();
	const bangumi = collectLatestBangumi();

	const payload = {
		generatedAt: new Date().toISOString(),
		counts: {
			notes: notes.count,
			posts: posts.count,
			talks: talks.count,
			bangumi: bangumi.count,
		},
		latest: {
			note: notes.latest,
			post: posts.latest,
			talk: talks.latest,
			bangumi: bangumi.latest,
		},
	};

	fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(payload, null, 2)}\n`);
	console.log(`Successfully saved homepage data to ${OUTPUT_FILE}`);
}

main();
