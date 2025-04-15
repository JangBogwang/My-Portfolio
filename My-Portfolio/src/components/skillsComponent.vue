<template>
<!-- Skills -->
<div class="mb-10 skills-container">
  <h4 class="font-serif text-2xl text-[#3A3A3A] font-bold border-b-2 border-[#8B6E5E] pb-3 mb-6">Skills</h4>
  
  <!-- 카테고리별 스킬 -->
  <div class="space-y-8">
    <!-- 프로그래밍 언어 -->
    <div>
      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-4 flex items-center">
        <span class="w-1 h-6 bg-[#8B6E5E] mr-2"></span>
        언어 (Language)
      </h5>
      <div class="flex flex-wrap gap-3 mb-4">
        <div class="skill-badge px-5 py-2 bg-[#4B2E2E] text-white rounded-lg shadow-sm">
          <span class="font-medium">Java</span>
        </div>
        <div class="skill-badge px-5 py-2 bg-[#4B2E2E] text-white rounded-lg shadow-sm">
          <span class="font-medium">Python</span>
        </div>
        <div class="skill-badge px-5 py-2 bg-[#4B2E2E] text-white rounded-lg shadow-sm">
          <span class="font-medium">C언어</span>
        </div>
        <div class="skill-badge px-5 py-2 bg-[#4B2E2E] text-white rounded-lg shadow-sm">
          <span class="font-medium">JavaScript</span>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#4B2E2E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">Java</h6>
          <p class="text-sm text-gray-700">알고리즘(백준 플레티넘, SW역량테스트 B형), 자바 OOP 개념에 대한 이해</p>
        </div>
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#4B2E2E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">Python</h6>
          <p class="text-sm text-gray-700">데이터 분석 및 크롤링 진행, AI 프로젝트 경험</p>
        </div>
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#4B2E2E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">C언어</h6>
          <p class="text-sm text-gray-700">자료구조 및 알고리즘 구현, 포인터와 메모리 관리 이해</p>
        </div>
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#4B2E2E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">JavaScript</h6>
          <p class="text-sm text-gray-700">웹 프론트엔드 개발, DOM 조작, 비동기 프로그래밍 이해</p>
        </div>
      </div>
    </div>

    <!-- 프레임워크 -->
    <div>
      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-4 flex items-center">
        <span class="w-1 h-6 bg-[#8B6E5E] mr-2"></span>
        프레임워크 (Framework)
      </h5>
      <div class="flex flex-wrap gap-3 mb-4">
        <div class="skill-badge px-5 py-2 bg-[#5A3E2E] text-white rounded-lg shadow-sm">
          <span class="font-medium">Spring Boot</span>
        </div>
        <div class="skill-badge px-5 py-2 bg-[#5A3E2E] text-white rounded-lg shadow-sm">
          <span class="font-medium">Vue.js</span>
        </div>
        <div class="skill-badge px-5 py-2 bg-[#5A3E2E] text-white rounded-lg shadow-sm">
          <span class="font-medium">FastAPI</span>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#5A3E2E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">Spring Boot</h6>
          <p class="text-sm text-gray-700">CRUD/JWT 인증 구현, MyBatis/JPA 활용, 프로젝트 3회 진행</p>
        </div>
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#5A3E2E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">Vue.js</h6>
          <p class="text-sm text-gray-700">컴포넌트 기반 UI 개발, Vuex 상태관리, SPA 구현 경험</p>
        </div>
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#5A3E2E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">FastAPI</h6>
          <p class="text-sm text-gray-700">ORM 활용, webSocket 통신, LLM 활용 프로젝트 진행, 활용 프로젝트 4회</p>
        </div>
      </div>
    </div>

    <!-- 데이터베이스 -->
    <div>
      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-4 flex items-center">
        <span class="w-1 h-6 bg-[#8B6E5E] mr-2"></span>
        DB & 개발 도구
      </h5>
      <div class="flex flex-wrap gap-3 mb-4">
        <div class="skill-badge px-5 py-2 bg-[#6A4E3E] text-white rounded-lg shadow-sm">
          <span class="font-medium">MySQL</span>
        </div>
        <div class="skill-badge px-5 py-2 bg-[#6A4E3E] text-white rounded-lg shadow-sm">
          <span class="font-medium">MongoDB</span>
        </div>
        <div class="skill-badge px-5 py-2 bg-[#6A4E3E] text-white rounded-lg shadow-sm">
          <span class="font-medium">PostgreSQL</span>
        </div>
        <div class="skill-badge px-5 py-2 bg-[#6A4E3E] text-white rounded-lg shadow-sm">
          <span class="font-medium">Redis</span>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#6A4E3E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">MySQL</h6>
          <p class="text-sm text-gray-700">관계형 데이터베이스 설계, 쿼리 최적화, 인덱싱 전략 구현</p>
        </div>
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#6A4E3E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">MongoDB</h6>
          <p class="text-sm text-gray-700">NoSQL 데이터베이스 활용, 비정형 데이터 처리, 애그리게이션 파이프라인 구현</p>
        </div>
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#6A4E3E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">PostgreSQL</h6>
          <p class="text-sm text-gray-700">지리 정보 데이터 처리, JSON 데이터 활용, 고급 쿼리 기능 구현</p>
        </div>
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#6A4E3E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">Redis</h6>
          <p class="text-sm text-gray-700">인메모리 캐싱, 세션 관리, 메시지 큐 구현, 실시간 데이터 처리</p>
        </div>
      </div>
    </div>

    <!-- 인프라 -->
    <div>
      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-4 flex items-center">
        <span class="w-1 h-6 bg-[#8B6E5E] mr-2"></span>
        인프라
      </h5>
      <div class="flex flex-wrap gap-3 mb-4">
        <div class="skill-badge px-5 py-2 bg-[#7A5E4E] text-white rounded-lg shadow-sm">
          <span class="font-medium">Docker</span>
        </div>
        <div class="skill-badge px-5 py-2 bg-[#7A5E4E] text-white rounded-lg shadow-sm">
          <span class="font-medium">GitLab</span>
        </div>
        <div class="skill-badge px-5 py-2 bg-[#7A5E4E] text-white rounded-lg shadow-sm">
          <span class="font-medium">AWS</span>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#7A5E4E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">Docker</h6>
          <p class="text-sm text-gray-700">컨테이너화된 애플리케이션 관리, Docker Compose 활용 서버 구축</p>
        </div>
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#7A5E4E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">GitLab</h6>
          <p class="text-sm text-gray-700">GitLab CI/CD 파이프라인 구축, 자동화된 빌드 및 배포 시스템 구성</p>
        </div>
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#7A5E4E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">AWS</h6>
          <p class="text-sm text-gray-700">EC2 인스턴스 관리, S3 스토리지 활용, RDS 데이터베이스 운영, 프로젝트 배포 경험</p>
        </div>
      </div>
    </div>

    <!-- 협업 -->
    <div>
      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-4 flex items-center">
        <span class="w-1 h-6 bg-[#8B6E5E] mr-2"></span>
        협업
      </h5>
      <div class="flex flex-wrap gap-3 mb-4">
        <div class="skill-badge px-5 py-2 bg-[#7A5E4E] text-white rounded-lg shadow-sm">
          <span class="font-medium">Jira</span>
        </div>
        <div class="skill-badge px-5 py-2 bg-[#7A5E4E] text-white rounded-lg shadow-sm">
          <span class="font-medium">Git</span>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#7A5E4E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">Jira</h6>
          <p class="text-sm text-gray-700">애자일 방법론 기반 이슈 관리, 스프린트 계획 및 진행, 워크플로우 최적화</p>
        </div>
        <div class="p-4 bg-[#F8F5F0] rounded-lg border-l-4 border-[#7A5E4E] shadow-sm">
          <h6 class="font-bold text-[#4B2E2E] mb-1">Git</h6>
          <p class="text-sm text-gray-700">Git Flow 브랜치 전략 활용, 코드 리뷰 진행, 버전 관리 및 협업 경험</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>