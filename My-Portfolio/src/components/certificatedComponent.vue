<template>
  <div class="mb-8">
    <!-- 섹션 헤더 (더 뚜렷한 구분선과 여백 추가) -->
    <h4 class="font-bold text-2xl text-[#3A3A3A] border-b-2 pb-2 mb-4 flex items-center">
            <span class="w-2 h-6 bg-[#8B6E5E] mr-3 rounded"></span>
            교육
        </h4>
    
    <!-- 인증서 목록 (간격 증가, 그림자 효과 추가) -->
    <div class="space-y-3">
      <div 
        v-for="cert in certificates" 
        :key="cert.id"
        class="flex justify-between items-start mb-6"
      >
        <div class="flex-1">
          <!-- 타이틀과 조직 분리 -->
          <div class="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <h5 class="font-bold text-[#3A2723] text-lg">{{ cert.title }}</h5>
            <span class="text-[#6B4F4F] text-sm md:before:content-['|'] md:before:mr-3 md:before:text-[#C4B0A0]">{{ cert.organization }}</span>
          </div>
        </div>
        <div class="bg-[#5D4037] text-white text-xs font-medium px-4 py-2 rounded-full whitespace-nowrap ml-3 shadow-sm">
          {{ cert.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 인증서 데이터 (제목과 조직 분리)
const certificates = [
  { 
    id: 1, 
    title: 'TOEIC Speaking IM3 (130점)', 
    organization: 'ETS',
    date: '2025.03.11' 
  },
  { 
    id: 2, 
    title: '정보처리기사', 
    organization: '한국산업인력공단',
    date: '2024.09.10' 
  },
  { 
    id: 3, 
    title: 'SQLD', 
    organization: '한국데이터산업진흥원',
    date: '2025.04.05' 
  },
  { 
    id: 4, 
    title: 'ADsP', 
    organization: '한국데이터산업진흥원',
    date: '2025.03.22' 
  },
  { 
    id: 5, 
    title: 'SW 역량테스트 B형', 
    organization: '삼성',
    date: '2024.09.21' 
  }
];
</script>

<style scoped>
/* 호버 효과 및 전환 강화 */
.transition-all {
  transition-property: all;
}

.duration-200 {
  transition-duration: 200ms;
}

/* 반응형 디자인을 위한 미디어 쿼리 */
@media (max-width: 640px) {
  .flex-col {
    flex-direction: column;
  }
  
  .items-start {
    align-items: flex-start;
  }
}
</style>