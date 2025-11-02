# 🚀 快速开始指南

本指南将帮助你在本地运行游戏在线项目。

## 📋 前置要求

- **Node.js**: 18.17 或更高版本
- **npm** / **yarn** / **pnpm**: 任选其一
- **Git**: 用于版本控制

## 🛠️ 安装步骤

### 1. 克隆仓库（如果还没有）

```bash
git clone https://github.com/yourusername/gameonline.git
cd gameonline
```

### 2. 安装依赖

选择你喜欢的包管理器：

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 📁 项目结构说明

```
gameonline/
├── src/
│   ├── app/                    # Next.js 页面和路由
│   │   ├── games/[slug]/      # 游戏详情页（动态路由）
│   │   ├── category/[category]/ # 分类页（动态路由）
│   │   ├── layout.tsx         # 根布局和全局 SEO
│   │   ├── page.tsx           # 首页
│   │   └── globals.css        # 全局样式
│   ├── components/            # React 组件
│   ├── data/                  # 游戏和分类数据
│   └── types/                 # TypeScript 类型定义
├── public/                    # 静态资源（图片等）
└── 配置文件...
```

## 🎮 添加游戏

### 方法一：编辑数据文件

1. 打开 `src/data/games.ts`
2. 在 `games` 数组中添加新游戏对象：

```typescript
{
  id: '2',  // 唯一 ID
  slug: 'your-game',  // URL 友好的名称
  title: '你的游戏',
  description: '简短描述（100字以内）',
  longDescription: '详细描述（200-300字）',
  category: 'action',  // 分类：action, puzzle, casual 等
  tags: ['标签1', '标签2'],
  thumbnailUrl: '/images/games/your-game.jpg',  // 缩略图路径
  gameUrl: 'https://your-game-url.com',  // 游戏 iframe URL
  featured: true,  // 是否在首页展示
  playCount: 0,
  rating: 4.5,
  controls: [
    '控制说明 1',
    '控制说明 2'
  ],
  tips: [
    {
      title: '技巧标题',
      description: '技巧描述',
      color: 'blue'  // blue, purple, green, red, yellow, indigo
    }
  ],
  faqs: [
    {
      question: '常见问题？',
      answer: '答案'
    }
  ],
  metaKeywords: ['关键词1', '关键词2'],
  publishedAt: '2025-01-15',
  updatedAt: '2025-11-02'
}
```

3. 保存文件，页面会自动刷新

### 方法二：准备游戏资源

#### 游戏 URL 获取

1. **HTML5 游戏**: 
   - 上传到 CDN 或静态托管
   - 使用 iframe 嵌入

2. **第三方游戏平台**:
   - itch.io
   - Poki
   - CrazyGames
   - 获取嵌入代码

#### 缩略图制作

推荐尺寸：
- 宽度: 600-800px
- 高度: 400-500px
- 格式: JPG/PNG/WebP
- 大小: < 200KB

工具推荐：
- [Canva](https://www.canva.com) - 在线设计
- [Figma](https://figma.com) - 专业设计工具
- [Photopea](https://photopea.com) - 免费在线 PS

保存位置：`public/images/games/your-game.jpg`

## 🎨 自定义样式

### 修改主题色

编辑 `tailwind.config.ts`:

```typescript
colors: {
  'primary': '#667eea',  // 主色调
  'secondary': '#764ba2',
  // 添加更多颜色...
}
```

### 修改全局样式

编辑 `src/app/globals.css`:

```css
/* 自定义样式 */
.your-custom-class {
  /* ... */
}
```

## 🔧 配置说明

### SEO 配置

编辑 `src/app/layout.tsx` 修改全局 SEO 设置：

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),  // 修改为你的域名
  title: {
    default: '你的网站名称',
    template: '%s | 你的网站名称'
  },
  // ...更多配置
};
```

### 网站信息

修改以下文件中的网站信息：

- `src/app/layout.tsx` - 网站标题、描述
- `src/components/Header.tsx` - 网站 Logo
- `src/components/Footer.tsx` - 页脚信息
- `public/site.webmanifest` - PWA 配置

## 📊 集成 Google Analytics

1. 在 `src/app/layout.tsx` 的 `<head>` 中添加：

```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `,
      }}
    />
  </>
)}
```

2. 创建 `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🏗️ 构建生产版本

```bash
# 构建
npm run build

# 预览构建结果
npm run start

# 类型检查
npm run type-check

# 代码检查
npm run lint
```

## 📱 测试移动端

1. 在同一网络下，查看你的本地 IP（例如 192.168.1.100）
2. 在手机浏览器访问：`http://192.168.1.100:3000`

或使用开发工具的响应式模式：
- Chrome: F12 → 切换设备工具栏 (Ctrl+Shift+M)
- Firefox: F12 → 响应式设计模式 (Ctrl+Shift+M)

## 🐛 常见问题

### 问题 1: 端口被占用

```bash
Error: Port 3000 is already in use
```

**解决方案**: 更换端口

```bash
PORT=3001 npm run dev
```

### 问题 2: 图片加载失败

**原因**: 图片路径错误或文件不存在

**解决方案**:
1. 检查图片是否在 `public/` 目录
2. 确认路径以 `/` 开头（如 `/images/game.jpg`）
3. 检查文件名大小写是否匹配

### 问题 3: 游戏 iframe 无法加载

**原因**: CORS 或 X-Frame-Options 限制

**解决方案**:
1. 确认游戏 URL 允许被嵌入
2. 使用支持 iframe 嵌入的游戏源
3. 如果是自己的游戏，检查服务器配置

### 问题 4: TypeScript 报错

**解决方案**:

```bash
# 删除缓存
rm -rf .next node_modules

# 重新安装
npm install

# 重新构建
npm run dev
```

## 📚 学习资源

- [Next.js 官方文档](https://nextjs.org/docs)
- [React 官方文档](https://react.dev/)
- [TypeScript 手册](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [MDN Web 文档](https://developer.mozilla.org/)

## 💡 开发技巧

### 自动格式化代码

推荐使用 Prettier：

```bash
npm install -D prettier
```

创建 `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 100
}
```

### VSCode 推荐扩展

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)
- Auto Rename Tag

## 🆘 获取帮助

如果遇到问题：

1. 查看 [README.md](./README.md)
2. 查看 [DEPLOYMENT.md](./DEPLOYMENT.md)
3. 在 GitHub Issues 提问
4. 发送邮件到 contact@gameonline.com

---

祝你开发愉快！🎉

