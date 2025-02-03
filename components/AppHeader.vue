<script setup lang="ts">
const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur dark:bg-gray-900/80">
    <div class="mx-auto max-w-7xl px-4 lg:px-8 sm:px-6">
      <div class="h-16 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <span class="text-xl text-gray-900 font-bold dark:text-gray-100">MyApp</span>
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <nav class="hidden items-center md:flex space-x-8">
          <NuxtLink
            v-for="link in links"
            :key="link.name"
            :to="link.path"
            class="text-sm text-gray-500 font-medium transition-colors dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            active-class="text-gray-900 dark:text-gray-100"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>

        <!-- Right section -->
        <div class="flex items-center space-x-4">
          <DarkToggle />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
