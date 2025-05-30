<template>
        <div class="min-h-screen text-[#4A3737] px-4 py-12">
          <div class="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
            <div class="bg-gradient-to-r from-[#2b8741] to-[#88d66f] p-8">
              <h1 class="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                Nutirigo
              </h1>
              <p class="text-xl md:text-2xl text-white font-medium mt-2">
                식단 관리 및 추천 서비스 
              </p>
            </div>
            
            <div class="p-8">
              <section class="mb-8">
                <h2 class="text-2xl font-bold border-b-4 border-[#88d66f] pb-2 mb-4">
                  프로젝트 개요
                </h2>
                <p class="text-lg text-[#4A3737]">
                  생성형 AI를 통한 식단 추천과 식단 관리 서비스 
                </p>
              </section>
              
              <section class="mb-8">
                <h2 class="text-2xl font-bold border-b-4 border-[#88d66f] pb-2 mb-4">
                  프로젝트 멤버
                </h2>
                <ul class="space-y-2 text-lg">
                  <li>• 장보광 (풀스택)</li>
                  <li>• 서주원 (풀스택)</li>
                </ul>
              </section>

              <section class="mb-8">
                <h2 class="text-2xl font-bold border-b-4 border-[#88d66f] pb-2 mb-4">
                  담당 역할  
                </h2>
                <ul class="space-y-2 text-lg">
                  <li>• 프론트 엔드: 사이드 바, 식단 대시보드, 식단 관리, 식단 추천, 미니게임 페이지 개발</li>
                  <li>• 백엔드(spring boot)
                    <ul>
                      <li>&ensp;- jwt를 활용한 로그인 기능 구현.</li>
                      <li>&ensp;- 미니 게임 기능 구현</li>
                      <li>&ensp;- MongoDb에 저장된 식품 데이터 검색 기능 구현(유사도 기반)</li>
                      <li>&ensp;- 생성형 AI를 활용한 챗봇 서버.</li> 
                    </ul>
                  </li>
                </ul>
              </section>
      
              <section class="mb-8">
                <h2 class="text-2xl font-bold border-b-4 border-[#88d66f] pb-2 mb-4">
                  기술 핵심 
                </h2>
                <ul class="space-y-2 text-lg">
                  <li>• Gemini api를 활용한 생성형 AI 챗봇. </li>
                  <li>• RAG 기술을 이용한 정확도 향상</li>
                  <li>• 유사도 기반의 식단 메뉴 검색 기능 구현</li>
                  <li>• JPA를 활용한 DB 제어 </li>
                  <li>• 공공 데이터를 활용한 사용자 칼로리 계산</li>
                </ul>
              </section>

              <section class="mb-8">
                <h2 class="text-2xl font-bold border-b-4 border-[#88d66f] pb-2 mb-4">
                프로젝트 성과
                </h2>
                <ul class="space-y-2 text-lg">
                  <li>• 식품 데이터를 활용한 식단 관리 서비스 구현 </li>
                  <li>• 섭취 칼로리 및 식품 데이터를 활용한 식단 추천 챗봇 구현. 프롬프트 최적화를 통한 성능 향상</li>
                  <li>• 유사도 기반의 식단 메뉴 검색. 검색 이중화로 검색 시간 단축 4 ~ 5초 -> 0초대로 단축</li>
                </ul>
              </section>
              
              <section class="mb-8">
                <h2 class="text-2xl font-bold border-b-4 border-[#88d66f] pb-2 mb-4">
                  개발 기간
                </h2>
                <p class="text-lg">2024.11.15 ~ 2024.11.26</p>
              </section>
              
              <section class="mb-8">
                <h2 class="text-2xl font-bold border-b-4 border-[#88d66f] pb-2 mb-6">
                  기술 스택 (Tech Stack)
                </h2>
                
                <div class="grid md:grid-cols-3 gap-4">
                  <div 
                    v-for="(category, index) in techStack" 
                    :key="index" 
                    class="bg-[#FFF7F0] rounded-xl p-4 shadow-md"
                  >
                    <h3 class="text-lg font-bold text-[#2b8741] mb-2">
                      {{ category.title }}
                    </h3>
                    <p class="text-[#4A3737]">
                      {{ category.items.join(', ') }}
                    </p>
                  </div>
                </div>
              </section>
      
              <section class="mb-8" >
                <h2 class="text-2xl font-bold border-b-4 border-[#88d66f] pb-2 mb-4">
                  시연 영상
                </h2>
                <iframe 
                  src="https://www.youtube.com/embed/jLddzWXDmow?si=HaRSakIsOHb8UHLX" 
                  title="YouTube video player" 
                  style="width: 100%; height:600px;" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen>
              </iframe>
              </section>

              <section class="mb-8">
                <h2 class="text-2xl font-bold border-b-4 border-[#88d66f] pb-2 mb-4">
                  유저 플로우 
                </h2>
                <img src="@/assets/image/Nutrigo/userflow.png" style="width: 70%; height:auto; margin: 0 auto;">
              </section>

              <!-- 
              <section class="mb-8">
                <h2 class="text-2xl font-bold border-b-4 border-[#88d66f] pb-2 mb-4">
                  챗봇 시퀀스 다이어그램 
                </h2>
                <img src="@/assets/image/Nutrigo/chatbot.png" style="width: 90%; height:auto; margin: 0 auto;">
              </section>
              -->

              <section class="mb-8">
                <h2 class="text-2xl font-bold border-b-4 border-[#88d66f] pb-2 mb-4">
                  식단 관리 시퀀스 다이어그램 
                </h2>
                <img src="@/assets/image/Nutrigo/diet.png" style="width: 90%; height:auto; margin: 0 auto;">
              </section>

              <section class="mb-8">
                <h2 class="text-2xl font-bold border-b-4 border-[#88d66f] pb-2 mb-4">
                  프로젝트 구성 
                </h2>
                <img src="@/assets/image/Nutrigo/projectstructure.png" style="width: 90%; height:auto; margin: 0 auto;">
              </section>
      
              <section class="mb-8">
                <h2 class="text-2xl font-bold border-b-4 border-[#88d66f] pb-2 mb-4">
                  데이터 베이스 
                </h2>
                <img src="@/assets/image/Nutrigo/erd.png" style="width: 90%; height:auto; margin: 0 auto;">
              </section>
      
            </div>
          </div>
        </div>
      </template>
      
      <script setup>
      const techStack = [
        {
          title: '언어',
          items: ['java', 'python', 'JavaScript']
        },
        {
          title: '프론트엔드',
          items: ['Vue']
        },
        {
          title: '백엔드',
          items: ['Spring Boot', 'FastAPI']
        },
        {
          title: '디자인',
          items: ['Figma']
        },
        {
          title: '데이터베이스',
          items: ['MySQL', 'MongoDB']
        },
        {
          title: '협업 도구',
          items: ['Jira', 'GitHub']
        },
        {
          title: 'AI',
          items: ['Gemini 1.5-flash']
        },
        {
          title: '인증',
          items: ['JWT']
        }
      ]
      </script>
