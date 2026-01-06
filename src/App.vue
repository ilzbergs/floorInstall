<template>
  <div class="flex flex-col min-h-screen">

    <!-- Header -->
    <Header class="sticky top-0 z-50 bg-[#D6C4A8]" />

    <!-- Main content -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Footer ar cookie consent -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Ja nepieciešams, global styles */
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Lora', serif; /* piemērs koka / parketa noskaņai */
  background-color: #F5F1E8; /* gaišs fona tonis parketa stilā */
}
</style>
