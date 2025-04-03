<template>
    <div class="min-h-screen w-full bg-[#FAF4EE] font-sans text-[#4B2E2E] flex justify-center py-10 px-4">
      <div class="max-w-5xl w-full rounded-xl overflow-hidden flex flex-col">
        
        
        <!-- 연락처 정보 바 (두 줄, grid-cols-2) -->
        <div class="bg-[#4B2E2E] text-white rounded-xl p-4 mx-8 mt-8 z-10 shadow-lg">
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

                      <!-- 알고리즘 -->
                      <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#4B2E2E] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h3.28c.75 0 1.46.31 1.96.84L12 7l2.76-3.16A2.75 2.75 0 0116.72 3H20a1 1 0 011 1v5.28c0 .75-.31 1.46-.84 1.96L17 12l3.16 2.76c.53.5.84 1.21.84 1.96V20a1 1 0 01-1 1h-3.28c-.75 0-1.46-.31-1.96-.84L12 17l-2.76 3.16A2.75 2.75 0 017.28 21H4a1 1 0 01-1-1v-3.28c0-.75.31-1.46.84-1.96L7 12 3.84 9.24A2.75 2.75 0 013 7.28V4z" />
                          </svg>
                          <span class="font-medium text-gray-800">관심 분야: 웹 개발, 생성형 AI</span> 
                      </li>
                  </ul>
              </div>



              <!-- Authentication -->
              <div >
                  <h4 class="font-serif text-xl text-[#4B2E2E] font-bold border-b border-[#D9CBB6] pb-2 mb-4 mt-3">어학 & 자격</h4>  
                  <!-- 영어 -->
                  <div class="flex justify-between items-start mb-6">
                      <div>
                          <h5 class="font-bold text-[#4B2E2E] text-lg">TOEIC Speaking</h5>
                          <p class="text-sm text-[#5E4A4A] mt-1">등급: IM3 (130점)</p>
                      </div>
                      <div class="bg-[#4B2E2E] text-white text-sm font-medium px-4 py-1 rounded-full">
                          2025.03.11 취득
                      </div>
                  </div>

                  <div class="flex justify-between items-start mb-6">
                      <div>
                          <h5 class="font-bold text-[#4B2E2E] text-lg">정보처리기사</h5>
                          <p class="text-sm text-[#5E4A4A] mt-1">한국산업인력공단</p>
                      </div>
                      <div class="bg-[#4B2E2E] text-white text-sm font-medium px-4 py-1 rounded-full">
                          2024.09.10 취득
                      </div>
                  </div>

                  <div class="flex justify-between items-start mb-6">
                      <div>
                          <h5 class="font-bold text-[#4B2E2E] text-lg">SQL개발자(SQLD)</h5>
                          <p class="text-sm text-[#5E4A4A] mt-1">한국데이터산업진흥원</p>
                      </div>
                      <div class="bg-[#4B2E2E] text-white text-sm font-medium px-4 py-1 rounded-full">
                          2025.04.05 취득
                      </div>
                  </div>

                  <div class="flex justify-between items-start mb-6">
                      <div>
                          <h5 class="font-bold text-[#4B2E2E] text-lg">ADsP(데이터분석준전문가)</h5>
                          <p class="text-sm text-[#5E4A4A] mt-1">한국데이터산업진흥원</p>
                      </div>
                      <div class="bg-[#4B2E2E] text-white text-sm font-medium px-4 py-1 rounded-full">
                          2025.03.22 취득
                      </div>
                  </div>

                  <div class="flex justify-between items-start mb-6">
                      <div>
                          <h5 class="font-bold text-[#4B2E2E] text-lg">SW 역량테스트 B형</h5>
                          <p class="text-sm text-[#5E4A4A] mt-1">삼성</p>
                      </div>
                      <div class="bg-[#4B2E2E] text-white text-sm font-medium px-4 py-1 rounded-full">
                          2024.09.21 취득
                      </div>
                  </div>
              </div>

              <!-- Education -->
              <div >
                  <h4 class="font-serif text-xl text-[#4B2E2E] font-bold border-b border-[#D9CBB6] pb-2 mb-4 mt-3">Education</h4>
                  
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
              <div class="mb-8 skills-container">
                    <h4 class="font-serif text-xl text-[#4B2E2E] font-bold border-b border-[#D9CBB6] pb-2 mb-4">Skills</h4>
                    <!-- 카테고리별 스킬 -->
                    <div class="space-y-6">
                        <!-- 프로그래밍 언어 -->
                        <div>
                        <h5 class="text-lg font-semibold text-[#4B2E2E] mb-3">언어 (Language)</h5>
                        <div class="grid grid-cols-1 gap-3">
                            <div class="skill-item">
                            <img src="@/assets/icons/java.png" alt="Java" class="w-6 h-6">
                            <div>
                                <h6 class="font-bold">Java</h6>
                                <p class="text-sm text-gray-700">Backend, Spring Boot 개발, JPA 쿼리 구현</p>
                            </div>
                            </div>
                            <div class="skill-item">
                            <img src="@/assets/icons/python.png" alt="Python" class="w-6 h-6">
                            <div>
                                <h6 class="font-bold">Python</h6>
                                <p class="text-sm text-gray-700">FastAPI 서버 개발, 데이터 크롤링</p>
                            </div>
                            </div>
                            <div class="skill-item">
                            <img src="@/assets/icons/c.png" alt="C" class="w-6 h-6">
                            <div>
                                <h6 class="font-bold">C언어</h6>
                                <p class="text-sm text-gray-700">AVR 보드 하드웨어 제어</p>
                            </div>
                            </div>
                            <div class="skill-item">
                            <img src="@/assets/icons/javascript.png" alt="JavaScript" class="w-6 h-6">
                            <div>
                                <h6 class="font-bold">JavaScript</h6>
                                <p class="text-sm text-gray-700">Vue.js, Node.js 개발</p>
                            </div>
                            </div>
                        </div>
                        </div>

                        <!-- 프레임워크 -->
                        <div>
                        <h5 class="text-lg font-semibold text-[#4B2E2E] mb-3">프레임워크 (Framework)</h5>
                        <div class="grid grid-cols-1 gap-3">
                            <div class="skill-item">
                            <img src="@/assets/icons/spring.png" alt="Spring" class="w-6 h-6">
                            <div>
                                <h6 class="font-bold">Spring Boot</h6>
                                <p class="text-sm text-gray-700">CRUD/JWT 인증 구현, MyBatis/JPA 활용</p>
                            </div>
                            </div>
                            <div class="skill-item">
                            <img src="@/assets/icons/vue.png" alt="Vue.js" class="w-6 h-6">
                            <div>
                                <h6 class="font-bold">Vue.js</h6>
                                <p class="text-sm text-gray-700">컴포넌트 기반 개발, Vue-Router 활용</p>
                            </div>
                            </div>
                            <div class="skill-item">
                            <img src="@/assets/icons/fastapi.png" alt="FastAPI" class="w-6 h-6">
                            <div>
                                <h6 class="font-bold">FastAPI</h6>
                                <p class="text-sm text-gray-700">비동기 서버, ML 추천/생성형 AI 챗봇 서버 개발</p>
                            </div>
                            </div>
                        </div>
                        </div>

                        <!-- 데이터베이스 + 기타 툴 (통합) -->
                        <div>
                        <h5 class="text-lg font-semibold text-[#4B2E2E] mb-3">DB & 개발 도구</h5>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="skill-item">
                            <img src="@/assets/icons/mysql.png" alt="MySQL" class="w-6 h-6">
                            <div>
                                <h6 class="font-bold">MySQL</h6>
                                <p class="text-sm text-gray-700">기본 SQL 활용</p>
                            </div>
                            </div>
                            <div class="skill-item">
                            <img src="@/assets/icons/mongodb.png" alt="MongoDB" class="w-6 h-6">
                            <div>
                                <h6 class="font-bold">MongoDB</h6>
                                <p class="text-sm text-gray-700">비정형 데이터/JPA 활용</p>
                            </div>
                            </div>
                            <div class="skill-item">
                            <img src="@/assets/icons/git.png" alt="Git" class="w-6 h-6">
                            <div>
                                <h6 class="font-bold">Git</h6>
                                <p class="text-sm text-gray-700">협업, CI/CD</p>
                            </div>
                            </div>
                            <div class="skill-item">
                            <img src="@/assets/icons/docker.png" alt="Docker" class="w-6 h-6">
                            <div>
                                <h6 class="font-bold">Docker</h6>
                                <p class="text-sm text-gray-700">컨테이너화, 배포</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <!-- Education -->
              <div >
                  <h4 class="font-serif text-xl text-[#4B2E2E] font-bold border-b border-[#D9CBB6] pb-2 mb-4 mt-8">대외활동</h4>
                  
                  <!-- 한양대학교 -->
                  <div class="flex justify-between items-start mb-6">
                      <div>
                          <h5 class="font-bold text-[#4B2E2E] text-lg">한양대학교 학술동아리 바라미</h5>
                          <p class="text-sm text-[#5E4A4A] mt-1">전자공학 학술 활동, 정기 세미나 및 작품 전시</p>
                      </div>
                      <div class="bg-[#4B2E2E] text-white text-sm font-medium px-4 py-1 rounded-full">
                          2016.03 - 2022.12
                      </div>
                  </div>

                  <!-- LG 헬로비전 -->
                  <div class="flex justify-between items-start mb-6">
                      <div>
                          <h5 class="font-bold text-[#4B2E2E] text-lg">한양학술타운</h5>
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

  .skill-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.skill-item h6 {
  font-size: 0.95rem;
  margin: 0;
}

.skill-item p {
  margin: 0;
}
  </style>
