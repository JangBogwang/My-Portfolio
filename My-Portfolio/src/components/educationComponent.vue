<template>
    <ul class="entry-list">
        <li
        v-for="edu in educationList"
        :key="edu.id"
        class="entry-item"
        >
        <div class="entry-text">
            <p class="entry-title">{{ edu.title }}</p>
            <p class="entry-sub">{{ edu.description }}</p>
        </div>
        <span class="entry-date">{{ edu.date }}</span>
        </li>
    </ul>
</template>

<script setup>
const educationList = [
  {
    id: 1,
    title: 'SSAFY 12기',
    description: '종합 소프트웨어 역량 강화를 위한 교육 과정',
    date: '2024.07 - 2025.07',
  },
  {
    id: 2,
    title: 'LG 헬로비전 DX Data School 2기',
    description: '데이터 분석 및 PYTHON 웹 개발 교육 과정',
    date: '2023.12 - 2024.06',
  },
  {
    id: 3,
    title: '한양대학교 융합전자공학부',
    description: '전자공학과 컴퓨터 과학의 전공 역량 습득',
    date: '2016.03 - 2023.02',
  },
];
</script>