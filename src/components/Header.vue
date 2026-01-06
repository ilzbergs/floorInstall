<template>
  <header class="w-full bg-[#E0D6C3] sticky top-0 z-50 shadow">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4">
      <!-- Logo -->
      <router-link
        to="/"
        class="flex items-center gap-2 text-xl font-bold text-[#5C3A21] font-heading cursor-pointer "
      >
        <img src="../assets/logo.PNG" alt="FloorInstall logo" class="h-16 w-auto" />
      </router-link>

      <!-- Hamburger button for mobile -->
      <button @click="open = !open" class="md:hidden text-[#5C3A21] focus:outline-none">
        <svg v-if="!open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Menu -->
      <nav
        :class="{ block: open, hidden: !open }"
        class="absolute top-full left-0 w-full bg-[#E0D6C3] md:static md:block md:w-auto"
      >
        <ul class="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
          <li>
            <router-link
              @click="open = false"
              class="text-[#5C3A21] hover:text-[#A9745B] block py-2 md:py-0"
              to="/services"
              >Pakalpojumi</router-link
            >
          </li>
          <li>
            <router-link
              @click="open = false"
              class="text-[#5C3A21] hover:text-[#A9745B] block py-2 md:py-0"
              to="/gallery"
              >Galerija</router-link
            >
          </li>
          <li>
            <router-link
              @click="open = false"
              class="text-[#5C3A21] hover:text-[#A9745B] block py-2 md:py-0"
              to="/contact"
              >Kontakti</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>
