<template>
  <div class="min-h-screen bg-gradient-to-br from-[#FFF7F0] to-[#FFE6D0] text-[#4A3737] px-4 py-12">
    <div class="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
      <div class="bg-gradient-to-r from-[#FFD93D] to-[#88d66f] p-8">
        <h1 class="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          AI 작물 인식 프로젝트 
        </h1>
        <p class="text-xl md:text-2xl text-white font-medium mt-2">
          Jetson Nano 보드를 활용한 영상
        </p>
      </div>
      
      <div class="p-8">
        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FFD93D] pb-2 mb-4">
            프로젝트 개요
          </h2>
          <p class="text-lg text-[#4A3737]">
            작물 및 병충해 AI 영상 인식 프로젝트
          </p>
        </section>
        
        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FFD93D] pb-2 mb-4">
            프로젝트 멤버
          </h2>
          <ul class="space-y-2 text-lg">
            <li>• 장보광 (영상 인식 모델 개발, 학습 데이터 수집)</li>
            <li>• 팀원 (데이터 학습, 모델 변환 코드 개발)</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FFD93D] pb-2 mb-4">
            기술 핵심 
          </h2>
          <ul class="space-y-2 text-lg">
            <li>• YOLO v4를 활용한 영상 처리</li>
            <li>• Jetson Nano 하드웨어를 활용한 시스템 개발</li>
            <li>• 작물 인식(고추, 토마토) 및 병충해 확인</li>
          </ul>
        </section>
        
        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FFD93D] pb-2 mb-4">
            개발 기간
          </h2>
          <p class="text-lg">2022.06.01 ~ 2022.06.21</p>
        </section>
        
        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FFD93D] pb-2 mb-6">
            기술 스택 (Tech Stack)
          </h2>
          
          <div class="grid md:grid-cols-3 gap-4">
            <div 
              v-for="(category, index) in techStack" 
              :key="index" 
              class="bg-[#FFF7F0] rounded-xl p-4 shadow-md"
            >
              <h3 class="text-lg font-bold text-[#88d66f] mb-2">
                {{ category.title }}
              </h3>
              <p class="text-[#4A3737]">
                {{ category.items.join(', ') }}
              </p>
            </div>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FFD93D] pb-2 mb-4">
            데이터 셋 
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="@/assets/image/Project2/dataset.png" class="rounded-lg shadow-md">
            <img src="@/assets/image/Project2/data.png" class="rounded-lg shadow-md">
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FFD93D] pb-2 mb-4">
            구현 결과
          </h2>
          <div class="space-y-6">
            <div>
              <h3 class="font-bold text-lg">인식 테스트 (고추 잎)</h3>
              <img src="@/assets/image/Project2/detection_test.png" class="rounded-lg shadow-md mx-auto">
            </div>
            <div>
              <h3 class="font-bold text-lg">인식 테스트 (토마토)</h3>
              <img src="@/assets/image/Project2/tomato.png" class="rounded-lg shadow-md mx-auto">
            </div>
            <div>
              <h3 class="font-bold text-lg">인식 테스트 (병충해)</h3>
              <img src="@/assets/image/Project2/tomato_test.png" class="rounded-lg shadow-md mx-auto">
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const techStack = [
  {
    title: '언어',
    items: ['Python']
  },
  {
    title: '딥러닝 모델',
    items: ['YOLO v4']
  },
  {
    title: '데이터',
    items: ['AI HUB']
  }
]
</script>
