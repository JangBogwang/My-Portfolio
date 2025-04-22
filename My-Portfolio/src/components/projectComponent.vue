<template>
<!-- 프로젝트 섹션 -->
<section class="mt-8">
  <h4 class="font-bold text-2xl text-[#3A3A3A] border-b-2 pb-2 mb-4 flex items-center">
      <span class="w-2 h-6 bg-[#8B6E5E] mr-3 rounded"></span>
      프로젝트
    </h4>
  
  <!-- 프로젝트 그리드 컨테이너 -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    
    <!-- 프로젝트 1 -->
    <div class="bg-white rounded-lg shadow p-5 border-2">
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-bold m-0 text-indigo-700">SOTORY</h3>
        <span class="bg-amber-800 text-white px-3 py-1 rounded-full text-sm">2025.03 - 2024.04</span>
      </div>
      
      <p class="mt-3 text-gray-600 text-sm">생성형 AI를 활용하여 나만의 소비 일기를 카드 형식으로 만들어주는 앱</p>
      
      <div class="mt-4">
        <span class="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mr-2 mb-2">SpringBoot</span>
        <span class="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs mr-2 mb-2">FastAPI</span>
        <span class="inline-block bg-yellow-100 text-orange-700 px-2 py-1 rounded text-xs mr-2 mb-2">GitLab CI/CD</span>
        <span class="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs mr-2 mb-2">Docker</span>
        <span class="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs mr-2 mb-2">EC2</span>
      </div>
      
      <ul class="mt-4 pl-5 text-gray-600 text-sm list-disc">
        <li class="mb-1">Gitlab과 docker을 활용한 CI/CD 구현</li>
        <li class="mb-1">fail2ban, nginx, https를 활용한 보안</li>
        <li class="mb-1">예산 조회, 레포트 조회 API 개발(spring boot)</li>
      </ul>
      
      <div class="mt-4 flex gap-3">
        <a href="#" class="text-indigo-600 text-sm flex items-center hover:text-indigo-800">
          <span class="mr-1">Github</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <a href="#" class="text-indigo-600 text-sm flex items-center hover:text-indigo-800">
          <span class="mr-1">Detail</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
    
    <!-- 프로젝트 2 -->
    <div class="bg-white rounded-lg shadow p-5 border-2">
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-bold m-0 text-indigo-700">토마톡</h3>
        <span class="bg-amber-800 text-white px-3 py-1 rounded-full text-sm">2025.01 - 2023.02</span>
      </div>
      
      <p class="mt-3 text-gray-600 text-sm">WebRTC 기술과 STT, LLM 기술을 활용한 토론 교육 플랫폼</p>
      
      <div class="mt-4">
        <span class="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs mr-2 mb-2">SpringBoot</span>
        <span class="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs mr-2 mb-2">FastAPI</span>
        <span class="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs mr-2 mb-2">STT(whisper 모델)</span>
        <span class="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs mr-2 mb-2">WebRTC(openvidu)</span>
      </div>
      
      <ul class="mt-4 pl-5 text-gray-600 text-sm list-disc">
        <li class="mb-1">WebSocket을 통한 실시간 STT(whisper) 변환 기능</li>
        <li class="mb-1">변환된 발언 텍스트 요약 및 LLM 기반 평가 API 구현</li>
      </ul>
      
      <div class="mt-4 flex gap-3">
        <a href="#" class="text-indigo-600 text-sm flex items-center hover:text-indigo-800">
          <span class="mr-1">Github</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <a href="#" class="text-indigo-600 text-sm flex items-center hover:text-indigo-800">
          <span class="mr-1">Detail</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
    
    <!-- 프로젝트 3 -->
    <div class="bg-white rounded-lg shadow p-5 border-2">
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-bold m-0 text-indigo-700">Nutirigo</h3>
        <span class="bg-amber-800 text-white px-3 py-1 rounded-full text-sm">2024.11 - 2024.11</span>
      </div>
      
      <p class="mt-3 text-gray-600 text-sm">식단 관리 및 분석 대시보드 제공, 생성형 AI 기반 식단 추천 서비스</p>
      
      <div class="mt-4">
        <span class="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-2 mb-2">Spring Boot</span>
        <span class="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs mr-2 mb-2">FastAPI</span>
        <span class="inline-block bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs mr-2 mb-2">MongoDB</span>
        <span class="inline-block bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs mr-2 mb-2">MySQL</span>
        <span class="inline-block bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs mr-2 mb-2">ChatGPT</span>
      </div>
      
      <ul class="mt-4 pl-5 text-gray-600 text-sm list-disc">
        <li class="mb-1">식품의약품안전처 제공 데이터 활용 영양성분 DB 구축</li>
        <li class="mb-1">사용자 식단을 바탕으로 영양분 섭취량 및 칼로리 섭취량 분석</li>
        <li class="mb-1">섭취한 영양 성분 및 DB 바탕 사용자의 식단 추천</li>
      </ul>
      
      <div class="mt-4 flex gap-3">
        <a href="https://github.com/ssafitjs" class="text-indigo-600 text-sm flex items-center hover:text-indigo-800">
          <span class="mr-1">Github</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <a href="#" class="text-indigo-600 text-sm flex items-center hover:text-indigo-800">
          <span class="mr-1">Detail</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
    
    <!-- 프로젝트 4 -->
    <div class="bg-white rounded-lg shadow p-5 border-2">
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-bold m-0 text-indigo-700">MVTI</h3>
        <span class="bg-amber-800 text-white px-3 py-1 rounded-full text-sm">2023.04 - 2023.06</span>
      </div>
      
      <p class="mt-3 text-gray-600 text-sm">MBTI와 사용자 취향 협업 필터링을 활용한 콘텐트 추천 서비스</p>
      
      <div class="mt-4">
        <span class="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mr-2 mb-2">FASTAPI</span>
        <span class="inline-block bg-red-100 text-red-700 px-2 py-1 rounded text-xs mr-2 mb-2">Kafka</span>
        <span class="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs mr-2 mb-2">React</span>
        <span class="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs mr-2 mb-2">Github Action</span>
      </div>
      
      <ul class="mt-4 pl-5 text-gray-600 text-sm list-disc">
        <li class="mb-1">MBTI 유형별 텍스트 K-means 클러스터링, 영화 상세 데이터와 매칭</li>
        <li class="mb-1">사용자 선호 영화와 결합하여 추천 결과 생성</li>
        <li class="mb-1">CQRS 패턴을 적용한 서버 구성</li>
        <li class="mb-1">MSA 방식의 아키텍쳐쳐</li>
      </ul>
      
      <div class="mt-4 flex gap-3">
        <a href="https://github.com/MVTI-MovieAndVideo-Recommender-Platform" class="text-indigo-600 text-sm flex items-center hover:text-indigo-800">
          <span class="mr-1">Github</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <a href="#" class="text-indigo-600 text-sm flex items-center hover:text-indigo-800">
          <span class="mr-1">Detail</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
    
  </div>
</section>
</template>

<!-- 반응형을 위한 스타일 -->
<style>
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr !important;
    }
  }
</style>
