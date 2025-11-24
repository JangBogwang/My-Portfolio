<template>
  <!-- 우측 리모컨 네비게이션: 섹션 이름 표시 -->
  <nav class="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 print:hidden">
    <ul class="space-y-2">
      <li v-for="item in navItems" :key="item.id">
        <button
          @click="scrollTo(item.id)"
          :class="[
            'flex items-center space-x-2 px-3 py-1 rounded-full shadow transition text-sm whitespace-nowrap',
            active === item.id
              ? 'bg-blue-100 text-blue-600'
              : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
          ]"
        >
          <span
            :class="active === item.id ? 'bg-blue-600' : 'bg-gray-300'"
            class="w-2 h-2 rounded-full flex-shrink-0"
          ></span>
          <span>{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const navItems = [
  { id: 'profile', label: '프로필' },
  { id: 'resume', label: '이력' },
  { id: 'projects', label: '프로젝트' },
  { id: 'mofai', label: '외교부 AI'},
  { id: 'firzzle', label: 'Firzzle' },
  { id: 'sotory', label: 'Sotory' },
  { id: 'tomatalk', label: 'Tomatalk' },
  { id: 'nutrigo', label: 'Nutrigo' },
  { id: 'mvti', label: 'MVTI' },
  { id: 'crops', label: 'Crops' }
]

const active = ref(navItems[0].id)

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function onScroll() {
  for (const item of navItems) {
    const el = document.getElementById(item.id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        active.value = item.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
@media (max-width: 768px) {
  nav { display: none; }
}
</style>
