<template>
    <div class="min-h-screen w-full bg-[#FAF4EE] font-sans text-[#4B2E2E]">
      <!-- 사이드바 (좌측 고정, 헤더 아래로) -->
      <div class="fixed top-28 left-0 w-1/4 h-full bg-[#FBF6EF]">
        <ul class="space-y-4">
          <li 
            v-for="(project, index) in projects" 
            :key="index"
            class="cursor-pointer flex items-center space-x-3 p-4 rounded-lg shadow-md border border-[#D9CBB6] transition-colors duration-200"
            :class="{
              'bg-white font-bold': selectedProject === index,
              'bg-[#FAF4EE] hover:bg-white': selectedProject !== index
            }"
            @click="selectProject(index)"
          >
            <img :src=project.image alt="Project Image" class="w-12 h-12 rounded-md shadow-sm">
            <span class="font-medium text-[#4B2E2E]">{{ project.title }}</span>
          </li>
        </ul>
      </div>
      
      <!-- 메인 콘텐츠 영역 -->
      <div class="ml-[25%] p-8 md:p-12">
        <ProjectDetail :component="projects[selectedProject].component" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Project1 from '@/components/Project1.vue';
  import Project2 from '@/components/Project2.vue';
  import Project3 from '@/components/Project3.vue';
  import ProjectDetail from '@/components/ProjectDetail.vue';
  
  const projects = ref([
    {
      title: "MBTI에 따른 콘텐츠 추천서비스. MVTI",
      component: Project1,
      image: new URL('@/assets/icons/mvtilogo.png', import.meta.url).href
    },
    {
      title: "작물 인식 AI 모델 구축 프로젝트",
      component: Project2,
      image: "https://via.placeholder.com/150"
    },
    {
      title: "AI로 추천받는 나만의 식단 관리.Nutrigo",
      component: Project3,
      image: new URL('@/assets/image/Project3/nutrigologo.png', import.meta.url).href
    }
  ]);
  
  const selectedProject = ref(0);
  
  function selectProject(index) {
    selectedProject.value = index;
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400;0,600;1,400&display=swap');
  
  .font-serif {
    font-family: 'Libre Bodoni', serif;
  }
  </style>
  