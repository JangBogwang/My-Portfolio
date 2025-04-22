<template>
  <!-- Skills Component Wrapper with a subtle background -->
  <div class="skills-container">
    <h4 class="font-bold text-2xl text-[#3A3A3A] border-b-2 pb-2 mb-4 flex items-center">
      <span class="w-2 h-6 bg-[#8B6E5E] mr-3 rounded"></span>
      기술스택
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 언어 분야 카드 -->
      <div class="bg-white rounded-lg p-4 shadow-md border border-[#E5DED5] cursor-pointer" @click="openModal('language')">
        <h5 class="text-lg font-semibold text-[#4B2E2E] mb-4 flex items-center">
          <span class="w-1 h-5 bg-[#4B7BEC] mr-2 rounded"></span>
          언어 (Language)
        </h5>
        
        <div class="flex flex-wrap gap-3">
          <span v-for="skill in skills.language" :key="skill.name" 
                class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors">
            {{ skill.name }}
          </span>
        </div>
      </div>
      
      <!-- 프레임워크 분야 카드 -->
      <div class="bg-white rounded-lg p-4 shadow-md border border-[#E5DED5] cursor-pointer" @click="openModal('framework')">
        <h5 class="text-lg font-semibold text-[#4B2E2E] mb-4 flex items-center">
          <span class="w-1 h-5 bg-[#6B46C1] mr-2 rounded"></span>
          프레임워크 (Framework)
        </h5>
        
        <div class="flex flex-wrap gap-3">
          <span v-for="skill in skills.framework" :key="skill.name" 
                class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full border border-purple-200 hover:bg-purple-100 transition-colors">
            {{ skill.name }}
          </span>
        </div>
      </div>
      
      <!-- DB & 개발 도구 분야 카드 -->
      <div class="bg-white rounded-lg p-4 shadow-md border border-[#E5DED5] cursor-pointer" @click="openModal('database')">
        <h5 class="text-lg font-semibold text-[#4B2E2E] mb-4 flex items-center">
          <span class="w-1 h-5 bg-[#2C7A7B] mr-2 rounded"></span>
          DB & 개발 도구
        </h5>
        
        <div class="flex flex-wrap gap-3">
          <span v-for="skill in skills.database" :key="skill.name" 
                class="px-3 py-1 bg-teal-50 text-teal-700 rounded-full border border-teal-200 hover:bg-teal-100 transition-colors">
            {{ skill.name }}
          </span>
        </div>
      </div>
      
      <!-- 인프라 분야 카드 -->
      <div class="bg-white rounded-lg p-4 shadow-md border border-[#E5DED5] cursor-pointer" @click="openModal('infrastructure')">
        <h5 class="text-lg font-semibold text-[#4B2E2E] mb-4 flex items-center">
          <span class="w-1 h-5 bg-[#DD6B21] mr-2 rounded"></span>
          인프라 (Infrastructure)
        </h5>
        
        <div class="flex flex-wrap gap-3">
          <span v-for="skill in skills.infrastructure" :key="skill.name" 
                class="px-3 py-1 bg-orange-50 text-orange-700 rounded-full border border-orange-200 hover:bg-orange-100 transition-colors">
            {{ skill.name }}
          </span>
        </div>
      </div>
      
      <!-- 협업 도구 분야 카드 -->
      <div class="mb-4 bg-white rounded-lg p-4 shadow-md border border-[#E5DED5] cursor-pointer" @click="openModal('collaboration')">
        <h5 class="text-lg font-semibold text-[#4B2E2E] mb-4 flex items-center">
          <span class="w-1 h-5 bg-[#3182CE] mr-2 rounded"></span>
          협업 도구
        </h5>
        
        <div class="flex flex-wrap gap-3">
          <span v-for="skill in skills.collaboration" :key="skill.name" 
                class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors">
            {{ skill.name }}
          </span>
        </div>
      </div>
      
      <!-- 모달 컴포넌트 -->
      <div v-if="modalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="closeModal">
        <div class="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl">
          <div class="p-4 border-b flex justify-between items-center">
            <h3 class="text-2xl font-bold text-[#3A3A3A]">{{ modalTitle }}</h3>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
          </div>
          
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- 각 분야별 기술 스택 카드 -->
              <div v-for="skill in currentSkills" :key="skill.name" 
                  class="skill-card p-4 rounded-lg shadow-sm border-l-4" 
                  :class="[getCategoryBorderColor()]">
                <div class="flex justify-between items-center mb-3">
                  <h6 class="font-bold text-xl" :class="getCategoryTextColor()">{{ skill.name }}</h6>
                  <div class="skill-level flex items-center">
                    <div class="flex space-x-1">
                      <div v-for="i in 5" :key="i" class="w-3 h-3 rounded-full" 
                          :class="i <= skill.level ? getCategoryColor() : getCategoryEmptyColor()">
                      </div>
                    </div>
                  </div>
                </div>
                <p class="text-base text-gray-700">{{ skill.description }}</p>
              </div>
            </div>
          </div>
          
          <div class="p-4 border-t bg-gray-50 text-right">
            <button @click="closeModal" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-800 font-medium transition-colors">
              닫기
            </button>
          </div>
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
          main: 'bg-[#4B7BEC]',
          text: 'text-[#2E4374]',
          empty: 'bg-[#D9D9E8]',
          border: 'border-[#4B7BEC]'
        },
        framework: {
          main: 'bg-[#6B46C1]',
          text: 'text-[#44337A]',
          empty: 'bg-[#DDD6F3]',
          border: 'border-[#6B46C1]'
        },
        database: {
          main: 'bg-[#2C7A7B]',
          text: 'text-[#285E61]',
          empty: 'bg-[#D4EDE7]',
          border: 'border-[#2C7A7B]'
        },
        infrastructure: {
          main: 'bg-[#DD6B21]',
          text: 'text-[#9C4221]',
          empty: 'bg-[#F8E0CC]',
          border: 'border-[#DD6B21]'
        },
        collaboration: {
          main: 'bg-[#3182CE]',
          text: 'text-[#2C5282]',
          empty: 'bg-[#D6E6F5]',
          border: 'border-[#3182CE]'
        }
      },
      skills: {
        language: [
          { name: 'Java', level: 4, description: '알고리즘(백준 플레티넘, SW역량테스트 B형), 자바 OOP 개념에 대한 이해' },
          { name: 'Python', level: 3, description: '데이터 분석 및 크롤링 진행, AI 프로젝트 경험' },
          { name: 'C언어', level: 2, description: '자료구조 및 알고리즘 구현, 포인터와 메모리 관리 이해' },
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
          { name: 'Redis', level: 2, description: '인메모리 캐싱, 세션 관리' }
        ],
        infrastructure: [
          { name: 'Docker', level: 3, description: '컨테이너 관리, Docker compose 활용' },
          { name: 'GitLab', level: 3, description: 'CI/CD 파이프라인, EC2 배포' },
          { name: 'AWS', level: 3, description: 'EC2, S3, RDS 운영' }
        ],
        collaboration: [
          { name: 'Jira', level: 4, description: '애자일 이슈 관리' },
          { name: 'Git', level: 4, description: 'Git Flow 브랜치 전략' }
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
      // 모달이 열릴 때 스크롤 방지
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.modalVisible = false;
      // 모달이 닫힐 때 스크롤 허용
      document.body.style.overflow = 'auto';
    },
    getCategoryColor() {
      return this.categoryColors[this.currentCategory]?.main || 'bg-gray-400';
    },
    getCategoryTextColor() {
      return this.categoryColors[this.currentCategory]?.text || 'text-gray-800';
    },
    getCategoryEmptyColor() {
      return this.categoryColors[this.currentCategory]?.empty || 'bg-gray-200';
    },
    getCategoryBorderColor() {
      return this.categoryColors[this.currentCategory]?.border || 'border-gray-400';
    }
  }
}
</script>

<style scoped>
/* 부드러운 카드 hover 효과 */
.skill-card {
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* 모달 애니메이션 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>