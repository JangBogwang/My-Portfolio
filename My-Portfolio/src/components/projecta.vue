<template>
    
    
    <!-- 프로젝트 섹션 -->
<section class="projects-section" style="margin-top: 30px;">
  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 20px; color: #333; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">개발 프로젝트</h2>
  
  <!-- 프로젝트 그리드 컨테이너 -->
  <div class="projects-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
    
    <!-- 프로젝트 1 -->
    <div class="project-card" style="background-color: #fff; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); padding: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <h3 style="font-size: 18px; font-weight: bold; margin: 0;">온라인 쇼핑몰 서비스</h3>
        <span style="background-color: #5a3e2b; color: white; padding: 4px 10px; border-radius: 15px; font-size: 14px;">2024.02 - 2024.03</span>
      </div>
      
      <p style="margin-top: 10px; color: #666; font-size: 14px;">Spring Boot와 Vue.js를 활용한 온라인 쇼핑몰 서비스 개발</p>
      
      <div style="margin-top: 15px;">
        <span style="display: inline-block; background-color: #e1f5fe; color: #0277bd; padding: 3px 8px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 6px;">Spring Boot</span>
        <span style="display: inline-block; background-color: #e8f5e9; color: #2e7d32; padding: 3px 8px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 6px;">Vue.js</span>
        <span style="display: inline-block; background-color: #fff3e0; color: #e65100; padding: 3px 8px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 6px;">MySQL</span>
      </div>
      
      <ul style="margin-top: 15px; padding-left: 20px; color: #555; font-size: 14px;">
        <li style="margin-bottom: 5px;">사용자 인증 및 권한 관리 시스템 구현</li>
        <li style="margin-bottom: 5px;">상품 검색 및 필터링 기능 개발</li>
        <li style="margin-bottom: 5px;">Redis를 활용한 캐싱 시스템 적용</li>
      </ul>
      
      <div style="margin-top: 15px; display: flex; gap: 10px;">
        <a href="#" style="text-decoration: none; color: #3f51b5; font-size: 14px; display: flex; align-items: center;">
          <span style="margin-right: 5px;">Github</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <a href="#" style="text-decoration: none; color: #3f51b5; font-size: 14px; display: flex; align-items: center;">
          <span style="margin-right: 5px;">Demo</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
    
    <!-- 프로젝트 2 -->
    <div class="project-card" style="background-color: #fff; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); padding: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <h3 style="font-size: 18px; font-weight: bold; margin: 0;">실시간 채팅 애플리케이션</h3>
        <span style="background-color: #5a3e2b; color: white; padding: 4px 10px; border-radius: 15px; font-size: 14px;">2023.10 - 2023.12</span>
      </div>
      
      <p style="margin-top: 10px; color: #666; font-size: 14px;">Node.js와 Socket.io를 활용한 실시간 채팅 서비스 개발</p>
      
      <div style="margin-top: 15px;">
        <span style="display: inline-block; background-color: #f1f8e9; color: #33691e; padding: 3px 8px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 6px;">Node.js</span>
        <span style="display: inline-block; background-color: #fff8e1; color: #ff6f00; padding: 3px 8px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 6px;">Socket.io</span>
        <span style="display: inline-block; background-color: #e8eaf6; color: #303f9f; padding: 3px 8px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 6px;">MongoDB</span>
      </div>
      
      <ul style="margin-top: 15px; padding-left: 20px; color: #555; font-size: 14px;">
        <li style="margin-bottom: 5px;">실시간 메시지 전송 및 수신 기능 구현</li>
        <li style="margin-bottom: 5px;">사용자 온라인/오프라인 상태 표시</li>
        <li style="margin-bottom: 5px;">MongoDB를 활용한 메시지 저장 및 조회</li>
      </ul>
      
      <div style="margin-top: 15px; display: flex; gap: 10px;">
        <a href="#" style="text-decoration: none; color: #3f51b5; font-size: 14px; display: flex; align-items: center;">
          <span style="margin-right: 5px;">Github</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <a href="#" style="text-decoration: none; color: #3f51b5; font-size: 14px; display: flex; align-items: center;">
          <span style="margin-right: 5px;">Demo</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
    
    <!-- 프로젝트 3 -->
    <div class="project-card" style="background-color: #fff; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); padding: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <h3 style="font-size: 18px; font-weight: bold; margin: 0;">데이터 분석 대시보드</h3>
        <span style="background-color: #5a3e2b; color: white; padding: 4px 10px; border-radius: 15px; font-size: 14px;">2023.07 - 2023.09</span>
      </div>
      
      <p style="margin-top: 10px; color: #666; font-size: 14px;">Python과 FastAPI를 활용한 데이터 분석 및 시각화 대시보드</p>
      
      <div style="margin-top: 15px;">
        <span style="display: inline-block; background-color: #e3f2fd; color: #1565c0; padding: 3px 8px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 6px;">Python</span>
        <span style="display: inline-block; background-color: #f3e5f5; color: #7b1fa2; padding: 3px 8px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 6px;">FastAPI</span>
        <span style="display: inline-block; background-color: #e0f2f1; color: #00796b; padding: 3px 8px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 6px;">Pandas</span>
      </div>
      
      <ul style="margin-top: 15px; padding-left: 20px; color: #555; font-size: 14px;">
        <li style="margin-bottom: 5px;">다양한 데이터 소스에서 정보 수집 및 처리</li>
        <li style="margin-bottom: 5px;">Pandas와 NumPy를 활용한 데이터 분석</li>
        <li style="margin-bottom: 5px;">Chart.js를 활용한 데이터 시각화</li>
      </ul>
      
      <div style="margin-top: 15px; display: flex; gap: 10px;">
        <a href="#" style="text-decoration: none; color: #3f51b5; font-size: 14px; display: flex; align-items: center;">
          <span style="margin-right: 5px;">Github</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <a href="#" style="text-decoration: none; color: #3f51b5; font-size: 14px; display: flex; align-items: center;">
          <span style="margin-right: 5px;">Demo</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
    
    <!-- 프로젝트 4 -->
    <div class="project-card" style="background-color: #fff; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); padding: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <h3 style="font-size: 18px; font-weight: bold; margin: 0;">게시판 커뮤니티 웹사이트</h3>
        <span style="background-color: #5a3e2b; color: white; padding: 4px 10px; border-radius: 15px; font-size: 14px;">2023.04 - 2023.06</span>
      </div>
      
      <p style="margin-top: 10px; color: #666; font-size: 14px;">Spring Boot와 JPA를 활용한 커뮤니티 게시판 서비스</p>
      
      <div style="margin-top: 15px;">
        <span style="display: inline-block; background-color: #e1f5fe; color: #0277bd; padding: 3px 8px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 6px;">Spring Boot</span>
        <span style="display: inline-block; background-color: #ffebee; color: #c62828; padding: 3px 8px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 6px;">JPA</span>
        <span style="display: inline-block; background-color: #fff3e0; color: #e65100; padding: 3px 8px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 6px;">MySQL</span>
      </div>
      
      <ul style="margin-top: 15px; padding-left: 20px; color: #555; font-size: 14px;">
        <li style="margin-bottom: 5px;">다중 카테고리 게시판 시스템 구현</li>
        <li style="margin-bottom: 5px;">사용자 인증 기반 게시글 CRUD 기능</li>
        <li style="margin-bottom: 5px;">댓글 및 대댓글 시스템 개발</li>
      </ul>
      
      <div style="margin-top: 15px; display: flex; gap: 10px;">
        <a href="#" style="text-decoration: none; color: #3f51b5; font-size: 14px; display: flex; align-items: center;">
          <span style="margin-right: 5px;">Github</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <a href="#" style="text-decoration: none; color: #3f51b5; font-size: 14px; display: flex; align-items: center;">
          <span style="margin-right: 5px;">Demo</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
    
  </div>
  
  <!-- 반응형을 위한 스타일 -->
  <style>
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr !important;
      }
    }
  </style>
</section>
</template>