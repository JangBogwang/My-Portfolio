<template>
  <ProjectDetailLayout
    :title="'토마톡 (Tomatalk)'"
    :period="'25.01.13 ~ 25.02.21'"
    :description="'초중등 교사·학생을 위한 온라인 실시간 토론 교육 플랫폼'"
    :tags="tags"
    :teamCount="'6'"
    :points="points"
    :role="role"
    :results="results"
    :troubleshooting="troubleshooting"
    :lessons="lessons"
    :architectureImage="architectureImage"
    :serviceImages="serviceImages"
    :github="'#'"
    :video="'https://youtu.be/v8kCUuZXH4w'"
    :detail="'#'"
  />
</template>

<script setup>
import ProjectDetailLayout from '@/components/ProjectDetailLayout.vue'
import architecture from '@/assets/image/Tomatalk/architecture.png'
import service1 from '@/assets/image/Tomatalk/service1.png'
import service2 from '@/assets/image/Tomatalk/service2.png'

const architectureImage = [architecture]
const serviceImages = [service1, service2]

const tags = [
  { text: 'WebRTC', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
  { text: 'Whisper', class: 'bg-[#E2FAF5] text-[#0F766E] border-[#5EEAD4]' },
  { text: 'GPT-4', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
  { text: 'WebSocket', class: 'bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]' },
  { text: 'Vue', class: 'bg-[#FFEFEF] text-[#D7263D] border-[#FBCACA]' }
]

const points = [
  'WebRTC 기반 실시간 유저 매칭 및 토론 기능 구현',
  '단계별 학습 콘텐츠 구현',
  'LLM을 활용한 학습 피드백 및 채점'
]

const role = [
  'Whisper 기반 STT 기능 + GPT 발언 요약 및 피드백 시스템 설계',
  'WebSocket으로 실시간 음성 스트리밍 및 처리 구조 구축',
  'LLM 기반 학습 콘텐츠 서비스 API 개발'
]
const results = '실시간 STT 기반 AI 피드백 시스템 구현 완료 및 시연 성공, Whisper + WebSocket 구조 최적화 경험 확보'

const troubleshooting = 'Whisper 응답 지연 문제를 WebSocket 병렬 처리로 해결, 타겟 불명확 문제는 사용자 인터뷰와 서비스 분석을 통해 해결'

const lessons = '기획부터 구현까지 전체 흐름 리딩 경험을 통해 기획안의 실현 가능성과 기술 연동 관점의 설계 사고 강화'
</script>