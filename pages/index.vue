<script lang="ts" setup>
// 工具数据
const webSites = [
  {
    name: 'Toolbox',
    description: 'A collection of tools for web development',
    icon: 'i-carbon-tool-box',
    id: 'lpuena-tool',
  },
  {
    name: 'Read',
    description: 'A classic book reader',
    icon: 'i-carbon-book',
    id: 'nuxt-read',
  },
  {
    name: 'VitePress',
    description: 'A personal blog framework based on VitePress',
    id: 'lpuena-vitepress',
    icon: 'i-simple-icons-vitepress',
  },
]
</script>

<template>
  <div>
    <!-- 欢迎区域 -->
    <div class="mx-auto mb-20 max-w-3xl text-center">
      <h2 class="mb-8 text-4xl font-bold">
        All in one Navigation
      </h2>
    </div>

    <!-- 工具展示 -->
    <CardSection
      title="WebSite Navigation"
      :card-list="webSites"
    />
  </div>
</template>

<style scoped>
/* 自定义按钮样式 */
</style>
