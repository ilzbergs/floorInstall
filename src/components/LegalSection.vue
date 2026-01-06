<template>
  <section class="mb-6">
    <h2 class="text-xl font-bold mb-2">{{ sectionHeader }}</h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{ sectionHeader: string }>()
</script>



