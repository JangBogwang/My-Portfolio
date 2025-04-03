<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
    <!-- Top Navigation (고정 헤더) -->
    <header class="fixed top-0 w-full bg-orange-50/90 backdrop-blur-md shadow-md border-b border-orange-100 z-50">
      <div class="container mx-auto flex items-center justify-between p-4">
        <!-- Profile Section -->
        <div class="flex items-center space-x-4">
          <div class="relative inline-block">
            <img
              :src="profileImage"
              alt="Profile"
              class="w-16 h-16 rounded-full object-cover shadow-md transition-transform hover:scale-105"
            />
            <div class="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-gray-800">{{ name }}</h2>
            <p class="text-sm text-gray-500">{{ jobTitle }}</p>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="flex space-x-4">
          <RouterLink
            v-for="link in links"
            :key="link.route"
            :to="link.route"
            :class="[
              'px-4 py-2 rounded-lg transition-all duration-200 group text-base',
              link.hoverColor,
              { [link.activeColor]: $route.path === link.route }
            ]"
          >
            <span>{{ link.title }}</span>
          </RouterLink>
        </nav>
      </div>
    </header>

    <!-- Main Content 영역에 패딩 추가 (헤더 높이 보정) -->
    <main class="pt-24">
        <RouterView/>
    </main>

    <!-- Footer -->
    <footer class="bg-orange-50 py-6 border-t border-orange-100">
      <div class="container mx-auto text-center">
        <p class="text-sm text-gray-600">
          © 2024 Jang Bo Gwang | Web Developer
        </p>
      </div>
    </footer>
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
