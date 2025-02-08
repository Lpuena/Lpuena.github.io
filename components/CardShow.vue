<script lang="ts" setup>
defineProps<{
  card: {
    name: string
    description: string
    id: string
    icon: string
  }
}>()

// 新窗口跳转路由
function openLink(id: string) {
  const url = `https://${id}.pages.dev` // 确保是绝对 URL
  window.open(url, '_blank')
}
</script>

<template>
  <div
    class="group cursor-pointer rounded-xl bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2"
    transition
    dark="bg-[#222] shadow-gray-700/40 hover:shadow-gray-700"
    @click="openLink(card.id)"
  >
    <!-- Icon with a subtle hover effect -->
    <div
      class="mb-8 transition text-5xl"
      :class="card.icon"
    />

    <!-- Title with a gradient hover effect -->
    <h3
      class="mb-4 text-2xl text-gray-900 font-bold"
      dark="text-gray-100"
      transition
    >
      {{ card.name }}
    </h3>

    <!-- Description with a fade-in effect -->
    <p
      class="mb-6 transition text-gray-600 group-hover:opacity-80"
      dark="text-gray-300"
    >
      {{ card.description }}
    </p>
  </div>
</template>
