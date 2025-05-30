<template>
  <ProjectDetailLayout
    :title="'Firzzle AI 학습 코칭 플랫폼'"
    :period="'2025.04.14 ~ 2025.05.23 (6주)'"
    :description="'영상 기반 요약, 챗봇 질의응답, 스냅리뷰 기능을 제공하는 AI 학습 서비스'"
    :tags="tags"
    :points="points"
    :role="role"
    :results="results"
    :troubleshooting="troubleshooting"
    :lessons="lessons"
    :architectureImage="architecture"
    :serviceImages="serviceImages"
    :github="'https://github.com/example/firzzle'"
    :video="'https://www.youtube.com/embed/영상링크를_입력해주세요'"
    :detail="'https://notion.so/firzzle-summary'"
  />
</template>

<script setup>
import ProjectDetailLayout from '@/components/ProjectDetailLayout.vue'

import architecture from '@/assets/image/Firzzle/architecture.png'
import service1 from '@/assets/image/Firzzle/service1.png'

const serviceImages = [service1]

const tags = [
  { text: 'GPT', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
  { text: 'Whisper', class: 'bg-[#E2FAF5] text-[#0F766E] border-[#5EEAD4]' },
  { text: 'Kafka', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
  { text: 'Qdrant', class: 'bg-[#E0F2FE] text-[#0369A1] border-[#90CDF4]' },
  { text: 'SSE', class: 'bg-[#FDF2F8] text-[#BE185D] border-[#FBCFE8]' }
]

const points = [
  'GPT 기반 학습 요약, 질의응답, 퀴즈 생성 등 LLM 응용 서비스 구현',
  'Whisper 기반 영상 자막 처리 및 문맥 분석 최적화',
  'Kafka + SSE를 활용한 실시간 비동기 처리 구조 설계',
  'Qdrant Vector DB + RAG 구조로 문맥 기반 검색 응답 시스템 구현',
  '타임라인 병합 및 GPT 병렬 호출로 LLM 처리 속도와 품질 개선'
]

const role = 'AI 파트 담당으로 요약, 검색 응답, 병렬 처리 최적화, 전체 LLM 파이프라인 설계 및 구현 담당'

const results = '영상 요약, 챗봇, 퀴즈 자동화 기능이 결합된 실시간 학습 플랫폼 완성 및 성능 최적화 성과 확보'

const troubleshooting = `
- 텍스트 전처리 및 요약 최적화
  - 자막이 hh:mm:ss 형식으로 되어 있어 시간 계산 복잡
  - 간격 짧은 자막 병합으로 약 15~20% 텍스트량 감소
  - 의미 단위로 자막 분할 및 GPT 병렬 호출 구조 설계

- VectorDB + RAG 기반 검색 응답 구현
  - GPT 임베딩 → Qdrant 저장 → 유사도 기반 검색 및 응답
  - subtitle 임베딩 → 유사 콘텐츠 추천까지 확대

- 서비스 반응성 개선
  - Kafka 기반 비동기 구조로 각 단계 병렬 처리
  - SSE 도입으로 실시간 진행 상황 사용자에게 전달하여 UX 개선
`

const lessons = 'STT 기반 자막 처리부터 GPT 응용까지 LLM 기반 서비스 전반을 주도하며 성능, 정확도, UX 개선 관점에서의 구조적 사고 역량 확보'
</script>
