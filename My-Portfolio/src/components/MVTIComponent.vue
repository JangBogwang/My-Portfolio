<template>
  <ProjectDetailLayout
    :title="'MVTI'"
    :period="'2024.04.05 ~ 2024.06.25'"
    :description="'MBTI 및 콘텐츠 성향 기반 VOD 추천 서비스'"
    :tags="tags"
    :points="points"
    :teamCount="'4'"
    :role="role"
    :results="results"
    :troubleshooting="troubleshooting"
    :lessons="lessons"
    :architectureImage="architectureImage"
    :serviceImages="serviceImages"
    :github="'https://github.com/example/mvti'"
    :video="'https://www.youtube.com/embed/aIA7bUbfYXA?si=wPM1E02euJg3x5ps'"
    :detail="'https://notion.so/mvti-summary'"
  />
</template>


<script setup>
import ProjectDetailLayout from '@/components/ProjectDetailLayout.vue'

import sequence from '@/assets/image/MVTI/sequence.png'   // 아키텍처 다이어그램
import erd from '@/assets/image/MVTI/erd.png'             // DB 구조
import backend from '@/assets/image/MVTI/backend.png'     // 서버 구성
import cloud from '@/assets/image/MVTI/cloud.png'         // 서비스 화면 (예시)
import service1 from '@/assets/image/MVTI/service1.png'         // 서비스 화면 (예시)
import service2 from '@/assets/image/MVTI/service2.png'         // 서비스 화면 (예시)

const architectureImage = [backend]
const serviceImages = [service1, service2]
const tags = [
  { text: 'FastAPI', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
  { text: 'Kafka', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
  { text: 'MongoDB', class: 'bg-[#E2FAF5] text-[#0F766E] border-[#5EEAD4]' },
  { text: 'MySQL', class: 'bg-[#E2FAF5] text-[#0F766E] border-[#5EEAD4]' },
  { text: 'AWS', class: 'bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]' }
]

const points = [
  'LaBSE 기반 텍스트 임베딩을 활용한 콘텐츠 유사도 계산',
  'MBTI + 콘텐츠 선호 이력 기반 하이브리드 추천 알고리즘 개발',
  'Kafka 기반 데이터 파이프라인 및 Consumer 처리 로직 구현',
  'MSA 아키텍처 및 CQRS 패턴 적용으로 서버 확장성 확보',
  'MongoDB + MySQL 이중 DB 구성으로 조회 및 분석 분리'
]

const role = [
  '전체 일정 및 Jira 기반 이슈 관리', 
  'FastAPI 기반 추천 서버 개발', 
  '영화 데이터 수집 크롤링 코드 개발'
]
const results = 'MBTI와 콘텐츠 유사도 기반의 추천 시스템 MVP 완성, 실제 유저 테스트를 통한 기능 검증 완료'

const troubleshooting = 'AWS Lambda 서버의 Cold Start 문제를 해결하기 위해 일정 간격으로 가짜 호출을 발생시켜 함수가 항상 준비된 상태를 유지하도록 하는 Warm-up 방식을 적용'

const lessons = '추천 시스템과 MSA 환경에 대한 깊은 이해를 바탕으로 실서비스 수준의 구조 설계와 배포 경험을 쌓음'
</script>

