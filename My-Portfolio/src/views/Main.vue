<template>
    <div class="min-h-screen w-full bg-white font-sans text-[#4B2E2E] flex justify-center px-4">
      <div class="max-w-5xl w-full rounded-xl overflow-hidden flex flex-col">
        <!-- 연락처 정보 바 (두 줄, grid-cols-2) -->
        <div class="bg-[#4B2E2E] text-white rounded-xl p-4 mx-8 mt-8 z-10 shadow-lg">
        <div class="grid grid-cols-2 gap-4">
            <!-- 연락처 -->
            <div class="flex items-center space-x-2">
            <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M3 5h3M4 5a2 2 0 012-2h8a2 2 0 012 2v2m4-4h-3"/>
                <path d="M3 10h18M3 10a2 2 0 012-2h14a2 
                        2 0 012 2v8a2 2 0 01-2 
                        2H5a2 2 0 01-2-2v-8z"/>
            </svg>
            <span class="text-sm">연락처: 010-5344-2695</span>
            </div>

            <!-- 이메일 -->
            <div class="flex items-center space-x-2">
            <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 
                        002.22 0L21 8"/>
                <path d="M5 19h14a2 2 0 
                        002-2V7a2 2 0 00-2-2H5a2 
                        2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span class="text-sm">이메일: wkdqhrhkd12@gmail.com</span>
            </div>

            <!-- 블로그 -->
            <div class="flex items-center space-x-2">
            <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M16 8c0-2.21-1.79-4-4-4S8 
                        5.79 8 8s1.79 4 4 4 4-1.79 
                        4-4zM12 14c-4.418 0-8 
                        1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/>
            </svg>
            <a href="https://growingegg.tistory.com/" target="_blank" rel="noopener noreferrer" class="text-sm underline">
                블로그: https://growingegg.tistory.com/
            </a>
            </div>

            <!-- 깃허브 -->
            <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M16 18l6-6-6-6M8 6l-6 6 
                        6 6"/>
            </svg>
            <a href="https://github.com/JangBogwang" target="_blank" rel="noopener noreferrer" class="text-sm underline">
                Github: https://github.com/JangBogwang
            </a>
            </div>
        </div>
        </div>

        <!-- 아래 나머지 콘텐츠 -->
        <div class="p-8 md:p-12">
          <Skills></Skills>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <!-- Education & Experience (오른쪽 컬럼) -->
            <div>
              <Certification></Certification>
              <Education></Education>
            </div>
            <!-- Skills & Languages & Reference (왼쪽 컬럼) -->
            <div>
              <Experience></Experience>
              <Prize></Prize>
            </div>    
          </div>
          <Project></Project>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import Project from '@/components/projectComponent.vue'
import Skills from '@/components/skillsComponent.vue'
import Certification from '@/components/certificatedComponent.vue'
import Education from '@/components/educationComponent.vue'
import Experience from '@/components/experienceComponent.vue'
import Prize from '@/components/prizeComponent.vue'
</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400;0,600;1,400&display=swap');
  
  @media print {
    header {
      position: static !important; /* fixed나 absolute 대신 static으로 변경 */
      display: block;
      margin-bottom: 20px;
    }
    body {
      padding-top: 0 !important; /* 기존 패딩 제거 */
    }
    /* 필요 없는 요소 숨기기 */
    .no-print {
      display: none !important;
    }
  }

  .font-serif {
    font-family: 'Libre Bodoni', serif;
  }

  .my-hr {
    border: 0;
    height: 3px;
    background-color: #4B2E2E;
  }

  .skill-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.skill-item h6 {
  font-size: 0.95rem;
  margin: 0;
}

.skill-item p {
  margin: 0;
}
  </style>
