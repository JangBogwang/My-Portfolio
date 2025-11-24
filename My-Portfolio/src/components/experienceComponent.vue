<template>
    <ul class="entry-list">
      <li v-for="activity in activities" :key="activity.id" class="entry-item">
        <div class="entry-text">
          <p class="entry-title">{{ activity.title }}</p>
          <p class="entry-sub">{{ activity.description }}</p>
        </div>
        <span class="entry-date">{{ activity.date }}</span>
      </li>
    </ul>
</template>

<script setup>
const activities = [
  {
    id: 1,
    title: '업무 자동화 Make 툴 강의 진행',
    description: '대학도서관 전문 인력 교육 생성형 AI 업무 활용 역량 강화 과정 2기',
    date: '2025.10.16',
  },
  {
    id: 2,
    title: 'Ocial',
    description: '직장인 취준생 IT 커뮤니티',
    date: '2024.04 ~',
  },  
  {
    id: 3,
    title: 'SSAFYcial',
    description: 'SSAFY 소개 및 IT 관련 기사 작성성',
    date: '2024.08 - 2025.06',
  },
  {
    id: 4,
    title: '위니브 엠베서더',
    description: 'IT 교육 콘텐츠 기자단 활동동',
    date: '2024.06 - 2024.08',
  },
  {
    id: 5,
    title: '한양대학교 학술동아리 바라미',
    description: '전자공학 학술 활동, 정기 세미나 및 작품 전시',
    date: '2016.03 - 2022.12',
  },
];
</script>
