<template>
  <div class="min-h-screen bg-white font-sans text-slate-800 py-6 px-4 print:p-2">
    <div class="max-w-3xl mx-auto space-y-4 print:space-y-2">

      <!-- 제목 + 기간 -->
      <header class="border-b border-slate-200 pb-1">
        <h1 class="text-xl font-bold text-slate-900">{{ project.title }}</h1>
        <p class="text-xs text-slate-500">{{ project.period }}</p>
      </header>

      <!-- 한 줄 요약 -->
      <section>
        <p class="italic text-slate-700 text-sm">{{ project.description }}</p>
      </section>

      <!-- 기술 스택 -->
      <section>
        <h2 class="text-sm font-semibold text-slate-700 mb-0.5">기술 스택</h2>
        <div class="flex flex-wrap gap-1">
          <span
            v-for="tag in project.tags"
            :key="tag.text"
            class="project-tag text-[10px] font-medium px-2 py-0.5 rounded-full border"
            :class="tag.class"
          >
            {{ tag.text }}
          </span>
        </div>
      </section>

            <!-- 서비스 UI 이미지 -->
      <section v-if="project.serviceImages && project.serviceImages.length">
        <h2 class="text-sm font-semibold text-slate-700 mb-0.5">서비스 주요 화면</h2>
        <div class="grid grid-cols-2 gap-2">
          <img
            v-for="(img, idx) in project.serviceImages"
            :key="idx"
            :src="img"
            alt="서비스 이미지"
            class="rounded-md border border-slate-200 shadow-sm object-contain max-h-[180px] w-full"
          />
        </div>
      </section>

      <!-- 담당 역할 -->
      <section v-if="project.role">
        <h2 class="text-sm font-semibold text-slate-700 mb-0.5">담당 역할</h2>
        <p class="text-slate-700 text-sm leading-snug whitespace-pre-line">{{ project.role }}</p>
      </section>

      <!-- 핵심 기능 -->
      <section>
        <h2 class="text-sm font-semibold text-slate-700 mb-0.5">핵심 기능</h2>
        <ul class="list-disc pl-4 text-sm text-slate-700">
          <li v-for="point in project.points" :key="point">{{ point }}</li>
        </ul>
      </section>

            <!-- 아키텍처 이미지 -->
      <section v-if="project.architectureImage && project.architectureImage.length">
        <h2 class="text-sm font-semibold text-slate-700 mb-0.5">다이어그램</h2>
        <img
          :src="project.architectureImage"
          alt="다이어그램램 이미지"
          class="rounded-md border border-slate-200 shadow-sm w-full max-w-3xl mx-auto max-h-[260px] object-contain"
        />
      </section>

      <!-- 문제 해결 -->
      <section v-if="project.troubleshooting">
        <h2 class="text-sm font-semibold text-slate-700 mb-0.5">문제 해결</h2>
        <p class="text-slate-700 text-sm leading-snug whitespace-pre-line">{{ project.troubleshooting }}</p>
      </section>

      <!-- 성과 -->
      <section v-if="project.results">
        <h2 class="text-sm font-semibold text-slate-700 mb-0.5">성과 및 개선</h2>
        <p class="text-slate-700 text-sm leading-snug whitespace-pre-line">{{ project.results }}</p>
      </section>

      <!-- 배운 점 -->
      <section v-if="project.lessons">
        <h2 class="text-sm font-semibold text-slate-700 mb-0.5">배운 점</h2>
        <p class="text-slate-700 text-sm leading-snug whitespace-pre-line">{{ project.lessons }}</p>
      </section>

      <!-- 링크 -->
      <section v-if="project.github || project.video || project.detail" class="print:hidden">
        <h2 class="text-sm font-semibold text-slate-700 mb-0.5">링크</h2>
        <ul class="text-xs text-blue-600 underline space-y-0.5">
          <li v-if="project.github"><a :href="project.github" target="_blank">🔗 GitHub</a></li>
          <li v-if="project.video"><a :href="project.video" target="_blank">🎥 시연 영상</a></li>
          <li v-if="project.detail"><a :href="project.detail" target="_blank">📄 Notion 문서</a></li>
        </ul>
      </section>

    </div>
  </div>
</template>

<script setup>
const project = defineProps({
  title: String,
  period: String,
  description: String,
  tags: Array,
  points: Array,
  github: String,
  detail: String,
  video: String,
  role: String,
  lessons: String,
  troubleshooting: String,
  results: String,
  architectureImage: String,
  serviceImages: Array,
});
</script>

<style>
.project-tag {
  line-height: 1.2;
  padding: 0.1rem 0.5rem;
  border-radius: 9999px;
  border: 1px solid #cbd5e1;
}

@media print {
  .project-tag {
    background-color: #f1f5f9 !important;
    color: #1e293b !important;
    font-size: 0.65rem !important;
    border: 1px solid #cbd5e1 !important;
  }

  img {
    max-height: 160px !important;
    object-fit: contain !important;
  }

  section, h2 {
    margin-bottom: 0.25rem !important;
  }
}
</style>
