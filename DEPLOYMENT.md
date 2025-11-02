# 部署指南

## 🚀 快速部署到 Vercel（推荐）

### 方式一：通过 Vercel 仪表板

1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "Import Project"
4. 选择你的 GitHub 仓库
5. Vercel 会自动检测 Next.js 项目
6. 点击 "Deploy"

就这么简单！

### 方式二：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 部署到生产环境
vercel --prod
```

### 环境变量配置

在 Vercel 项目设置中添加环境变量：

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## 🌐 部署到 Cloudflare Pages

### 准备工作

Cloudflare Pages 默认不支持 Next.js 的所有特性，需要使用 `@cloudflare/next-on-pages`。

1. 安装依赖：

```bash
npm install -D @cloudflare/next-on-pages
```

2. 修改 `package.json`：

```json
{
  "scripts": {
    "pages:build": "npx @cloudflare/next-on-pages",
    "pages:dev": "npx @cloudflare/next-on-pages --watch",
    "pages:deploy": "npm run pages:build && wrangler pages deploy .vercel/output/static"
  }
}
```

### 部署步骤

1. 推送代码到 GitHub
2. 在 Cloudflare Pages 创建新项目
3. 连接 GitHub 仓库
4. 构建设置：
   - **构建命令**: `npm run pages:build`
   - **输出目录**: `.vercel/output/static`
   - **Node 版本**: 18+
5. 点击 "Save and Deploy"

### 替代方案：静态导出

如果不需要服务端渲染（SSR），可以使用静态导出：

1. 修改 `next.config.mjs`：

```javascript
const nextConfig = {
  output: 'export',
  // ...其他配置
};
```

2. 构建：

```bash
npm run build
```

3. 输出目录改为 `out`

---

## 🔧 部署到其他平台

### Netlify

1. 推送代码到 GitHub
2. 在 Netlify 导入项目
3. 构建设置：
   - **构建命令**: `npm run build`
   - **发布目录**: `.next`
4. 添加 `netlify.toml`：

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Railway

1. 推送代码到 GitHub
2. 在 Railway 创建新项目
3. 连接 GitHub 仓库
4. Railway 会自动检测并部署

### Docker

创建 `Dockerfile`：

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 📊 部署后检查清单

### SEO 检查

- [ ] 访问 `https://yourdomain.com/sitemap.xml` 确认 sitemap 生成
- [ ] 访问 `https://yourdomain.com/robots.txt` 确认 robots 文件
- [ ] 使用 [Google 富媒体结果测试](https://search.google.com/test/rich-results) 验证结构化数据
- [ ] 在 [Google Search Console](https://search.google.com/search-console) 提交网站
- [ ] 提交 sitemap: `https://yourdomain.com/sitemap.xml`

### 性能检查

- [ ] 使用 [PageSpeed Insights](https://pagespeed.web.dev/) 测试性能
- [ ] Core Web Vitals 达标：
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- [ ] 使用 [GTmetrix](https://gtmetrix.com/) 测试加载速度

### 功能检查

- [ ] 所有页面正常访问
- [ ] 游戏正常加载和运行
- [ ] 移动端显示正常
- [ ] 所有链接正常工作
- [ ] 图片正常加载

### Analytics 设置

- [ ] Google Analytics 正常工作
- [ ] Google Search Console 验证完成
- [ ] 设置 Google Ads（如果需要）

---

## 🔒 安全配置

### 环境变量

不要将敏感信息提交到代码库：

```bash
# .env.local (不要提交到 git)
GOOGLE_ANALYTICS_ID=your-id
DATABASE_URL=your-database-url
API_SECRET=your-secret
```

### Headers 安全

已在 `next.config.mjs` 中配置：

- X-Frame-Options
- X-DNS-Prefetch-Control
- Content-Security-Policy（可选）

---

## 🌍 自定义域名

### Vercel

1. 在项目设置中点击 "Domains"
2. 添加你的域名
3. 在域名 DNS 设置中添加记录（Vercel 会提供）

### Cloudflare Pages

1. 在项目设置中点击 "Custom domains"
2. 添加域名
3. 如果域名在 Cloudflare，会自动配置

---

## 📈 监控和优化

### 推荐工具

- **Vercel Analytics**: 自动集成（Vercel 部署）
- **Google Analytics**: 网站流量分析
- **Sentry**: 错误监控
- **Umami**: 轻量级开源分析工具
- **Plausible**: 隐私友好的分析工具

---

## 🆘 常见问题

### 问：为什么游戏加载很慢？

答：确保游戏 iframe 的 `loading="lazy"` 属性已设置，并考虑使用 CDN 加速游戏资源。

### 问：如何添加 Google Analytics？

答：在 `src/app/layout.tsx` 中添加 GA 脚本，或使用 `@next/third-parties` 包。

### 问：如何启用 ISR（增量静态再生）？

答：在页面中添加 `revalidate` 选项：

```typescript
export const revalidate = 3600; // 每小时重新生成
```

---

## 📞 需要帮助？

- [Next.js 文档](https://nextjs.org/docs)
- [Vercel 文档](https://vercel.com/docs)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages)

