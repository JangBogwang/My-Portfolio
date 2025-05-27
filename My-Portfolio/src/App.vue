<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
    <main class="pt-0">
      <RouterView/>
    </main>
  </div>
</template>


<script setup>
import { RouterLink } from 'vue-router';
import profileImage from '@/assets/image/profile.jpg';

const name = 'Jang Bo Gwang';
const jobTitle = 'Web Developer';

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
