<template>
  <ul class="entry-list">
    <li 
      v-for="cert in certificates" 
      :key="cert.id" 
      class="entry-item"
    >
      <div class="entry-text">
        <p class="entry-title">{{ cert.title }}</p>
        <p class="entry-sub">{{ cert.organization }}</p>
      </div>
      <span class="entry-date">{{ cert.date }}</span>
    </li>
  </ul>
</template>

<script setup>
// 인증서 데이터 (제목과 조직 분리)
const certificates = [
  { 
    id: 1, 
    title: 'SW 역량테스트 B형', 
    organization: '삼성',
    date: '2024.09.21' 
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
    date: '2024.04.05' 
  },
  { 
    id: 4, 
    title: 'ADsP', 
    organization: '한국데이터산업진흥원',
    date: '2024.03.22' 
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