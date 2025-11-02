# 🎮 游戏在线 - 开始使用

欢迎来到游戏在线项目！这是一个完整的指南，帮助你快速上手。

## 🚀 三步开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 打开浏览器
# 访问 http://localhost:3000
```

就这么简单！✨

## 📖 项目文档

根据你的需求，选择对应的文档：

### 🔰 新手入门
👉 **[SETUP.md](./SETUP.md)** - 详细的本地开发指南
- 安装步骤
- 项目结构说明
- 添加游戏教程
- 常见问题解答

### 🚀 部署上线
👉 **[DEPLOYMENT.md](./DEPLOYMENT.md)** - 部署到生产环境
- Vercel 一键部署
- Cloudflare Pages 部署
- 自定义域名配置
- SEO 优化检查清单

### 🤝 参与贡献
👉 **[CONTRIBUTING.md](./CONTRIBUTING.md)** - 贡献代码指南
- 如何提交 Issue
- Pull Request 流程
- 代码规范
- 添加游戏流程

### 📚 完整说明
👉 **[README.md](./README.md)** - 项目完整文档
- 技术栈介绍
- 功能特性
- API 说明
- 待办事项

## 🎯 快速任务

### 添加你的第一个游戏

1. 编辑 `src/data/games.ts`
2. 复制现有游戏对象
3. 修改为你的游戏信息
4. 保存，查看 `http://localhost:3000/games/your-game-slug`

### 修改网站信息

1. **网站标题**：编辑 `src/app/layout.tsx`
2. **Logo**：编辑 `src/components/Header.tsx`
3. **页脚**：编辑 `src/components/Footer.tsx`
4. **主题色**：编辑 `tailwind.config.ts`

### 部署到 Vercel

1. 推送代码到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 导入项目
4. 点击部署 - 完成！

## 📁 重要目录

```
gameonline/
├── src/app/              # 页面和路由
├── src/components/       # React 组件
├── src/data/            # 游戏数据（⭐ 在这里添加游戏）
├── src/types/           # TypeScript 类型
├── public/images/       # 图片资源（⭐ 放游戏缩略图）
└── 文档文件...
```

## 🛠️ 常用命令

```bash
# 开发
npm run dev              # 启动开发服务器
npm run build           # 构建生产版本
npm run start           # 预览生产版本

# 代码质量
npm run lint            # 检查代码风格
npm run type-check      # 检查 TypeScript 类型

# 部署
vercel                  # 部署到 Vercel
npm run pages:build     # 构建到 Cloudflare Pages
```

## 🎨 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel / Cloudflare Pages

## 📊 项目特色

✅ **完整的 SEO 优化** - sitemap、robots、结构化数据  
✅ **响应式设计** - 完美支持移动端  
✅ **TypeScript** - 类型安全  
✅ **性能优化** - 图片优化、懒加载  
✅ **易于扩展** - 模块化设计  

## 💡 下一步做什么？

### 基础任务
- [ ] 修改网站信息（标题、描述、Logo）
- [ ] 添加 2-3 个游戏
- [ ] 自定义主题色
- [ ] 部署到 Vercel

### 进阶任务
- [ ] 添加 Google Analytics
- [ ] 配置自定义域名
- [ ] 优化 SEO（提交 sitemap）
- [ ] 添加更多游戏分类

### 高级任务
- [ ] 集成评论系统
- [ ] 添加用户评分功能
- [ ] 实现搜索功能
- [ ] 添加游戏排行榜

## 🆘 需要帮助？

- 📖 查看详细文档（见上方链接）
- 💬 在 GitHub Issues 提问
- 📧 发邮件：contact@gameonline.com

## 🌟 特别提示

1. **游戏 URL**: 确保游戏允许 iframe 嵌入
2. **图片优化**: 缩略图保持在 200KB 以内
3. **测试**: 部署前在本地测试所有功能
4. **SEO**: 部署后记得提交 sitemap 到 Google

## 🎉 开始创建吧！

现在你已经了解了基础知识，开始创建你的游戏平台吧！

有任何问题随时查看文档或提问。

祝你开发愉快！🚀

---

**快速链接**:
- [本地开发指南](./SETUP.md)
- [部署指南](./DEPLOYMENT.md)
- [贡献指南](./CONTRIBUTING.md)
- [完整文档](./README.md)

