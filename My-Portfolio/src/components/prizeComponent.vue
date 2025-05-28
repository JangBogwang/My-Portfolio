<template>
    <ul class="entry-list">
        <li v-for="prize in prizes" :key="prize.id" class="entry-item">
        <div class="entry-text">
            <p class="entry-title">{{ prize.title }}</p>
            <p class="entry-sub">{{ prize.description }}</p>
        </div>
        <span class="entry-date">{{ prize.date }}</span>
        </li>
    </ul>
</template>

<script setup>
const prizes = [
  {
    id: 1,
    title: 'SSAFY 12기 1학기 파이널 프로젝트',
    description: '우수상(사용자 식단 관리 시스템 Nutrigo 프로젝트)',
    date: '2024.11.29',
  },
  {
    id: 2,
    title: 'LG 헬로비전 DX DATA School 프로젝트',
    description: '최우수상(MBTI에 따른 콘텐츠 추천 시스템 개발)',
    date: '2024.06.26',
  },
];
</script>