<script lang="ts" setup>
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<template>
  <header
    class="backdrop-blur"
  >
    <div class="mx-auto px-4 container lg:px-8 sm:px-6">
      <div class="h-15 flex items-center justify-between">
        <!-- Logo and Title -->
        <div class="flex cursor-pointer items-center space-x-3" @click="goHome">
          <h1 class="text-2xl font-bold italic">
            Navigation
          </h1>
        </div>

        <!-- Dark Mode Toggle -->
        <DarkToggle />
      </div>
    </div>

    <!-- 分割线 -->
    <div class="h-px bg-gray-300 dark:bg-gray-700" transition />
  </header>
</template>

<style>
</style>
