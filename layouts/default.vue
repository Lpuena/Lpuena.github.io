<script setup>
const _route = useRoute()
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Nuxt App` : 'Nuxt App'
  },
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="mx-auto flex-1 px-4 py-8 container">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
