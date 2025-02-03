# Nuxt 3 Starter Template

这是一个基于Nuxt 3的快速启动模板，包含以下功能：

- ⚡️ Nuxt 3
- 🎨 UnoCSS
- 🛠 TypeScript
- ✅ ESLint

## 快速开始

### 使用degit（推荐）

```bash
npx degit Lpuena/nuxtTemp my-nuxt-app
cd my-nuxt-app
pnpm install # If you don't have pnpm installed, run: npm install -g pnpm
pnpm dev
```

### 使用git clone

```bash
git clone https://github.com/Lpuena/nuxtTemp.git my-nuxt-app
cd my-nuxt-app
pnpm install
pnpm dev
```

## 项目结构

```
.
├── components/       # Vue组件
├── composables/      # 组合式API
├── layouts/          # 布局文件
├── pages/            # 页面路由
├── public/           # 静态资源
└── server/           # API路由
```

## 开发指南

- 添加新页面：在`pages`目录下创建`.vue`文件
- 添加组件：在`components`目录下创建`.vue`文件
- 添加API：在`server/api`目录下创建`.ts`文件

## 部署

### 静态站点生成

```bash
pnpm generate
```

### Node.js服务器

```bash
pnpm build
```

## 许可证

MIT
