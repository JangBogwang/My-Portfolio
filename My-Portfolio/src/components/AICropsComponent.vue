<template>
  <ProjectDetailLayout
    :title="'AI 작물 인식 프로젝트'"
    :period="'2022.06.01 ~ 2022.06.21'"
    :description="'Jetson Nano 보드를 활용한 작물 및 병충해 영상 인식 프로젝트'"
    :tags="tags"
    :points="points"
    :role="role"
    :results="results"
    :troubleshooting="troubleshooting"
    :lessons="lessons"
    :serviceImages="serviceImages"
    :video="''"
    :github="''"
    :detail="''"
  />
</template>

<script setup>
import ProjectDetailLayout from '@/components/ProjectDetailLayout.vue'

import dataset from '@/assets/image/Crops/dataset.png'
import data from '@/assets/image/Crops/data.png'
import detection_test from '@/assets/image/Crops/detection_test.png'
import tomato from '@/assets/image/Crops/tomato.png'
import tomato_test from '@/assets/image/Crops/tomato_test.png'

const serviceImages = [data, detection_test, tomato, tomato_test]

const tags = [
  { text: 'YOLO v4', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
  { text: 'Jetson Nano', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
  { text: 'Python', class: 'bg-[#E2FAF5] text-[#0F766E] border-[#5EEAD4]' },
  { text: 'AI HUB', class: 'bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]' }
]

const points = [
  'YOLO v4를 활용한 작물 및 병충해 인식 AI 모델 학습 및 적용',
  'Jetson Nano 보드를 활용한 실시간 카메라 영상 분석 시스템 개발',
  'AI HUB 및 Kaggle, 직접 촬영을 통한 데이터 수집 및 전처리 수행'
]

const role = '데이터 수집 및 전처리, YOLO 모델 학습, Jetson 기반 실시간 인식 및 결과 출력 서버 구현'

const results = 'Jetson Nano 상에서 실시간 작물 인식 및 병충해 탐지 기능 완성, 웹을 통한 결과 출력 서버 구현 완료'

const troubleshooting = 'YOLO 모델 최적화 및 Jetson 메모리 이슈 해결, 실시간 영상 인식 속도 개선'

const lessons = '엣지 디바이스 기반 AI 영상 인식 기술과 YOLO 모델의 활용 경험, 데이터 수집부터 배포까지의 전체 AI 개발 프로세스 경험'
</script>
