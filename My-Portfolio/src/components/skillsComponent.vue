<template>
  <div>
    <!-- 기술 스택 요약 카드 -->
    <div class="skills-print-grid">
      <div
        v-for="(items, category) in skills"
        :key="category"
        class="border-l-4 p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition"
        :class="getCategoryBorderColor(category)"
        @click="openModal(category)"
      >
        <h4 class="font-semibold text-base mb-2" :class="getCategoryTextColor(category)">
          {{ modalTitleMap[category] }}
        </h4>
        <ul class="text-sm text-slate-600 space-y-1">
          <li v-for="skill in items" :key="skill.name" class="flex items-center justify-between">
            <span>{{ skill.name }}</span>
            <span class="ml-2 flex">
              <span class="dot-wrapper">
                <svg
                  v-for="i in 5"
                  :key="i"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  class="dot-svg"
                >
                  <circle
                    cx="4"
                    cy="4"
                    r="3"
                    :fill="i <= skill.level ? getCategoryColorCode(category) : '#e5e7eb'"
                    stroke="#ccc"
                    stroke-width="0.5"
                  />
                </svg>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 모달 -->
    <div v-if="modalVisible" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div class="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
        <button class="absolute top-2 right-3 text-slate-500 hover:text-slate-800" @click="closeModal">✕</button>
        <h3 class="text-lg font-bold mb-4" :class="getCategoryTextColor(currentCategory)">
          {{ modalTitleMap[currentCategory] }} 상세
        </h3>
        <ul class="space-y-2">
          <li v-for="skill in currentSkills" :key="skill.name">
            <div class="flex justify-between items-center">
              <span class="font-medium">{{ skill.name }}</span>
              <span class="flex">
                <span
                  v-for="i in 5"
                  :key="i"
                  class="w-2 h-2 rounded-full ml-1 inline-block"
                  :style="{ backgroundColor: i <= skill.level ? getCategoryColorCode(currentCategory) : '#e5e7eb' }"
                ></span>
              </span>
            </div>
            <p class="text-slate-600 text-sm mt-1">{{ skill.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsComponent',
  data() {
    return {
      modalVisible: false,
      currentCategory: '',
      modalTitleMap: {
        language: '언어 (Language)',
        framework: '프레임워크 (Framework)',
        database: '데이터베이스 (DB)',
        infrastructure: '인프라 (Infrastructure)',
        collaboration: '협업 도구 (Collaboration)'
      },
      categoryColors: {
        language: {
          text: 'text-blue-700',
          border: 'border-l-blue-500',
          dot: 'bg-blue-500'
        },
        framework: {
          text: 'text-purple-700',
          border: 'border-l-purple-500',
          dot: 'bg-purple-500'
        },
        database: {
          text: 'text-teal-700',
          border: 'border-l-teal-500',
          dot: 'bg-teal-500'
        },
        infrastructure: {
          text: 'text-orange-700',
          border: 'border-l-orange-500',
          dot: 'bg-orange-500'
        },
        collaboration: {
          text: 'text-rose-700',
          border: 'border-l-rose-500',
          dot: 'bg-rose-500'
        }
      },
      skills: {
        language: [
          { name: 'Java', level: 4, description: '알고리즘(백준 플레티넘, SW역량테스트 B형), 자바 OOP 개념에 대한 이해' },
          { name: 'Python', level: 3, description: '데이터 분석 및 크롤링 진행, AI 프로젝트 경험' },
          { name: 'C', level: 2, description: '자료구조 및 알고리즘 구현, 포인터와 메모리 관리 이해' },
          { name: 'JavaScript', level: 3, description: '웹 프론트엔드 개발, DOM 조작, 비동기 프로그래밍 이해' }
        ],
        framework: [
          { name: 'Spring Boot', level: 4, description: 'CRUD/JWT 인증 구현, MyBatis/JPA 활용' },
          { name: 'Vue.js', level: 3, description: '컴포넌트 기반 UI 개발, Vuex 상태관리' },
          { name: 'FastAPI', level: 3, description: 'ORM 활용, LLM 활용 프로젝트 진행' }
        ],
        database: [
          { name: 'MySQL', level: 3, description: '관계형 DB 설계, 쿼리 최적화' },
          { name: 'MongoDB', level: 2, description: 'NoSQL DB 활용, 비정형 데이터' },
          { name: 'PostgreSQL', level: 2, description: '지리 정보, JSON 활용' },
          { name: 'Redis', level: 2, description: '인메모리 캐싱, 세션 관리' },
          { name: 'Qdrant', level: 2, description: 'RAG 기반 LLM 구현에 활용' }
        ],
        infrastructure: [
          { name: 'Docker', level: 3, description: '컨테이너 관리, Docker compose 활용' },
          { name: 'GitLab', level: 3, description: 'CI/CD 파이프라인, EC2 배포' },
          { name: 'AWS', level: 3, description: 'EC2, S3, RDS 운영' },
          { name: 'Kafka', level: 2, description: 'MSA 서버 간 비동기 통신 구성' },
          { name: 'Nginx', level: 3, description: '리버스 프록시, https 설정, fail2ban 연동 경험' }
        ],
        collaboration: [
          { name: 'Jira', level: 4, description: '애자일 이슈 관리' },
          { name: 'Git', level: 4, description: 'Git Flow 브랜치 전략' },
          { name: 'Figma', level: 2, description: '디자인 및 차트 작성' }
        ]
      }
    };
  },
  computed: {
    currentSkills() {
      return this.skills[this.currentCategory] || [];
    }
  },
  methods: {
    openModal(category) {
      this.currentCategory = category;
      this.modalVisible = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.modalVisible = false;
      document.body.style.overflow = 'auto';
    },
    getCategoryTextColor(category) {
      return this.categoryColors[category]?.text || 'text-slate-800';
    },
    getCategoryBorderColor(category) {
      return this.categoryColors[category]?.border || 'border-l-slate-300';
    },
    getCategoryDotColor(category) {
      return this.categoryColors[category]?.dot || 'bg-gray-400';
    },
    getCategoryColorCode(category) {
      const map = {
        language: '#3b82f6',      // blue-500
        framework: '#8b5cf6',     // purple-500
        database: '#14b8a6',      // teal-500
        infrastructure: '#f97316',// orange-500
        collaboration: '#f43f5e'  // rose-500
      };
      return map[category] || '#9ca3af'; // fallback: gray-400
    }
  }
}
</script>

/* 정리된 Skills Component CSS */
<style scoped>
.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.skills-print-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.skill-card {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.skill-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-color: #cbd5e0;
}

.category-indicator.language { background-color: #3b82f6; }
.category-indicator.framework { background-color: #8b5cf6; }
.category-indicator.database { background-color: #14b8a6; }
.category-indicator.infrastructure { background-color: #f97316; }
.category-indicator.collaboration { background-color: #f43f5e; }

.category-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
}

.dot-wrapper {
  display: flex;
  gap: 2px;
  align-items: center;
}

.dot-svg {
  display: inline-block;
  vertical-align: middle;
}

/* Modal 공통 */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 50%;
  max-width: 4xl;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.modal-header,
.modal-footer {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #374151;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
}

.close-button:hover {
  color: #374151;
}

.close-modal-button {
  padding: 0.5rem 1rem;
  background: #e5e7eb;
  color: #374151;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
}

.close-modal-button:hover {
  background: #d1d5db;
}

/* 인쇄 최적화 */
@media print {
  .skills-print-grid {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 0.5rem !important;
    page-break-inside: avoid;
  }

  .skills-print-grid li {
    break-inside: avoid;
    page-break-inside: avoid;
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .dot-svg {
    width: 6px !important;
    height: 6px !important;
  }

  .modal-overlay {
    display: none !important;
  }
}
</style>
