<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 print:bg-white">
    <main class="pt-0 flex-1">
      <div class="w-full bg-white font-sans text-slate-800 flex justify-center px-4 py-8 print:px-0 print:py-0">
        <div class="max-w-5xl w-full rounded-xl overflow-hidden flex flex-col print:max-w-none print:rounded-none">

          <!-- Page 1: Profile + Contact -->
          <div class="page bg-white p-8 mx-4 print:shadow-none print:mx-0 print:mb-0 print:rounded-none">
            <!-- 프로필 섹션 -->
            <div class="mb-8">
              <Profile :name="name" :jobTitle="jobTitle" :profileImage="profileImage" />
            </div>
            <!-- 연락처 정보 -->
            <div class="mb-8">
              <Contact/>
            </div>
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-blue-600 relative">
                Skills
                <span class="absolute bottom-0 left-0 w-16 bg-blue-400 transform"></span>
              </h2>
              <Skills />
            </div>
          </div>

          <!-- Page 3: Certification, Education, Experience, Prize -->
          <div class="page p-4 md:p-8 print:p-8">
            <div class="print-grid">
              <div class="section-block">
                <h2 class="section-title">교육</h2>
                <Education />
              </div>
              <div class="section-block">
                <h2 class="section-title">자격증</h2>
                <Certification />
              </div>
              <div class="section-block">
                <h2 class="section-title">대외활동</h2>
                <Experience />
              </div>
              <div class="section-block">
                <h2 class="section-title">수상 경력</h2>
                <Prize />
              </div>
            </div>
          </div>

          <!-- Page 4: Projects -->
          <div class="page p-8 md:p-12 print:hidden">
            <div class="mb-8">
              <h2 class="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-blue-600 relative">
                프로젝트
                <span class="absolute bottom-0 left-0 w-16 bg-blue-400 transform"></span>
              </h2>
            </div>
            <Project />
          </div>

          
           <!-- Page 5: Projects Detail-->
          <div class="page p-8 md:p-12 print:p-8">
            <MVTI />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Project       from '@/components/projectComponent.vue'
import Skills        from '@/components/skillsComponent.vue'
import Certification from '@/components/certificatedComponent.vue'
import Education     from '@/components/educationComponent.vue'
import Experience    from '@/components/experienceComponent.vue'
import Prize         from '@/components/prizeComponent.vue'
import Contact       from '@/components/contactComponent.vue'
import MVTI from '@/components/MVTIComponent.vue'
import Profile from '@/components/ProfileComponent.vue'
import { ref } from 'vue'

const name = 'Jang Bo Gwang'
const jobTitle = 'AI Backend Developer'
import profileImage from '@/assets/image/profile.jpg'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400;0,600;1,400&display=swap');

/* A4 페이지 분리 */
.page {
  min-height: auto;
  page-break-after: always;
  padding-bottom: 0.5rem;
}

.page:last-child {
  page-break-after: auto !important;
}

/* Profile Section */
.profile-section {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #2563eb;
}
.profile-image {
  width: 7rem;
  height: 10rem;
  border-radius: 20%;
  object-fit: cover;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 4px solid white;
}
.profile-info {
  grid-column: 2;
  text-align: left;
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.contact-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  background-color: #f8fafc;
  border-radius: 0.5rem;
  border-left: 4px solid #2563eb;
}
.contact-icon {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #2563eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.grid-section {
  display: grid;
  gap: 2rem;
}

/* 제목 스타일 통일 */
.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 0.5rem;
}


.section-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px; /* 필요 시 더 조절 가능 */
}

.print-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* 각 블록(카드)을 문서 스타일로 정리 */
.section-block {
  padding: 1.25rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.entry-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.entry-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.entry-text {
  display: flex;
  flex-direction: column;
}

.entry-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: #111827;
}

.entry-sub {
  font-size: 0.85rem;
  color: #6b7280;
}

.entry-date {
  font-size: 0.8rem;
  white-space: nowrap;
  background: #1f2937;
  color: white;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  height: fit-content;
}
/* ===========================
   프로젝트 섹션 스타일
   =========================== */
   

/* ===========================
   PDF & Print 최적화
   =========================== */
@media print {
  /* 기존 인쇄 설정 */
  .no-print { display: none !important; }
  body, html { background: white !important; color: black !important; }
  .page { page-break-after: always; break-after: page; }

  /* 모든 주요 그리드에 display: grid 재적용 */
  .profile-section,
  .contact-grid,
  .content-grid,
  .skills-grid,
  .grid-section {
    display: grid !important;
  }

  /* 각 그리드 레이아웃 강제 */
  .profile-section {
    grid-template-columns: auto 1fr !important;
  }
  .content-grid {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1rem !important;
  }
  .content-grid,
  .grid-section {
    grid-template-columns: 1fr 1fr !important;
    gap: 2rem !important;
  }
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
    gap: 1rem !important;
  }

  /* 태그 그리드도 강제 유지 */
  .skill-tags {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(60px, auto)) !important;
    gap: 0.5rem !important;
  }

  .section-card {
    break-inside: avoid;
    page-break-inside: avoid;
    padding: 1rem !important;
    min-height: auto !important;
  }

    .print-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 1rem !important;
  }

  .section-block {
    padding: 0.75rem !important;
    font-size: 0.8rem !important;
    box-shadow: none !important;
  }

  .section-title {
    font-size: 1rem !important;
    margin-bottom: 0.5rem !important;
  }

  .section-block * {
    font-size: 0.8rem !important;
    line-height: 1.3 !important;
    word-break: break-word !important;
  }

   .project-card {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
    padding: 1rem !important;
    margin-bottom: 0.5rem !important;
  }

  .project-card * {
    font-size: 0.85rem !important;
    line-height: 1.4 !important;
    color: black !important;
  }

  .project-tag {
    font-size: 0.65rem !important;
    padding: 0.15rem 0.5rem !important;
    border: 1px solid #999 !important;
    background: transparent !important;
    color: #444 !important;
  }

  a {
    color: #000 !important;
    text-decoration: underline !important;
  }

  .project-tag,
  .tag,
  .badge {
    background-color: #eee !important;  /* 최소 회색 톤 유지 */
    color: #000 !important;
    border: 1px solid #999 !important;
    padding: 0.2rem 0.5rem !important;
    font-size: 0.7rem !important;
    border-radius: 9999px !important;
  }

  button,
  .btn {
    background: #ddd !important;
    color: #000 !important;
    border: 1px solid #888 !important;
    padding: 0.4rem 0.75rem !important;
    font-size: 0.8rem !important;
  }

    .contact-icon svg {
    fill: black !important;
    stroke: black !important;
    width: 1rem !important;
    height: 1rem !important;
  }

  .contact-grid {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 0.5rem !important;
  }

  .contact-card {
    all: unset;
    display: flex !important;
    gap: 0.5rem !important;
    align-items: flex-start !important;
    font-size: 0.8rem !important;
  }
}
</style>
