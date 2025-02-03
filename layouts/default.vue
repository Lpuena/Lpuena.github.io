<script setup>
const _route = useRoute()
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Nuxt App` : 'Nuxt App'
  },
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b">
    <!-- 导航栏 -->
    <AppHeader class="sticky top-0 z-50" />

    <!-- 主要内容 -->
    <main class="flex-1 overflow-auto bg-gradient-to-b">
      <div class="mx-auto px-4 py-16 container lg:px-8 sm:px-6">
        <slot />
      </div>
    </main>
    <!-- 页脚 -->
    <AppFooter />
  </div>
</template>
