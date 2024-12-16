<template>
    <div class="min-h-screen w-full bg-[#FAF4EE] font-sans text-[#4B2E2E] flex justify-center py-10 px-4">
      <div class="max-w-5xl w-full rounded-xl overflow-hidden flex flex-col">
        
        <!-- 상단 프로필 섹션 -->
        <div class="flex flex-col md:flex-row p-8 md:p-12 bg-[#FBF6EF]">
          <!-- 세로로 긴 모서리가 둥근 사각형 이미지 영역 -->
          <div class="relative w-full md:w-1/3 flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <div class="overflow-hidden rounded-[20px] shadow-lg w-full h-80 relative">
              <img
                src="@/assets/image/profile.jpg"
                alt="Profile Image"
                class="w-full h-full object-cover"
              >
            </div>
          </div>
          
          <!-- 이름 및 소개 영역 -->
          <div class="flex-1 flex flex-col justify-center">
            <h1 class="font-serif text-3xl md:text-5xl font-bold text-[#4B2E2E] mb-4">
                Jang Bo Gwang
            </h1>
            <h2 class="font-serif text-2xl md:text-2xl font-bold text-[#4B2E2E] mb-4">
                WEB DEVELOPER
            </h2>
            <hr class="my-hr mt-4 mb-8">
            <p><strong>끝없이 배우고, 끊임없이 개선하며, 코드로 나아가는 성장형 개발자</strong></p>
            <p class="text-sm text-[#5E4A4A] leading-relaxed mb-4">
                
                백엔드 개발과 생성형 AI 분야에 깊은 관심을 갖고 있으며,새로운 도전을 통해 꾸준히 성장하고 있습니다.
                문제 해결에 열정적이고 새로운 기술을 적극적으로 습득하는 것을 선호합니다.
            </p>
          </div>
        </div>
        
        <!-- 연락처 정보 바 (두 줄, grid-cols-2) -->
        <div class="bg-[#4B2E2E] text-white rounded-xl p-4 mx-8 -mt-6 z-10 shadow-lg">
        <div class="grid grid-cols-2 gap-4">
            <!-- 연락처 -->
            <div class="flex items-center space-x-2">
            <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M3 5h3M4 5a2 2 0 012-2h8a2 2 0 012 2v2m4-4h-3"/>
                <path d="M3 10h18M3 10a2 2 0 012-2h14a2 
                        2 0 012 2v8a2 2 0 01-2 
                        2H5a2 2 0 01-2-2v-8z"/>
            </svg>
            <span class="text-sm">연락처: 010-5344-2695</span>
            </div>

            <!-- 이메일 -->
            <div class="flex items-center space-x-2">
            <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 
                        002.22 0L21 8"/>
                <path d="M5 19h14a2 2 0 
                        002-2V7a2 2 0 00-2-2H5a2 
                        2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span class="text-sm">이메일: wkdqhrhkd12@gmail.com</span>
            </div>

            <!-- 블로그 -->
            <div class="flex items-center space-x-2">
            <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24">
                <path d="M16 8c0-2.21-1.79-4-4-4S8 
                        5.79 8 8s1.79 4 4 4 4-1.79 
                        4-4zM12 14c-4.418 0-8 
                        1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/>
            </svg>
            <a href="https://growingegg.tistory.com/" target="_blank" rel="noopener noreferrer" class="text-sm underline">
                블로그: https://growingegg.tistory.com/
            </a>
            </div>

            <!-- 깃허브 -->
            <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M16 18l6-6-6-6M8 6l-6 6 
                        6 6"/>
            </svg>
            <a href="https://github.com/JangBogwang" target="_blank" rel="noopener noreferrer" class="text-sm underline">
                Github: https://github.com/JangBogwang
            </a>
            </div>
        </div>
        </div>

        <!-- 아래 나머지 콘텐츠 -->
        <div class="p-8 md:p-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Education & Experience (오른쪽 컬럼) -->
            <div>
              <!-- 인적사항 -->
              <div class="mb-8">
                  <h4 class="font-serif text-xl text-[#4B2E2E] font-bold border-b border-[#D9CBB6] pb-2 mb-4">Information</h4>
                  <ul class="space-y-4 text-gray-700 leading-relaxed">
                      <!-- 생년월일 -->
                      <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#4B2E2E] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10m4 5a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h14a2 2 0 012 2v6z" />
                          </svg>
                          <span class="font-medium text-gray-800">생년월일 : 1997.11.07</span> 
                      </li>
                      
                      <!-- MBTI -->
                      <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#4B2E2E] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4H9m4 0h2v-2a1 1 0 10-2 0v2zM3 20h12a1 1 0 001-1v-9a1 1 0 00-1-1H3a1 1 0 00-1 1v9a1 1 0 001 1zm3-10V6a3 3 0 016 0v4" />
                          </svg>
                          <span class="font-medium text-gray-800">MBTI : INTP</span> 
                      </li>
                      
                      <!-- 취미 -->
                      <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#4B2E2E] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20l9-5-9-5-9 5 9 5zm0-10l9-5-9-5-9 5 9 5z" />
                          </svg>
                          <span class="font-medium text-gray-800">취미 : 독서, 글쓰기</span>
                      </li>

                      <!-- 최종학력 -->
                      <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#4B2E2E] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.42c.448-.248.84-.722.84-1.24s-.392-.992-.84-1.24L12 6M12 14v5m0 0H9m3 0h3" />
                          </svg>
                          <span class="font-medium text-gray-800">최종학력 : 한양대학교 융합전자공학부 학사(졸업)</span>
                      </li>

                      <!-- 거주지 -->
                      <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#4B2E2E] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 9.4c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5S9.515 4.9 12 4.9s4.5 2.015 4.5 4.5zm0 0V21h-9V9.4" />
                          </svg>
                          <span class="font-medium text-gray-800">거주지 : 서울특별시</span>
                      </li>
                  </ul>
              </div>



              <!-- Education -->
              <div>
                  <h4 class="font-serif text-xl text-[#4B2E2E] font-bold border-b border-[#D9CBB6] pb-2 mb-4">Education</h4>
                  
                  <!-- 한양대학교 -->
                  <div class="flex justify-between items-start mb-6">
                      <div>
                          <h5 class="font-bold text-[#4B2E2E] text-lg">한양대학교 융합전자공학부</h5>
                          <p class="text-sm text-[#5E4A4A] mt-1">전자공학과 컴퓨터 과학의 전공 역량 습득</p>
                      </div>
                      <div class="bg-[#4B2E2E] text-white text-sm font-medium px-4 py-1 rounded-full">
                          2016.03 - 2023.02
                      </div>
                  </div>

                  <!-- LG 헬로비전 -->
                  <div class="flex justify-between items-start mb-6">
                      <div>
                          <h5 class="font-bold text-[#4B2E2E] text-lg">LG 헬로비전 DX Data School 2기</h5>
                          <p class="text-sm text-[#5E4A4A] mt-1">데이터 분석 및 PYTHON 웹 개발 교육 과정</p>
                      </div>
                      <div class="bg-[#4B2E2E] text-white text-sm font-medium px-4 py-1 rounded-full">
                          2023.12 - 2024.06
                      </div>
                  </div>

                  <!-- SSAFY -->
                  <div class="flex justify-between items-start">
                      <div>
                          <h5 class="font-bold text-[#4B2E2E] text-lg">SSAFY 12기</h5>
                          <p class="text-sm text-[#5E4A4A] mt-1">종합 소프트웨어 역량 강화를 위한 교육 과정</p>
                      </div>
                      <div class="bg-[#4B2E2E] text-white text-sm font-medium px-4 py-1 rounded-full">
                          2024.07 - 진행 중
                      </div>
                  </div>
              </div>


            </div>

            <!-- Skills & Languages & Reference (왼쪽 컬럼) -->
            <div>
              <!-- Skills -->
              <div class="mb-8">
                  <h4 class="font-serif text-xl text-[#4B2E2E] font-bold border-b border-[#D9CBB6] pb-2 mb-4">Skills</h4>

                  <!-- 프로그래밍 언어 -->
                  <div class="mb-6">
                      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-3">언어 (Language)</h5>
                      <div class="flex flex-col space-y-4">
                          <div class="flex items-center space-x-4">
                              <img src="@/assets/icons/java.png" alt="Java Logo" class="w-8 h-8">
                              <div>
                                  <h6 class="font-bold text-base">Java</h6>
                                  <p class="text-sm text-gray-700">Backend, Spring Boot 개발 경험.<br> jpa를 통한 DB 쿼리 구현 가능</p>
                              </div>
                          </div>
                          <div class="flex items-center space-x-4">
                              <img src="@/assets/icons/python.png" alt="Python Logo" class="w-8 h-8">
                              <div>
                                  <h6 class="font-bold text-base">Python</h6>
                                  <p class="text-sm text-gray-700">FastAPI 서버 개발, 데이터 크롤링 코드 개발 경험</p>
                              </div>
                          </div>
                          <div class="flex items-center space-x-4">
                              <img src="@/assets/icons/c.png" alt="Java Logo" class="w-8 h-8">
                              <div>
                                  <h6 class="font-bold text-base">C언어</h6>
                                  <p class="text-sm text-gray-700">AVR 보드를 활용한 하드웨어 제어 경험</p>
                              </div>
                          </div>
                          <div class="flex items-center space-x-4">
                              <img src="@/assets/icons/javascript.png" alt="JavaScript Logo" class="w-8 h-8">
                              <div>
                                  <h6 class="font-bold text-base">JavaScript</h6>
                                  <p class="text-sm text-gray-700">Vue.js, Node.js 등 개발.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!-- 프레임워크 -->
                  <div class="mb-6">
                      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-3">프레임워크 (Framework)</h5>
                      <div class="flex flex-col space-y-4">
                          <div class="flex items-center space-x-4">
                              <img src="@/assets/icons/spring.png" alt="Spring Logo" class="w-8 h-8">
                              <div>
                                  <h6 class="font-bold text-base">Spring Boot</h6>
                                  <p class="text-sm text-gray-700">CRUD와 JWT 인증을 구현한 Backend 서버 구현</p>
                                  <p class="text-sm text-gray-700">MyBatis와 JPA를 활용한 백엔드 기능 구현 가능</p>
                              </div>
                          </div>
                          <div class="flex items-center space-x-4">
                              <img src="@/assets/icons/vue.png" alt="Vue.js Logo" class="w-8 h-8">
                              <div>
                                  <h6 class="font-bold text-base">Vue.js</h6>
                                  <p class="text-sm text-gray-700">컴포넌트 개념에 대한 이해 및 개발 가능.</p>
                                  <p class="text-sm text-gray-700">Vue와 Vue-Router를 활용한 소규모 프로젝트 진행 가능</p>
                              </div>
                          </div>
                          <div class="flex items-center space-x-4">
                              <img src="@/assets/icons/fastapi.png" alt="FastAPI Logo" class="w-8 h-8">
                              <div>
                                  <h6 class="font-bold text-base">FastAPI</h6>
                                  <p class="text-sm text-gray-700">비동기 서버 구현 경험</p>
                                  <p class="text-sm text-gray-700">머신러닝 추천 서버 및 생성형 AI를 활용한 챗봇 서버 개발 경험</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!-- 데이터베이스 -->
                  <div class="mb-6">
                      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-3">데이터베이스 (Database)</h5>
                      <div class="flex flex-col space-y-4">
                          <div class="flex items-center space-x-4">
                              <img src="@/assets/icons/mysql.png" alt="MySQL Logo" class="w-8 h-8">
                              <div>
                                  <h6 class="font-bold text-base">MySQL</h6>
                                  <p class="text-sm text-gray-700">기본 SQL 활용 가능</p>
                              </div>
                          </div>
                          <div class="flex items-center space-x-4">
                              <img src="@/assets/icons/mongodb.png" alt="MongoDB Logo" class="w-8 h-8">
                              <div>
                                  <h6 class="font-bold text-base">MongoDB</h6>
                                  <p class="text-sm text-gray-700">비정형 데이터 활용</p>
                                  <p class="text-sm text-gray-700">JPA를 활용한 MongoDB 데이터 조회</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!-- 기타 -->
                  <div class="mb-6">
                      <h5 class="text-lg font-semibold text-[#4B2E2E] mb-3">기타 (Others)</h5>
                      <div class="flex flex-col space-y-4">
                          <div class="flex items-center space-x-4">
                              <img src="@/assets/icons/git.png" alt="Git Logo" class="w-8 h-8">
                              <div>
                                  <h6 class="font-bold text-base">Git</h6>
                                  <p class="text-sm text-gray-700">협업, 브랜치 관리, Github Action을 활용한 CI/CD</p>
                              </div>
                          </div>
                          <div class="flex items-center space-x-4">
                              <img src="@/assets/icons/docker.png" alt="Docker Logo" class="w-8 h-8">
                              <div>
                                  <h6 class="font-bold text-base">Docker</h6>
                                  <p class="text-sm text-gray-700">컨테이너화, 배포 자동화</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>    
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional setup needed
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400;0,600;1,400&display=swap');
  
  .font-serif {
    font-family: 'Libre Bodoni', serif;
  }

  .my-hr {
    border: 0;
    height: 3px;
    background-color: #4B2E2E;
  }
  </style>
