<script lang="ts" setup>
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<template>
  <header
    class="border-b border-gray-200/50 headerImgLight backdrop-blur-[4px] transition-colors duration-300 bg-custom-size"
    dark="border-gray-700/50 headerImgDark"
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
  </header>
</template>

<style>
</style>
