<template>
  <ProjectDetailLayout
    :title="'MVTI'"
    :period="'2024.04.05 ~ 2024.06.25'"
    :description="'사용자 MBTI 및 콘텐츠 취향을 기반으로한 추천 서비스'"
    :tags="tags"
    :points="points"
    :role="role"
    :results="results"
    :screenshots="screenshots"
  />
</template>

<script setup>
import ProjectDetailLayout from '@/components/ProjectDetailLayout.vue'

import sequence from '@/assets/image/Project1/sequence.png'
import erd from '@/assets/image/Project1/erd.png'
import backend from '@/assets/image/Project1/backend.png'
import cloud from '@/assets/image/Project1/cloud.png'

const screenshots = [sequence, erd, backend, cloud]

const tags = [
  { text: 'FastAPI', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
  { text: 'Kafka', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
  { text: 'MongoDB', class: 'bg-[#E2FAF5] text-[#0F766E] border-[#5EEAD4]' },
  { text: 'MySQL', class: 'bg-[#E2FAF5] text-[#0F766E] border-[#5EEAD4]' },
  { text: 'AWS', class: 'bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]' }
]

const points = [
  'LaBSE 모델을 사용한 텍스트 임베딩 기반 추천 시스템 개발',
  'MBTI + 선호 콘텐츠 유사도 기반 하이브리드 추천 알고리즘 구현',
  'Kafka 기반 데이터 스트림 처리 시스템 구축',
  'MSA 방식 서버 아키텍처 및 CQRS 패턴 적용',
  'MongoDB + RDS 혼합 DB 구성'
]

const role = 'PM으로서 일정 관리 및 개발 내역 정리, FastAPI 기반 추천 서버 개발, 크롤링 기반 데이터 수집 자동화'

const results = 'MBTI 데이터 기반 추천 알고리즘 구현, 영화 DB 및 추천 시스템 MVP 완성'
</script>
