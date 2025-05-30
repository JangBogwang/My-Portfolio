<template>
  <ProjectDetailLayout
    :title="'SOTORY'"
    :period="'2025.03 ~ 2025.04'"
    :description="'사용자 지출 데이터를 기반으로 감정과 의미를 기록하는 소비일기 서비스'"
    :tags="tags"
    :points="points"
    :teamCount="'6'"
    :role="role"
    :results="results"
    :troubleshooting="troubleshooting"
    :lessons="lessons"
    :architectureImage="architectureImage"
    :serviceImages="serviceImages"
    :github="'https://github.com/example/sotory'"
    :video="'https://www.youtube.com/embed/dummy-sotory'"
    :detail="'https://notion.so/sotory-summary'"
  />
</template>

<script setup>
import ProjectDetailLayout from '@/components/ProjectDetailLayout.vue'

import arch from '@/assets/image/Sotory/architecture.png'
import service1 from '@/assets/image/Sotory/service1.png'
import service2 from '@/assets/image/Sotory/service2.png'

const architectureImage = [arch]
const serviceImages = [service1, service2]

const tags = [
  { text: 'FastAPI', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
  { text: 'Spring Boot', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
  { text: 'Docker', class: 'bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]' },
  { text: 'CI/CD', class: 'bg-[#E2FAF5] text-[#0F766E] border-[#5EEAD4]' },
  { text: 'MongoDB', class: 'bg-[#E2FAF5] text-[#0F766E] border-[#5EEAD4]' }
]

const points = [
  'FastAPI + Spring Boot 기반 하이브리드 백엔드 설계',
  'GitLab CI/CD와 Docker를 활용한 배포 자동화 구성',
  'Stable Diffusion을 활용한 이미지 생성',
  'SSAFY 금융 API와 연동한 서비스 개발'
]

const role = [
  '개발 일정 관리 및 서비스 기획, 설계',
  'GitLab CI/CD와 Docker를 활용한 배포 자동화 구성',
  'Nginx를 활용한 리버스 프록시 및 Fail2Ban 설정, Https 적용',
  '소비 레포트 API 개발'
]
const troubleshooting = `1. 일정한 그림체의 이미지 생성 
    - stable diffusion에 Lora를 연결하여 이미지 생성

2. 악의적인 이미지 텍스트 작성 
    - 비속어 데이터셋을 활용한 입력 제한 
    - gpt 사용시 부적절한 발언 필터링하도록 설정
    - stable diffusion 자체 검열 시스템
`

const results = '개인 소비 데이터를 기반으로 감정과 의미를 기록할 수 있는 일기형 소비 플랫폼 구현. MVP 완성 및 시연 완료'

const lessons =
  '이기종 백엔드 시스템 통합과 배포 자동화를 경험하며 실제 운영환경을 고려한 설계 및 인프라 역량을 강화함, 보안을 고려한 서비스 설계 경험'
</script>
