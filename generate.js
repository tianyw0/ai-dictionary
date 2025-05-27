const fs = require("fs");
const http = require("http");
const path = require("path");

// 生成 HTML 文件
function generateHTML() {
  try {
    const template = fs.readFileSync("template.html", "utf8");
    const data = fs.readFileSync("data.json", "utf8");
    const terms = JSON.parse(data);
    const html = template.replace(
      "TERMS_PLACEHOLDER",
      JSON.stringify(terms, null, 4)
    );
    fs.writeFileSync("index.html", html);
    console.log("HTML 文件生成成功！");
  } catch (err) {
    console.error("生成 HTML 文件时出错：", err);
    process.exit(1);
  }
}

// 监听文件变化
function watchFiles() {
  const files = ["data.json", "template.html", "styles.css"];
  files.forEach((file) => {
    fs.watch(file, (eventType) => {
      if (eventType === "change") {
        console.log(`检测到 ${file} 变化，重新生成 HTML...`);
        generateHTML();
      }
    });
  });
}

// 启动本地预览服务器
function startServer(port = 3001) {
  const server = http.createServer((req, res) => {
    const filePath = req.url === "/" ? "index.html" : req.url.slice(1);
    const contentType =
      {
        ".html": "text/html",
        ".json": "application/json",
        ".js": "text/javascript",
        ".css": "text/css",
      }[path.extname(filePath)] || "text/plain";

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end("文件未找到");
        return;
      }

      res.writeHead(200, { "Content-Type": `${contentType}; charset=utf-8` });
      res.end(content);
    });
  });

  server.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
  });

  // 启动文件监听
  watchFiles();
}

// 生成初始 HTML 文件
generateHTML();

// 处理命令行参数
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case "build":
      generateHTML();
      break;
    default:
      startServer();
  }
}

module.exports = { generateHTML };
