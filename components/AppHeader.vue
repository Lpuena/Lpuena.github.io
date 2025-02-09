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
          <div class="i-carbon-application-web text-2xl" />
          <h1 class="text-2xl font-bold">
            Navigation
          </h1>
        </div>

        <!-- Dark Mode Toggle -->
        <div class="flex items-center space-x-3">
          <GithubCom />
          <DarkToggle />
        </div>
      </div>
    </div>

    <!-- 分割线 -->
    <div class="h-px bg-gray-300 dark:bg-gray-700" transition />
  </header>
</template>

<style>
</style>
