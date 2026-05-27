# Love Hidden Hearts — 任务拆分文档

> **Agent 使用说明**
>
> 1. 先读 `progress1.md` 找到第一个 `[ ]`
> 2. 每次只完成一个任务
> 3. 逐条按验收标准检查
> 4. 更新 `progress1.md` 后立即停止，做一次 git commit

---

## Module 1：项目脚手架

### Task 1.1：创建 Vite + React + TypeScript 项目

**文件**：`package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/App.tsx`

**实现要点**：
- `npm create vite@latest love-hidden-hearts -- --template react-ts`
- 安装 Tailwind CSS v4：`npm install -D tailwindcss @tailwindcss/vite`
- 配置 `vite.config.ts` 加入 tailwindcss 插件
- 清理 Vite 默认模板代码（App.css, 默认样式等）
- 确保 `npm run dev` 能正常启动

**验收标准**：
- [ ] `npm run dev` 启动无报错
- [ ] `npm run build` 构建成功
- [ ] Tailwind CSS v4 正确加载

---

### Task 1.2：配置 Tailwind 与 Love 主题配色

**文件**：`src/index.css`, `tailwind.config.ts`（如需要）

**实现要点**：
- 在 `src/index.css` 中定义 Love/Romantic 主题色系：
  - 主色：玫瑰红/粉红系（`#e91e63`, `#f06292`, `#f48fb1`）
  - 辅助色：深紫红（`#880e4f`）
  - 背景：柔和粉白渐变
  - 强调色：金色点缀（`#ffd54f`）
- 配置 CSS 自定义属性或 Tailwind theme 扩展
- 设置全局字体（推荐 Inter 或系统字体）

**验收标准**：
- [ ] 页面背景有粉色/玫瑰色调
- [ ] 主色调通过 Tailwind class 可用
- [ ] 颜色搭配符合 Love/Romantic 主题
- [ ] 无配色刺眼或对比度不足问题

---

## Module 2：SEO 基础与静态资源

### Task 2.1：创建 SEO 静态文件

**文件**：`public/robots.txt`, `public/sitemap.xml`, `public/ads.txt`

**实现要点**：
- `robots.txt`：Allow all，指向 sitemap
- `sitemap.xml`：包含首页 URL，changefreq=weekly, priority=1.0
- `ads.txt`：放占位内容 + HTMLGames 的 ads.txt 条目（从 `https://cdn.htmlgames.com/ads.txt` 获取）
- 所有文件中的域名用占位符 `YOUR_DOMAIN.com`（用户后续替换）

**验收标准**：
- [ ] `http://localhost:5173/robots.txt` 可访问且内容正确
- [ ] `http://localhost:5173/sitemap.xml` 可访问且格式合法
- [ ] `http://localhost:5173/ads.txt` 可访问，包含 HTMLGames ads 条目

---

### Task 2.2：设置公共资源（Favicon 与图片）

**文件**：`public/favicon.svg`, `public/images/`

**实现要点**：
- 创建一个爱心主题 SVG favicon
- 将 4 个 webp 图片移到 `public/images/` 目录
- 图片命名保持清晰：`lovehiddenhearts-200.webp`, `lovehiddenhearts-300x200.webp`, `lovehiddenhearts-500x300.webp`, `lovehiddenhearts-800x450.webp`

**验收标准**：
- [ ] Favicon 在浏览器标签页正常显示
- [ ] 4 个 webp 图片可通过 `/images/` 路径访问

---

## Module 3：首页布局与组件

### Task 3.1：Header + Hero 区域 + 游戏 iframe

**文件**：`src/App.tsx`, `src/components/Header.tsx`, `src/components/Hero.tsx`

**实现要点**：
- Header：固定顶部，包含 Logo（Love Hidden Hearts）和导航链接（Play, How to Play, FAQ）
- Hero 区域：
  - H1：Love Hidden Hearts
  - Subtitle：英文简介
  - 游戏 iframe 容器：桌面最大宽度 960px，比例 ~800:480，移动端 100% 宽度
  - iframe src：`https://cdn.htmlgames.com/LoveHiddenHearts/index.html`
  - iframe 允许 fullscreen、autoplay、gamepad
- iframe 容器：深色背景、圆角边框

**验收标准**：
- [ ] Header 固定且不遮挡内容
- [ ] 桌面端游戏 iframe 宽度 960px 以内，比例接近 5:3
- [ ] 移动端 iframe 宽度 100%，不溢出
- [ ] iframe 游戏能正常加载显示
- [ ] 无横向滚动条

---

### Task 3.2：Fullscreen 按钮

**文件**：`src/components/FullscreenButton.tsx`

**实现要点**：
- 按钮文本：Play Fullscreen
- 点击后调用 iframe 容器元素的 `requestFullscreen` API
- 浏览器不支持 fullscreen 时不报错（try-catch 包裹）
- 按钮样式与 love 主题匹配

**验收标准**：
- [ ] 点击 Fullscreen 按钮，游戏进入全屏
- [ ] 不支持 fullscreen 的浏览器不报错
- [ ] 按钮在桌面端和移动端均可点击

---

### Task 3.3：About + How to Play + Controls + Tips 区域

**文件**：`src/components/About.tsx`, `src/components/HowToPlay.tsx`, `src/components/Controls.tsx`, `src/components/Tips.tsx`

**实现要点**：
- **About**：标题 "About Love Hidden Hearts"，120-180 词英文介绍
- **How to Play**：4 步步骤说明
- **Controls**：桌面鼠标 + 移动端触摸说明
- **Tips**：4 条找爱心技巧
- 所有内容从 `src/data.ts` 集中管理
- 使用爱心图标或装饰元素增强 love 主题

**验收标准**：
- [ ] 四个区域内容完整、英文拼写正确
- [ ] 步骤/Tips 视觉清晰
- [ ] 移动端排版不溢出

---

### Task 3.4：FAQ 区域

**文件**：`src/components/FAQ.tsx`, `src/data.ts`

**实现要点**：
- 5 个 FAQ，使用折叠/展开交互（accordion）
- FAQ 问题从 `data.ts` 引用
- FAQ 内容：
  1. Is Love Hidden Hearts free to play?
  2. Can I play Love Hidden Hearts without downloading?
  3. Does Love Hidden Hearts work on mobile?
  4. How do I play Love Hidden Hearts fullscreen?
  5. Why is the game not loading?
- 展开/折叠动画平滑

**验收标准**：
- [ ] 5 个 FAQ 全部显示
- [ ] 点击问题展开/折叠正常
- [ ] 默认全部折叠，点击展开查看答案
- [ ] 无内容截断

---

### Task 3.5：Related Pages 占位 + Footer

**文件**：`src/components/RelatedPages.tsx`, `src/components/Footer.tsx`

**实现要点**：
- **More Ways to Play**：4 个 coming-soon 卡片
  - Love Hidden Hearts Unblocked
  - Love Hidden Hearts No Download
  - Love Hidden Hearts Fullscreen
  - How to Play Love Hidden Hearts
  - 显示为灰色禁用状态，不是真实链接，不产生 404
- **Footer**：简短说明文字 + Privacy Policy / Contact 链接（占位锚点）
- 版权信息

**验收标准**：
- [ ] 4 个相关页面卡片以 coming-soon 状态展示
- [ ] 没有可点击的无效链接
- [ ] Footer 内容完整、居中

---

## Module 4：SEO 元标签与结构化数据

### Task 4.1：添加 SEO Meta 标签 + JSON-LD

**文件**：`index.html`, `src/components/SEO.tsx`（或用 react-helmet-async 或直接改 index.html）

**实现要点**：
- `<title>`：Love Hidden Hearts - Play Online for Free
- `<meta name="description">`：完整描述
- `<link rel="canonical">`：占位域名
- Open Graph 标签：og:title, og:description, og:type, og:url, og:image（用 800x450 webp）
- Twitter Card：summary_large_image
- JSON-LD VideoGame schema 注入到 index.html
- 所有域名用占位符 `YOUR_DOMAIN.com`

**验收标准**：
- [ ] 查看页面源代码，title 和 meta description 存在
- [ ] Open Graph 标签完整
- [ ] Twitter Card 标签完整
- [ ] JSON-LD 结构化数据在 `<head>` 中可见
- [ ] `npx vite build` 后 dist/index.html 包含所有标签

---

## Module 5：最终检查与构建验证

### Task 5.1：质量检查与构建验证

**文件**：所有文件

**实现要点**：
- `npm run build` 构建成功
- `npm run preview` 预览无报错
- 检查：无控制台错误
- 检查：移动端响应式（Chrome DevTools 模拟）
- 检查：无横向滚动条
- 检查：iframe 不溢出
- 检查：所有按钮可点击
- 检查：无 404 链接
- 代码中没有假信息（official、假评分、假评论等）
- `npx tsc --noEmit` 类型检查通过

**验收标准**：
- [ ] `npm run build` 成功无报错
- [ ] `npm run preview` 首页正常渲染
- [ ] 移动端 375px 宽度无横向滚动
- [ ] 游戏 iframe 正常加载
- [ ] Fullscreen 按钮功能正常
- [ ] 控制台无报错
- [ ] TypeScript 类型检查通过
