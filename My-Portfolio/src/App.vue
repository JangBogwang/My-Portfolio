<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 print:bg-white">
    <main class="pt-0">
      <div class="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <RouterView />
      </div>
    </main>
  </div>
</template>



<script setup>
import { RouterLink } from 'vue-router';

const links = [
  {
    route: '/',
    title: 'Home',
    hoverColor: 'hover:bg-blue-50 hover:text-blue-600',
    activeColor: 'bg-blue-100/30 text-blue-700'
  },{
    route: '/project',
    title: 'Projects',
    hoverColor: 'hover:bg-purple-50 hover:text-purple-600',
    activeColor: 'bg-purple-100/30 text-purple-700'
  }
];
</script>

<style>
@media print {
  .no-print {
    display: none !important;
  }
}
</style>
