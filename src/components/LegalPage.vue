<template>
  <div
    class="max-w-4xl mx-auto px-4 py-8 text-[#5C3A21] font-body prose prose-neutral legal-sections"
  >
    <h1 class="font-heading text-3xl font-bold mb-6">
      {{ pageTitle }}
    </h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ pageTitle: string }>()
</script>
