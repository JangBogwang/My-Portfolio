<template>
  <!-- 프로젝트 섹션 -->
  <section class="mt-8">
    <!-- 프로젝트 그리드 컨테이너 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="project in projects"
        :key="project.title"
        class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm section-block"
      >
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-base font-semibold text-slate-800">{{ project.title }}</h3>
          <span class="bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full">{{ project.period }}</span>
        </div>

        <p class="text-sm text-slate-600 mb-2 leading-relaxed">{{ project.description }}</p>

        <div class="flex flex-wrap gap-1 mb-2">
          <span
            v-for="tag in project.tags"
            :key="tag.text"
            class="project-tag text-xs font-medium px-2 py-1 rounded-full border"
            :class="tag.class"
          >
            {{ tag.text }}
          </span>
        </div>

        <div class="flex gap-2">
          <a
            v-if="project.github"
            :href="project.github"
            class="text-indigo-600 text-sm font-medium hover:underline flex items-center gap-1"
          >
            Github
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          <a
            v-if="project.video"
            :href="project.video"
            target="_blank"
            rel="noopener noreferrer"
            class="text-indigo-600 text-sm font-medium hover:underline flex items-center gap-1"
          >
            Video
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M10 8l6 4-6 4V8z" />
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" fill="none" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
    {
    title: 'FIRZZLE',
    period: '2025.04 - 2025.05',
    description: 'Youtube 영상 기반 학습 콘텐츠 생성 플랫폼',
    tags: [
      { text: 'SpringBoot', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
      { text: 'Kafka', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
      { text: 'Qdrant', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
      { text: 'RAG', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
      { text: 'Docker', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
      { text: 'EC2', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
    ],
    github: '#',
    video: 'https://youtu.be/5n1sNibVcZI',
  },
  {
    title: 'SOTORY',
    period: '2025.03 - 2025.04',
    description: '생성형 AI를 활용하여 나만의 소비 일기를 카드 형식으로 만들어주는 앱',
    tags: [
      { text: 'SpringBoot', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
      { text: 'FastAPI', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
      { text: 'GitLab CI/CD', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
      { text: 'Nginx', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
      { text: 'Docker', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
      { text: 'EC2', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
    ],
    github: '#',
    video: 'https://youtu.be/RYJO-4Tl3qs?si=ecFNzxVoMlMyrHu3',
  },
  {
    title: '토마톡',
    period: '2025.01 - 2025.02',
    description: 'WebRTC 기술과 STT, LLM 기술을 활용한 토론 교육 플랫폼',
    tags: [
      { text: 'SpringBoot', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
      { text: 'FastAPI', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
      { text: 'STT(whisper 모델)', class: 'bg-[#EDF1FF] text-[#3C5FCB] border-[#C7D7FE]' },
      { text: 'WebRTC(openvidu)', class: 'bg-[#EDF1FF] text-[#3C5FCB] border-[#C7D7FE]' },
    ],
    github: '#',
    video: 'https://youtu.be/P3BOmZuMerk',
  },
  {
    title: 'Nutirigo',
    period: '2024.11 - 2024.11',
    description: '식단 관리 및 분석 대시보드 제공, 생성형 AI 기반 식단 추천 서비스',
    tags: [
      { text: 'Spring Boot', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
      { text: 'FastAPI', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
      { text: 'MongoDB', class: 'bg-[#E2FAF5] text-[#3EB99E] border-[#A7F3D0]' },
      { text: 'MySQL', class: 'bg-[#E2FAF5] text-[#3EB99E] border-[#A7F3D0]' },
      { text: 'ChatGPT', class: 'bg-[#EDF1FF] text-[#3C5FCB] border-[#C7D7FE]' },
    ],
    github: 'https://github.com/ssafitjs',
    video: 'https://youtu.be/jLddzWXDmow',
  },
  {
    title: 'MVTI',
    period: '2024.04 - 2024.06',
    description: 'MBTI와 사용자 취향 협업 필터링을 활용한 콘텐트 추천 서비스',
    tags: [
      { text: 'FASTAPI', class: 'bg-[#F2EBFF] text-[#8258C4] border-[#D8C9F1]' },
      { text: 'Kafka', class: 'bg-[#FFF3EA] text-[#C7743F] border-[#FED7AA]' },
      { text: 'React', class: 'bg-[#EDF1FF] text-[#3C5FCB] border-[#C7D7FE]' },
      { text: 'Github Action', class: 'bg-[#EDF1FF] text-[#3C5FCB] border-[#C7D7FE]' },
    ],
    github: 'https://github.com/MVTI-MovieAndVideo-Recommender-Platform',
    video: 'https://youtu.be/aIA7bUbfYXA',
  },
];
</script>

<style>
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr !important;
  }
}

.project-tag {
  line-height: 1.3;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
}

.section-block {
  page-break-inside: avoid;
}
</style>
