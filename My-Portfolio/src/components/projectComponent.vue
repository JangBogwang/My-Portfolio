<template>
<!-- 프로젝트 섹션 -->
<section class="mt-4">
  <h2 class="font-serif text-xl text-[#4B2E2E] font-bold border-b border-[#D9CBB6] pb-1">개발 프로젝트</h2>
  
  <!-- 프로젝트 그리드 컨테이너 -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    
    <!-- 프로젝트 1 -->
    <div class="bg-white rounded-lg shadow p-5 mt-4">
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-bold m-0 text-indigo-700">SOTORY</h3>
        <span class="bg-amber-800 text-white px-3 py-1 rounded-full text-sm">2024.03 - 2024.04</span>
      </div>
      
      <p class="mt-3 text-gray-600 text-sm">소비내역 기반 AI 다이어리 생성 및 분석 서비스</p>
      
      <div class="mt-4">
        <span class="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mr-2 mb-2">GITLAB CI/CD</span>
        <span class="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs mr-2 mb-2">Docker</span>
        <span class="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs mr-2 mb-2">SpringBoot</span>
      </div>
      
      <ul class="mt-4 pl-5 text-gray-600 text-sm list-disc">
        <li class="mb-1">gitlab ci/cd 파이프라인 구축</li>
        <li class="mb-1">ec2 환경에서 docker를 활용한 서비스 배포</li>
        <li class="mb-1">nginx, fail2ban을 활용한 보안 체계 구축</li>
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
    <div class="bg-white rounded-lg shadow p-5 mt-4">
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-bold m-0 text-indigo-700">토론 교육 플랫폼 토마톡</h3>
        <span class="bg-amber-800 text-white px-3 py-1 rounded-full text-sm">2023.10 - 2023.12</span>
      </div>
      
      <p class="mt-3 text-gray-600 text-sm">실시간 토론 및 AI를 활용한 토론 교육 플랫폼</p>
      
      <div class="mt-4">
        <span class="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs mr-2 mb-2">FastAPI</span>
        <span class="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs mr-2 mb-2">WebRTC</span>
        <span class="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs mr-2 mb-2">Whisper</span>
      </div>
      
      <ul class="mt-4 pl-5 text-gray-600 text-sm list-disc">
        <li class="mb-1">whisper 모델을 활용한 실시간 STT 기능 및 AI 요약, 피드백 기능 개발</li>
        <li class="mb-1">Jira 기반 스프린트 진행 </li>
        <li class="mb-1">spring boot에서 user API 구현</li>
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
    <div class="bg-white rounded-lg shadow p-5">
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-bold m-0 text-indigo-700">데이터 분석 대시보드</h3>
        <span class="bg-amber-800 text-white px-3 py-1 rounded-full text-sm">2023.07 - 2023.09</span>
      </div>
      
      <p class="mt-3 text-gray-600 text-sm">Python과 FastAPI를 활용한 데이터 분석 및 시각화 대시보드</p>
      
      <div class="mt-4">
        <span class="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-2 mb-2">Python</span>
        <span class="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs mr-2 mb-2">FastAPI</span>
        <span class="inline-block bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs mr-2 mb-2">Pandas</span>
      </div>
      
      <ul class="mt-4 pl-5 text-gray-600 text-sm list-disc">
        <li class="mb-1">다양한 데이터 소스에서 정보 수집 및 처리</li>
        <li class="mb-1">Pandas와 NumPy를 활용한 데이터 분석</li>
        <li class="mb-1">Chart.js를 활용한 데이터 시각화</li>
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
          <span class="mr-1">Demo</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
    
    <!-- 프로젝트 4 -->
    <div class="bg-white rounded-lg shadow p-5">
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-bold m-0 text-indigo-700">게시판 커뮤니티 웹사이트</h3>
        <span class="bg-amber-800 text-white px-3 py-1 rounded-full text-sm">2023.04 - 2023.06</span>
      </div>
      
      <p class="mt-3 text-gray-600 text-sm">Spring Boot와 JPA를 활용한 커뮤니티 게시판 서비스</p>
      
      <div class="mt-4">
        <span class="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mr-2 mb-2">Spring Boot</span>
        <span class="inline-block bg-red-100 text-red-700 px-2 py-1 rounded text-xs mr-2 mb-2">JPA</span>
        <span class="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs mr-2 mb-2">MySQL</span>
      </div>
      
      <ul class="mt-4 pl-5 text-gray-600 text-sm list-disc">
        <li class="mb-1">다중 카테고리 게시판 시스템 구현</li>
        <li class="mb-1">사용자 인증 기반 게시글 CRUD 기능</li>
        <li class="mb-1">댓글 및 대댓글 시스템 개발</li>
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
          <span class="mr-1">Demo</span>
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