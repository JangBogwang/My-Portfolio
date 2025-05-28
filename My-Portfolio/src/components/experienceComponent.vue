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
    title: 'SSAFYcial',
    description: 'SSAFY 소개 및 IT 관련 기사 작성성',
    date: '2024.08 - 진행 중',
  },
  {
    id: 2,
    title: '위니브 엠베서더',
    description: 'IT 교육 콘텐츠 기자단 활동동',
    date: '2024.06 - 2024.08',
  },
  {
    id: 3,
    title: '한양학술타운',
    description: '재학생 연구 지원, SOC 로봇워 공모전 참여',
    date: '2017.06 - 2017.12',
  },
  {
    id: 4,
    title: '한양대학교 학술동아리 바라미',
    description: '전자공학 학술 활동, 정기 세미나 및 작품 전시',
    date: '2016.03 - 2022.12',
  },
];
</script>
