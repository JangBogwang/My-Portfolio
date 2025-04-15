<template>
<!-- Skills -->
<div class="mb-8 skills-container">
  <h4 class="font-serif text-xl text-[#4B2E2E] font-bold border-b border-[#D9CBB6] pb-2 mb-4">Skills</h4>
  
  <!-- 카테고리별 스킬 -->
  <div class="space-y-6">
    <!-- 프로그래밍 언어 -->
    <div>
      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-3">언어 (Language)</h5>
      <div class="flex flex-wrap gap-3">
        <div class="skill-badge flex items-center px-4 py-2 bg-[#4B2E2E] text-white rounded-full">
          <span class="font-medium">Java</span>
        </div>
        <div class="skill-badge flex items-center px-4 py-2 bg-[#4B2E2E] text-white rounded-full">
          <span class="font-medium">Python</span>
        </div>
        <div class="skill-badge flex items-center px-4 py-2 bg-[#4B2E2E] text-white rounded-full">
          <span class="font-medium">C언어</span>
        </div>
        <div class="skill-badge flex items-center px-4 py-2 bg-[#4B2E2E] text-white rounded-full">
          <span class="font-medium">JavaScript</span>
        </div>
      </div>
      
      <div class="mt-3 space-y-2">
        <div class="p-3 bg-[#F7F3EB] rounded-md border-l-4 border-[#4B2E2E]">
          <h6 class="font-bold text-[#4B2E2E]">Java</h6>
          <p class="text-sm text-gray-700">알고리즘(백준 플레티넘, SW역량테스트 B형), 자바 OOP 개념에 대한 이해</p>
        </div>
        <div class="p-3 bg-[#F7F3EB] rounded-md border-l-4 border-[#4B2E2E]">
          <h6 class="font-bold text-[#4B2E2E]">Python</h6>
          <p class="text-sm text-gray-700">데이터 분석 및 크롤링 진행, AI 프로젝트 경험</p>
        </div>
      </div>
    </div>

    <!-- 프레임워크 -->
    <div>
      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-3">프레임워크 (Framework)</h5>
      <div class="flex flex-wrap gap-3">
        <div class="skill-badge flex items-center px-4 py-2 bg-[#6B4E3E] text-white rounded-full">
          <span class="font-medium">Spring Boot</span>
        </div>
        <div class="skill-badge flex items-center px-4 py-2 bg-[#6B4E3E] text-white rounded-full">
          <span class="font-medium">Vue.js</span>
        </div>
        <div class="skill-badge flex items-center px-4 py-2 bg-[#6B4E3E] text-white rounded-full">
          <span class="font-medium">FastAPI</span>
        </div>
      </div>
      
      <div class="mt-3 space-y-2">
        <div class="p-3 bg-[#F7F3EB] rounded-md border-l-4 border-[#6B4E3E]">
          <h6 class="font-bold text-[#4B2E2E]">Spring Boot</h6>
          <p class="text-sm text-gray-700">CRUD/JWT 인증 구현, MyBatis/JPA 활용, 프로젝트 3회 진행</p>
        </div>
        <div class="p-3 bg-[#F7F3EB] rounded-md border-l-4 border-[#6B4E3E]">
          <h6 class="font-bold text-[#4B2E2E]">FastAPI</h6>
          <p class="text-sm text-gray-700">ORM 활용, webSocket 통신, LLM 활용 프로젝트 진행, 활용 프로젝트 4회회</p>
        </div>
      </div>
    </div>

    <!-- 데이터베이스 -->
    <div>
      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-3">DB & 개발 도구</h5>
      <div class="flex flex-wrap gap-3">
        <div class="skill-badge flex items-center px-4 py-2 bg-[#8B6E5E] text-white rounded-full">
          <span class="font-medium">MySQL</span>
        </div>
        <div class="skill-badge flex items-center px-4 py-2 bg-[#8B6E5E] text-white rounded-full">
          <span class="font-medium">MongoDB</span>
        </div>
        <div class="skill-badge flex items-center px-4 py-2 bg-[#8B6E5E] text-white rounded-full">
          <span class="font-medium">PostgresSQL</span>
        </div>
        <div class="skill-badge flex items-center px-4 py-2 bg-[#8B6E5E] text-white rounded-full">
          <span class="font-medium">Redis</span>
        </div>
      </div>
    </div>

    <!-- 인프라 -->
    <div>
      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-3">인프라</h5>
      <div class="flex flex-wrap gap-3">
        <div class="skill-badge flex items-center px-4 py-2 bg-[#AB8E7E] text-white rounded-full">
          <span class="font-medium">Docker</span>
        </div>
        <div class="skill-badge flex items-center px-4 py-2 bg-[#AB8E7E] text-white rounded-full">
          <span class="font-medium">GitLab</span>
        </div>
        <div class="skill-badge flex items-center px-4 py-2 bg-[#AB8E7E] text-white rounded-full">
          <span class="font-medium">AWS</span>
        </div>
      </div>
      
      <div class="mt-3 space-y-2">
        <div class="p-3 bg-[#F7F3EB] rounded-md border-l-4 border-[#AB8E7E]">
          <h6 class="font-bold text-[#4B2E2E]">인프라 활용 경험</h6>
          <p class="text-sm text-gray-700">Docker compose 활용 서버 구축, GitLab CI/CD 구축, AWS EC2에 프로젝트 배포 경험</p>
        </div>
      </div>
    </div>

    <!-- 협업 -->
    <div>
      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-3">협업</h5>
      <div class="flex flex-wrap gap-3">
        <div class="skill-badge flex items-center px-4 py-2 bg-[#AB8E7E] text-white rounded-full">
          <span class="font-medium">Jira</span>
        </div>
        <div class="skill-badge flex items-center px-4 py-2 bg-[#AB8E7E] text-white rounded-full">
          <span class="font-medium">Git</span>
        </div>
      </div>
      <div class="mt-3 space-y-2">
        <div class="p-3 bg-[#F7F3EB] rounded-md border-l-4 border-[#AB8E7E]">
          <h6 class="font-bold text-[#4B2E2E]">협업</h6>
          <p class="text-sm text-gray-700">Jira 기반 이슈 관리 및 스프린트 진행, git을 활용한 프로젝트 버전 관리 및 브랜치 전략</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>