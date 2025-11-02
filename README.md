# 🎮 游戏在线 - 免费在线游戏平台

基于 Next.js 14+ 构建的现代化游戏平台，提供各种免费在线游戏。

## ✨ 特性

- 🚀 **Next.js 14 App Router** - 使用最新的 Next.js 特性
- 💅 **Tailwind CSS** - 现代化的 UI 设计
- 🔍 **SEO 优化** - 完整的 SEO 配置，包括 sitemap、robots、结构化数据
- 📱 **响应式设计** - 完美支持桌面和移动设备
- ⚡ **性能优化** - 图片优化、懒加载、预加载等
- 🎨 **游戏分类** - 支持多种游戏分类
- 🔗 **动态路由** - 游戏详情页、分类页等
- 📊 **结构化数据** - Schema.org 标记，提升搜索引擎展示

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 2. 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 3. 构建生产版本

```bash
npm run build
npm run start
```

## 📁 项目结构

```
gameonline/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── games/
│   │   │   ├── [slug]/        # 游戏详情页
│   │   │   └── page.tsx       # 游戏列表页
│   │   ├── category/
│   │   │   └── [category]/    # 分类页
│   │   ├── about/             # 关于我们
│   │   ├── layout.tsx         # 根布局
│   │   ├── page.tsx           # 首页
│   │   ├── robots.ts          # robots.txt
│   │   ├── sitemap.ts         # sitemap.xml
│   │   └── globals.css        # 全局样式
│   ├── components/            # React 组件
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── GameCard.tsx
│   │   └── GameEmbed.tsx
│   ├── data/                  # 数据文件
│   │   ├── games.ts           # 游戏数据
│   │   └── categories.ts      # 分类数据
│   └── types/                 # TypeScript 类型定义
│       └── game.ts
├── public/                    # 静态资源
├── package.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 🎮 添加新游戏

在 `src/data/games.ts` 中添加游戏数据：

```typescript
{
  id: '2',
  slug: 'your-game-slug',
  title: '游戏名称',
  description: '游戏简介',
  longDescription: '详细描述',
  category: 'action',
  tags: ['标签1', '标签2'],
  thumbnailUrl: '/images/games/your-game.jpg',
  gameUrl: 'https://your-game-url.com',
  featured: true,
  playCount: 1000,
  rating: 4.5,
  controls: ['控制说明1', '控制说明2'],
  tips: [
    {
      title: '技巧标题',
      description: '技巧描述',
      color: 'blue'
    }
  ],
  faqs: [
    {
      question: '问题？',
      answer: '答案。'
    }
  ],
  metaKeywords: ['关键词1', '关键词2'],
  publishedAt: '2025-01-15',
  updatedAt: '2025-11-02'
}
```

## 🎯 SEO 优化清单

- [x] 完整的 meta 标签
- [x] Open Graph 和 Twitter Cards
- [x] 结构化数据（Schema.org）
- [x] Sitemap 自动生成
- [x] Robots.txt 配置
- [x] 规范链接（Canonical URL）
- [x] 响应式图片优化
- [x] 语义化 HTML
- [x] 移动端友好
- [x] 性能优化（Core Web Vitals）

## 📊 性能优化

- 使用 Next.js Image 组件自动优化图片
- 预连接到外部资源域名
- 懒加载 iframe 游戏
- CSS 和 JS 自动压缩
- 静态页面生成（SSG）
- 动态导入减少首屏加载

## 🚀 部署

### Vercel（推荐）

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 自动部署完成

### Cloudflare Pages

1. 构建命令：`npm run build`
2. 输出目录：`.next`
3. 需要添加 `@cloudflare/next-on-pages` 支持

### 其他平台

支持任何 Node.js 托管平台（Netlify、Railway、Render 等）

## 🛠️ 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel / Cloudflare Pages
- **图片优化**: Sharp
- **SEO**: Next.js Metadata API

## 📝 待办事项

- [ ] 添加用户评分系统
- [ ] 实现搜索功能
- [ ] 添加游戏收藏功能
- [ ] 集成评论系统
- [ ] 添加游戏排行榜
- [ ] 多语言支持
- [ ] 深色模式
- [ ] 管理后台

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

- 网站: https://gameonline.com
- 邮箱: contact@gameonline.com
