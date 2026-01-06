<template>
  <div class="bg-[#FFF8F0] shadow rounded p-4 hover:shadow-lg transition">
    <h3 class="font-bold text-[#5C3A21] font-heading">{{ title }}</h3>
    <p class="text-[#7A5C40] mt-2">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  description: string
}>()
</script>
