<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
html { scroll-behavior: smooth; }
html, body, #app { margin: 0; min-height: 100%; }
body {
  background: #f8f5ef;
  color: #262421;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
}
a { text-decoration: none; }
button, a { -webkit-tap-highlight-color: transparent; }
</style>
