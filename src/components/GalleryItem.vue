<template>
  <div class="overflow-hidden rounded shadow">
    <img :src="imgSrc" :alt="altText" class="w-full h-auto object-cover"/>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imgSrc: string,
  altText: string
}>()
</script>
