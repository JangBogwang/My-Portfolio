<template>
  <ProjectDetailLayout
    :title="'Firzzle AI 학습 코칭 플랫폼'"
    :period="'2025.04.14 ~ 2025.05.23 (6주)'"
    :description="'영상 기반 요약, 챗봇 질의응답, 스냅리뷰 기능을 제공하는 AI 학습 서비스'"
    :tags="tags"
    :points="points"
    :teamCount="'6'"
    :role="role"
    :results="results"
    :troubleshooting="troubleshooting"
    :lessons="lessons"
    :architectureImage="architecture"
    :serviceImages="serviceImages"
    :github="'#'"
    :video="'https://youtu.be/5n1sNibVcZI'"
    :detail="'#'"
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
  '입력된 영상 스크립트 바탕으로 요약 및 퀴즈 생성',
  '영상 스크립트 기반 응답 챗봇(학습모드, 시험모드)',
  '영상의 핵심 타임라인을 기준으로 작성하는 스냅 리뷰'
]

const role = [
    'Qdrant Vector DB + RAG 구조로 문맥 기반 검색 응답 시스템 구현',
    'GPT 기반 학습 요약, 질의응답, 퀴즈 생성 등 LLM 응용 서비스 구현',
    '타임라인 병합 및 GPT 병렬 호출로 LLM 처리 속도와 품질 개선',
    '영상 스크립트, 메타데이터, 이미지 데이터 수집',
    '텍스트 유사도 기준 콘텐츠 추천 서비스 개발발'
]

const results = '영상 요약, 챗봇, 퀴즈 자동화 기능이 결합된 실시간 학습 플랫폼 완성 및 성능 최적화'

const troubleshooting = `1. 텍스트 전처리 및 요약 최적화
  - 자막이 hh:mm:ss 형식으로 되어 있어 시간 계산 복잡
  - 간격 짧은 자막 병합으로 약 15~20% 텍스트량 감소
  - 의미 단위로 자막 분할 및 GPT 병렬 호출 구조 설계

2. VectorDB + RAG 기반 검색 응답 구현
  - GPT 임베딩 → Qdrant 저장 → 유사도 기반 검색 및 응답
  - subtitle 임베딩 → 유사 콘텐츠 추천까지 확대

3. 서비스 반응성 개선
  - Kafka 기반 비동기 구조로 각 단계 병렬 처리
  - SSE 도입으로 실시간 진행 상황 사용자에게 전달하여 UX 개선
`

const lessons = 'STT 기반 자막 처리부터 GPT 응용까지 LLM 기반 서비스 전반을 주도하며 성능, 정확도 개선 경험'
</script>
