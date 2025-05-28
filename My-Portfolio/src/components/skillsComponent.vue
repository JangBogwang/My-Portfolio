<template>
  <!-- Skills Component with improved compact design -->
  <div class="skills-section">
    <div class="skills-grid">
      <!-- 언어 분야 카드 -->
      <div class="skill-card" @click="openModal('language')">
        <div class="card-header">
          <div class="category-indicator language"></div>
          <h3 class="category-title">언어 (Language)</h3>
        </div>
        <div class="skills-tags">
          <span v-for="skill in skills.language" :key="skill.name" 
                class="skill-tag blue">
            {{ skill.name }}
          </span>
        </div>
      </div>
      
      <!-- 프레임워크 분야 카드 -->
      <div class="skill-card" @click="openModal('framework')">
        <div class="card-header">
          <div class="category-indicator framework"></div>
          <h3 class="category-title">프레임워크 (Framework)</h3>
        </div>
        <div class="skills-tags">
          <span v-for="skill in skills.framework" :key="skill.name" 
                class="skill-tag purple">
            {{ skill.name }}
          </span>
        </div>
      </div>
      
      <!-- DB & 개발 도구 분야 카드 -->
      <div class="skill-card" @click="openModal('database')">
        <div class="card-header">
          <div class="category-indicator database"></div>
          <h3 class="category-title">DB & 개발 도구</h3>
        </div>
        <div class="skills-tags">
          <span v-for="skill in skills.database" :key="skill.name" 
                class="skill-tag teal">
            {{ skill.name }}
          </span>
        </div>
      </div>
      
      <!-- 인프라 분야 카드 -->
      <div class="skill-card" @click="openModal('infrastructure')">
        <div class="card-header">
          <div class="category-indicator infrastructure"></div>
          <h3 class="category-title">인프라 (Infrastructure)</h3>
        </div>
        <div class="skills-tags">
          <span v-for="skill in skills.infrastructure" :key="skill.name" 
                class="skill-tag orange">
            {{ skill.name }}
          </span>
        </div>
      </div>
      
      <!-- 협업 도구 분야 카드 -->
      <div class="skill-card" @click="openModal('collaboration')">
        <div class="card-header">
          <div class="category-indicator collaboration"></div>
          <h3 class="category-title">협업 도구</h3>
        </div>
        <div class="skills-tags">
          <span v-for="skill in skills.collaboration" :key="skill.name" 
                class="skill-tag blue">
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
      
    <!-- 모달 컴포넌트 -->
    <div v-if="modalVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">{{ modalTitle }}</h3>
          <button @click="closeModal" class="close-button">&times;</button>
        </div>
        
        <div class="modal-body">
          <div class="skills-detail-grid">
            <div v-for="skill in currentSkills" :key="skill.name" 
                class="skill-detail-card" 
                :class="[getCategoryBorderColor()]">
              <div class="skill-header">
                <h4 class="skill-name" :class="getCategoryTextColor()">{{ skill.name }}</h4>
                <div class="skill-level">
                  <div v-for="i in 5" :key="i" 
                      class="level-dot" 
                      :class="i <= skill.level ? getCategoryColor() : 'bg-gray-200'">
                  </div>
                </div>
              </div>
              <p class="skill-description">{{ skill.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="modal-footer">
          <button @click="closeModal" class="close-modal-button">
            닫기
          </button>
        </div>
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
      categoryColors: {
        language: {
          main: 'bg-blue-500',
          text: 'text-blue-700',
          border: 'border-l-blue-500'
        },
        framework: {
          main: 'bg-purple-500',
          text: 'text-purple-700',
          border: 'border-l-purple-500'
        },
        database: {
          main: 'bg-teal-500',
          text: 'text-teal-700',
          border: 'border-l-teal-500'
        },
        infrastructure: {
          main: 'bg-orange-500',
          text: 'text-orange-700',
          border: 'border-l-orange-500'
        },
        collaboration: {
          main: 'bg-blue-500',
          text: 'text-blue-700',
          border: 'border-l-blue-500'
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
          { name: 'Qdrant', level: 2, description: 'RAG 기반 LLM 구현에 활용용' }
        ],
        infrastructure: [
          { name: 'Docker', level: 3, description: '컨테이너 관리, Docker compose 활용' },
          { name: 'GitLab', level: 3, description: 'CI/CD 파이프라인, EC2 배포' },
          { name: 'AWS', level: 3, description: 'EC2, S3, RDS 운영' },
          { name: 'Kafks', level: 2, description: 'MSA 서버 간 비동기 통신 구성'},
          { name: 'Nginx', level: 3, description: '리버스 프록시, https 설정, fail2ban 연동 경험험'}
        ],
        collaboration: [
          { name: 'Jira', level: 4, description: '애자일 이슈 관리' },
          { name: 'Git', level: 4, description: 'Git Flow 브랜치 전략' },
          { name: 'Figma', level: 2, description: '디자인 및 차트 작성' },
        ]
      }
    };
  },
  computed: {
    modalTitle() {
      const titles = {
        language: '언어 (Language) 스킬',
        framework: '프레임워크 (Framework) 스킬',
        database: 'DB & 개발 도구 스킬',
        infrastructure: '인프라 (Infrastructure) 스킬',
        collaboration: '협업 도구 스킬'
      };
      return titles[this.currentCategory] || '기술 스택';
    },
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
    getCategoryColor() {
      return this.categoryColors[this.currentCategory]?.main || 'bg-gray-400';
    },
    getCategoryTextColor() {
      return this.categoryColors[this.currentCategory]?.text || 'text-gray-800';
    },
    getCategoryBorderColor() {
      return this.categoryColors[this.currentCategory]?.border || 'border-l-gray-400';
    }
  }
}
</script>

<style scoped>
/* Section Title */
.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

/* Skills Grid - Compact Layout */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* print에서도 고정 */
  gap: 1.5rem;
  margin-bottom: 2rem;
}

/* Skill Card - More Natural Design */
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

/* Card Header */
.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.category-indicator {
  width: 4px;
  height: 16px;
  border-radius: 2px;
  margin-right: 0.5rem;
}

.category-indicator.language { background-color: #3b82f6; }
.category-indicator.framework { background-color: #8b5cf6; }
.category-indicator.database { background-color: #14b8a6; }
.category-indicator.infrastructure { background-color: #f97316; }
.category-indicator.collaboration { background-color: #3b82f6; }

.category-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
}

/* Skills Tags */
.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.skill-tag.blue {
  background-color: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #dbeafe;
}

.skill-tag.purple {
  background-color: #faf5ff;
  color: #7c3aed;
  border: 1px solid #e9d5ff;
}

.skill-tag.teal {
  background-color: #f0fdfa;
  color: #0f766e;
  border: 1px solid #5eead4;
}

.skill-tag.orange {
  background-color: #fff7ed;
  color: #c2410c;
  border: 1px solid #fed7aa;
}

/* Modal Styles */
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

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.modal-body {
  padding: 1.5rem;
}

.skills-detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.skill-detail-card {
  background: #f9fafb;
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.skill-level {
  display: flex;
  gap: 0.25rem;
}

.level-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.skill-description {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.4;
  margin: 0;
}

.modal-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
  display: flex;
  justify-content: flex-end;
}

.close-modal-button {
  padding: 0.5rem 1rem;
  background: #e5e7eb;
  color: #374151;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.close-modal-button:hover {
  background: #d1d5db;
}

@media print {
  /* 전체 skills grid 레이아웃 고정 */
  .skills-grid {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 1rem !important;
  }

  /* 각 skill 카드가 페이지 중간에서 잘리지 않도록 */
  .skill-card {
    break-inside: avoid !important;
    page-break-inside: avoid !important;
    padding: 0.75rem !important;
  }

  /* 태그 폰트 작게 */
  .skill-tag {
    font-size: 0.7rem !important;
    padding: 0.25rem 0.5rem !important;
    line-height: 1.2 !important;
  }

  /* 제목도 살짝 줄이기 */
  .category-title {
    font-size: 0.85rem !important;
  }

  .section-title {
    font-size: 1.2rem !important;
    margin-bottom: 1rem !important;
    padding-bottom: 0.25rem !important;
  }
}

/* Print Optimization */
@media print {
  .modal-overlay {
    display: none !important;
  }
}
</style>