# AI 术语词典

这是一个简单的 AI 术语词典网站，收集了常用的 AI 相关术语和解释。网站采用响应式设计，支持在各种设备上良好显示。

## 特点

- 清晰的卡片式布局
- 响应式设计，支持移动端
- 简洁的用户界面
- 自动部署到 GitHub Pages
- 支持本地实时预览
- 仅需维护 JSON 文件

## 开发说明

### 环境准备

```bash
# 安装依赖
npm install
```

### 本地开发

```bash
# 启动开发服务器（支持实时预览）
npm run dev

# 或者仅构建 HTML
npm run build

# 启动预览服务器
npm start
```

开发服务器启动后，访问 http://localhost:3000 即可预览。当修改 `data.json` 文件时，网页会自动更新。

### 添加新术语

直接编辑 `data.json` 文件，添加新的术语和解释即可。文件格式如下：

```json
{
  "术语名称": "术语解释"
}
```

## 部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。当发布新的 tag（格式如 `v1.0.0`）时，会自动触发部署流程。

```bash
# 发布新版本
git tag v1.0.0
git push origin v1.0.0
```

## 贡献

欢迎提交 Pull Request 来补充更多的 AI 术语！

## 许可证

MIT License
