<template>
  <div class="min-h-screen bg-gradient-to-br from-[#FFF7F0] to-[#FFE6D0] text-[#4A3737] px-4 py-12">
    <div class="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
      <div class="bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] p-8">
        <h1 class="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          MVTI
        </h1>
        <p class="text-xl md:text-2xl text-white font-medium mt-2">
          Movie & Video to Individual
        </p>
      </div>
      
      <div class="p-8">
        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FF6B6B] pb-2 mb-4">
            프로젝트 개요
          </h2>
          <p class="text-lg text-[#4A3737]">
            사용자 MBTI 및 콘텐츠 취향을 기반으로한 추천 서비스
          </p>
        </section>
        
        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FF6B6B] pb-2 mb-4">
            프로젝트 멤버
          </h2>
          <ul class="space-y-2 text-lg">
            <li>• 장성준 (팀장, 데이터 분석, 추천 모델 개발)</li>
            <li>• 장보광 (백엔드, PM)</li>
            <li>• 김재석 (CI/CD, 백엔드)</li>
            <li>• 박규림 (프론트엔드, 데이터 분석)</li>
          </ul>
        </section>

        <section class="mb-8">
                <h2 class="text-2xl font-bold border-b-4 border-[#FF6B6B] pb-2 mb-4">
                  담당 역할  
                </h2>
                <ul class="space-y-2 text-lg">
                  <li>• PM: 프로젝트 일정 관리, 진행 상황 정리, 팀 내 소통 및 개발 내역 정리</li>
                  <li>• 백엔드 : 콘텐츠 데이터 크롤링 코드 개발,추천 서버 개발, 데이터 Read 서버 개발 </li>
                </ul>
              </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FF6B6B] pb-2 mb-4">
            기술 핵심 
          </h2>
          <ul class="space-y-2 text-lg">
            <li>• 텍스트 임베딩 LaBSE 모델 사용한 텍스트 임베딩</li>
            <li>• 선로 콘텐츠 유사도 및 MBTI 유사도를 결합한 하이브리드 추천 시스템</li>
            <li>• kafka로 데이터 스트림 관리</li>
            <li>• AWS 환경에서 웹 서비스 개발</li>
            <li>• MSA 방식의 아키텍쳐 구현</li>
            <li>• CQRS 패턴 적용</li>
          </ul>
        </section>
        
        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FF6B6B] pb-2 mb-4">
            개발 기간
          </h2>
          <p class="text-lg">2024.04.05 ~ 2024.06.25</p>
        </section>
        
        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FF6B6B] pb-2 mb-6">
            기술 스택 (Tech Stack)
          </h2>
          
          <div class="grid md:grid-cols-3 gap-4">
            <div 
              v-for="(category, index) in techStack" 
              :key="index" 
              class="bg-[#FFF7F0] rounded-xl p-4 shadow-md"
            >
              <h3 class="text-lg font-bold text-[#FF6B6B] mb-2">
                {{ category.title }}
              </h3>
              <p class="text-[#4A3737]">
                {{ category.items.join(', ') }}
              </p>
            </div>
          </div>
        </section>

        <section class="mb-8" >
          <h2 class="text-2xl font-bold border-b-4 border-[#FF6B6B] pb-2 mb-4">
            시연 영상
          </h2>
          <iframe 
            src="https://www.youtube.com/embed/aIA7bUbfYXA?si=wPM1E02euJg3x5ps" 
            title="YouTube video player" 
            style="width: 100%; height:600px;" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FF6B6B] pb-2 mb-4">
            추천 시스템 시퀀스 다이어그램
          </h2>
          <img src="@/assets/image/Project1/sequence.png" style="width: 90%; height:auto; margin: 0 auto;">
        </section>
        
        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FF6B6B] pb-2 mb-4">
            데이터 베이스 
          </h2>
          <img src="@/assets/image/Project1/erd.png" style="width: 90%; height:auto; margin: 0 auto;">
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FF6B6B] pb-2 mb-4">
            백엔드 다이어그램
          </h2>
          <img src="@/assets/image/Project1/backend.png" style="width: 80%; height:auto; margin: 0 auto;">
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold border-b-4 border-[#FF6B6B] pb-2 mb-4">
            클라우드 다이어그램
          </h2>
          <img src="@/assets/image/Project1/cloud.png" style="width: 100%; height:auto; margin: 0 auto;">
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const techStack = [
  {
    title: '언어',
    items: ['Python', 'JavaScript']
  },
  {
    title: '프론트엔드',
    items: ['React']
  },
  {
    title: '백엔드',
    items: ['FastAPI']
  },
  {
    title: '디자인',
    items: ['Figma']
  },
  {
    title: '데이터베이스',
    items: ['MySQL', 'MongoDB', 'Amazon RDS', 'Amazon S3']
  },
  {
    title: '인프라',
    items: ['Docker', 'AWS']
  },
  {
    title: 'CI/CD',
    items: ['GitHub Action']
  },
  {
    title: '협업 도구',
    items: ['Jira', 'Notion', 'GitHub']
  }
]
</script>