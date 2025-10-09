const { execSync } = require("child_process");

console.log("Running pre-commit hook...");

try {
	// 获取最新动态数据
	console.log("Fetching latest talks data...");
	execSync("node scripts/fetch-talks.cjs", { stdio: "inherit" });

	// 添加更新后的数据文件
	execSync("git add docs/.vuepress/public/talks.json", { stdio: "inherit" });

	// 获取最新 bangumi 数据
	console.log("Fetching latest bangumi data...");
	execSync("node scripts/fetch-bangumi.cjs", { stdio: "inherit" });

	// 添加更新后的数据文件
	execSync("git add docs/.vuepress/public/bangumi.json", { stdio: "inherit" });

	// 字数统计
	console.log("字数统计进行中...");
	execSync("node scripts/wordcount.cjs", { stdio: "inherit" });

	console.log("✅ Pre-commit hook completed successfully");
} catch (error) {
	console.error("❌ Pre-commit hook failed:", error.message);
	process.exit(1);
}
