<template>
  <ProjectDetailLayout
    :title="'Mofai 플랫폼 구축 프로젝트'"
    :period="'2025.08.11 ~ 진행 중'"
    :description="'외교부 내부 업무 보조를 위한 AI 플랫폼 구축'"
    :tags="tags"
    :points="points"
    :teamCount="''"
    :role="role"
    :results="results"
    :troubleshooting="troubleshooting"
    :lessons="lessons"
    :architectureImage="architecture"
  />
</template>

<script setup>
import ProjectDetailLayout from '@/components/ProjectDetailLayout.vue'

import architecture from '@/assets/image/Mofai/architecture.png'
import service1 from '@/assets/image/Firzzle/service1.png'

const serviceImages = [service1]

const tags = [
  { text: 'FastAPI', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
  { text: 'Whisper', class: 'bg-[#E2FAF5] text-[#0F766E] border-[#5EEAD4]' },
  { text: 'redis', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
  { text: 'Airflow', class: 'bg-[#E0F2FE] text-[#0369A1] border-[#90CDF4]' }
]

const points = [
  '공공기관 업무 보조를 위한 AI 기반 플랫폼 구축',
  '공공기관 내부 데이터 및 외부 보도자료 기반 응답 생성'
]

const role = [
    '외부 데이터 수집을 위한 Airflow 데이터 수집 파이프라인 구축',
    '내부 LLM 성능 평가를 위한 Golden Test Set 구축',
    '회의록 작성을 위한 STT 서비스 구축'
]

const results = ''

const troubleshooting = `1. STT 성능에 의한 병목 현상 발생
  - STT 파이프라인을 Worker로 분리 후 Redis 큐 기반 비동기 파이프라인 구축
  - 주요 병목 지점인 STT 작업을 병렬 처리 가능한 구조로 설계 
  - 동시에 등록할 수 있는 작업의 수를 Redis Queue로 제어

2. STT 인식 성능 문제 및 발언 타임라인 분리
  - 발언 별 시간 간격을 바탕으로 동일 화자 발언 병합
  - NER을 통한 문장 보정 테스트   
  - 내부 LLM을 활용한 문장 보정 및 동일 화자 발언 병합
`
const lessons = `- 제한된 하드웨어 자원을 가지고 예상 사용자 수를 고려한 서비스 설계
- 비동기 큐를 이용한 파이프라인 구축 및 요청 제어
`
</script>
