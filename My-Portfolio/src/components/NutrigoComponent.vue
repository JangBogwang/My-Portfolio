<template>
  <ProjectDetailLayout
    :title="'Nutirigo'"
    :period="'2024.11.15 ~ 2024.11.26'"
    :description="'생성형 AI를 통한 식단 추천과 식단 관리 서비스'"
    :tags="tags"
    :points="points"
    :teamCount="'2'"
    :role="role"
    :results="results"
    :troubleshooting="troubleshooting"
    :lessons="lessons"
    :architectureImage="architectureImage"
    :serviceImages="serviceImages"
    :github="'https://github.com/example/nutrigo'"
    :video="'https://www.youtube.com/embed/jLddzWXDmow?si=HaRSakIsOHb8UHLX'"
    :detail="'https://notion.so/nutrigo-summary'"
  />
</template>

<script setup>
import ProjectDetailLayout from '@/components/ProjectDetailLayout.vue'

import server from '@/assets/image/Nutrigo/projectstructure.png'
import userflow from '@/assets/image/Nutrigo/userflow.png'
import service1 from '@/assets/image/Nutrigo/service1.png'         // 서비스 화면 (예시)
import service2 from '@/assets/image/Nutrigo/service2.png'         // 서비스 화면 (예시)


const architectureImage = [server]
const serviceImages = [service1, service2]

const tags = [
  { text: 'Vue', class: 'bg-[#F0F9FF] text-[#0EA5E9] border-[#BAE6FD]' },
  { text: 'Spring Boot', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
  { text: 'FastAPI', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
  { text: 'MongoDB', class: 'bg-[#E2FAF5] text-[#0F766E] border-[#5EEAD4]' },
  { text: 'MySQL', class: 'bg-[#E2FAF5] text-[#0F766E] border-[#5EEAD4]' },
  { text: 'Gemini API', class: 'bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]' },
  { text: 'JWT', class: 'bg-[#F1F5F9] text-[#334155] border-[#CBD5E1]' },
  { text: 'Jira', class: 'bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]' },
  { text: 'GitHub', class: 'bg-[#EFF6FF] text-[#1D4ED8] border-[#DBEAFE]' }
]

const points = [
  '사용자 식단 데이터 기록(공공데이터 기반)',
  '사용자 식단 기록 기반 식단 추천 챗봇',
  '다용도 사용자 게시판',
  '식단 기록 대시 보드 제공',
  '식품 영양분 데이터를 활용한 미니게임'
]

const role = [
'프론트엔드 - 식단 대시보드, 추천·관리 UI 및 미니게임 구현',
'백엔드(Spring Boot) - 로그인(JWT), 미니게임, MongoDB 검색, 생성형 AI 챗봇 서버 개발',
'Gemini API를 활용한 생성형 AI 챗봇 구현',
'공공데이터 기반 칼로리 계산 로직 구축 및 LLM API 연동', 
]
const results = `• 식품 데이터를 활용한 식단 관리 서비스 구축\n• 칼로리·식품 데이터 기반 추천 챗봇 구현\n• 검색 이중화로 평균 응답 시간 4~5초 → 0초대로 단축`

const troubleshooting = `• 유사도 검색 정확도 개선을 위해 프롬프트 최적화 및 데이터 기반 응답 생성 구현\n• MongoDB 검색 속도 개선을 위해 Index 및 다단계 유사도 기준 적용`

const lessons = 'AI 기반 추천 시스템 설계 및 구현 경험, 챗봇 응답 품질 향상을 위한 프롬프트 엔지니어링 실전 적용'
</script>
