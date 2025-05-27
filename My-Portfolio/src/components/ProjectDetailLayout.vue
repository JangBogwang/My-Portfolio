<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-800 py-10 px-6">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8 print:shadow-none print:rounded-none print:p-0">

      <!-- 프로젝트 타이틀 -->
      <header class="border-b border-slate-200 pb-4">
        <h1 class="text-3xl font-bold text-slate-900">{{ project.title }}</h1>
        <p class="text-sm text-slate-500 mt-1">{{ project.period }}</p>
      </header>

      <!-- 대표 이미지 -->
      <section v-if="project.image">
        <img :src="project.image" alt="Project Image" class="w-full rounded-lg shadow-sm" />
      </section>

      <!-- 소개 -->
      <section>
        <h2 class="text-xl font-semibold text-slate-700 mb-2">프로젝트 개요</h2>
        <p class="text-slate-600 leading-relaxed">{{ project.description }}</p>
      </section>

      <!-- 역할 및 기여도 -->
      <section v-if="project.role">
        <h2 class="text-xl font-semibold text-slate-700 mb-2">담당 역할 및 기여</h2>
        <p class="text-slate-600 leading-relaxed">{{ project.role }}</p>
      </section>

      <!-- 기술 스택 -->
      <section>
        <h2 class="text-xl font-semibold text-slate-700 mb-2">기술 스택</h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag.text"
            class="project-tag text-xs font-medium px-2 py-1 rounded-full border"
            :class="tag.class"
          >
            {{ tag.text }}
          </span>
        </div>
      </section>

      <!-- 주요 기능 및 구현 내용 -->
      <section>
        <h2 class="text-xl font-semibold text-slate-700 mb-2">핵심 구현 내용</h2>
        <ul class="list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li v-for="point in project.points" :key="point">{{ point }}</li>
        </ul>
      </section>

      <!-- 트러블 슈팅 -->
      <section v-if="project.troubleshooting">
        <h2 class="text-xl font-semibold text-slate-700 mb-2">문제 해결 사례</h2>
        <p class="text-slate-600 leading-relaxed">{{ project.troubleshooting }}</p>
      </section>

      <!-- 정량적 성과 -->
      <section v-if="project.results">
        <h2 class="text-xl font-semibold text-slate-700 mb-2">성과 및 결과</h2>
        <p class="text-slate-600 leading-relaxed">{{ project.results }}</p>
      </section>

      <!-- 스크린샷 갤러리 -->
      <section v-if="project.screenshots && project.screenshots.length">
        <h2 class="text-xl font-semibold text-slate-700 mb-2">기능별 스크린샷</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            v-for="(img, idx) in project.screenshots"
            :key="idx"
            :src="img"
            alt="스크린샷"
            class="rounded-md border border-slate-200 shadow-sm"
          />
        </div>
      </section>

      <!-- 배운 점 및 개선 사항 -->
      <section v-if="project.lessons">
        <h2 class="text-xl font-semibold text-slate-700 mb-2">배운 점 및 개선 사항</h2>
        <p class="text-slate-600 leading-relaxed">{{ project.lessons }}</p>
      </section>
    </div>
  </div>
</template>

<script setup>
const project = defineProps({
  title: String,
  period: String,
  description: String,
  image: String,
  tags: Array,
  points: Array,
  github: String,
  detail: String,
  video: String,
  role: String,
  lessons: String,
  troubleshooting: String,
  results: String,
  screenshots: Array,
});
</script>

<style>
.project-tag {
  line-height: 1.3;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
}

@media print {
  .project-tag {
    background-color: #f1f5f9 !important;
    color: #1e293b !important;
    border: 1px solid #cbd5e1 !important;
    font-size: 0.7rem !important;
  }
}
</style>
