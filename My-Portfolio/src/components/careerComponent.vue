<template>
  <div>
    <div class="career-section">
      <!-- Loop through each career entry -->
      <div v-for="career in careers" :key="career.id" class="pro-summary mb-4 bg-white rounded-lg border border-blue-200 shadow-sm p-4 hover:shadow-md hover:border-blue-300 transition-all duration-200">
        <div class="flex items-center gap-2 mb-2">
          <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor"
                 stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h4 class="text-base font-bold text-slate-800">{{ career.company }}</h4>
          <span class="text-sm text-slate-500">|</span>
          <span class="text-sm font-medium text-blue-600">{{ career.team }}</span>
        </div>
        
        <div class="flex items-center gap-4 text-xs text-slate-600 mb-2 ml-8">
          <span class="font-medium">{{ career.period }}</span>
          <span class="text-slate-400">•</span>
          <span>{{ career.employmentType }}</span>
        </div>
        
        <ul class="ml-8 space-y-1">
          <li v-for="task in career.tasks" :key="task" class="flex items-start text-sm text-slate-600 leading-snug">
            <span class="text-blue-500 mr-2">•</span>
            <span>{{ task }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const careers = ref([
  {
    id: 1,
    company: '바이브컴퍼니',
    team: '외교AI서비스팀',
    period: '2025.08.11 - 재직중',
    employmentType: '계약직',
    tasks: [
      '외부데이터 수집 파이프라인 구축(Airflow)',
      '내부 회의록 작성을 위한 STT API 개발'
    ],
  }
]);
</script>

<style scoped>
.career-section {
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #2563eb;
  margin-bottom: 1rem;
}
</style>