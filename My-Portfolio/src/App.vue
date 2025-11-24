<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 print:bg-white">
    <RemoteNav />
    <main class="pt-0">
      <div class="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <RouterView />
      </div>
    </main>
  </div>
</template>



<script setup>
import { RouterLink } from 'vue-router';
import RemoteNav from '@/components/RemoteNav.vue'

const links = [
  {
    route: '/',
    title: 'Home',
    hoverColor: 'hover:bg-blue-50 hover:text-blue-600',
    activeColor: 'bg-blue-100/30 text-blue-700'
  }
];

const navItems = [
  { id: 'profile', label: '프로필' },
  { id: 'skills', label: '스킬' },
  { id: 'education', label: '교육' },
  { id: 'career', label: '경력'},
  { id: 'projects', label: '프로젝트' },
  { id: 'mofai', label: '외교부 AI'},
  { id: 'firzzle', label: 'Firzzle' },
  { id: 'tomatalk', label: 'Tomatalk' },
  { id: 'nutrigo', label: 'Nutrigo' },
  { id: 'mvti', label: 'MVTI' },
  { id: 'crops', label: 'Crops' }
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style>
@media print {
  .no-print {
    display: none !important;
  }
}
</style>
