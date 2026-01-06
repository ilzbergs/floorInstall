<template>
  <section class="bg-[#FFF8F0] p-8">
    <h2 class="text-2xl font-bold mb-4 text-[#5C3A21] font-heading">Kontakti</h2>
    <form class="space-y-4">
      <input type="text" placeholder="Vārds" class="border p-2 w-full rounded border-[#7A5C40]"/>
      <input type="tel" placeholder="Telefons" class="border p-2 w-full rounded border-[#7A5C40]"/>
      <textarea placeholder="Ziņa" class="border p-2 w-full rounded border-[#7A5C40]"></textarea>
      <button type="submit" class="bg-[#A9745B] hover:bg-[#8B5E3C] text-[#FFF8F0] px-4 py-2 rounded transition">
        Nosūtīt
      </button>
    </form>
  </section>
</template>

<script setup lang="ts"></script>
