<template>
  <section class="bg-[#F5F0E1] p-8">
    <h2 class="text-2xl font-bold mb-4 text-[#5C3A21] font-heading">Galerija</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <GalleryItem imgSrc="/images/example1.jpg" altText="Darbs 1"/>
      <GalleryItem imgSrc="/images/example2.jpg" altText="Darbs 2"/>
      <GalleryItem imgSrc="/images/example3.jpg" altText="Darbs 3"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import GalleryItem from '../components/GalleryItem.vue'
</script>
