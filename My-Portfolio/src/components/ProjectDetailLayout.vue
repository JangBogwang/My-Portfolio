<template>
  <div class="min-h-screen bg-gray-50 font-sans text-gray-800 py-4 px-3 print:p-2 print:bg-white">
    <div class="max-w-4xl mx-auto">
      <!-- 메인 카드 -->
      <div class="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden print:shadow-none print:border-gray-300">
        
        <!-- 헤더 섹션 -->
        <header class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 print:bg-gray-800">
          <h1 class="text-xl font-bold mb-1">{{ project.title }}</h1>
          <p class="text-blue-100 text-xs opacity-90">{{ project.period }} |  {{ project.teamCount }} 명 </p>
        </header>

        <div class="p-4 space-y-4">
          <!-- 프로젝트 요약 -->
          <section class="bg-blue-50 rounded-md p-3 border-l-3 border-blue-500 print:bg-gray-50 print:border-gray-400">
            <p class="text-gray-700 text-sm leading-relaxed">{{ project.description }}</p>
          </section>


          <!-- 기술 스택 -->
          <section>
            <h2 class="text-base font-semibold text-gray-800 mb-2 flex items-center">
              <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              기술 스택
            </h2>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in project.tags"
                :key="tag.text"
                class="project-tag text-xs font-medium px-2.5 py-1 rounded-full shadow-sm"
                :class="tag.class"
              >
                {{ tag.text }}
              </span>
            </div>
          </section>

          <!-- 서비스 UI 이미지 -->
          <section v-if="project.serviceImages && project.serviceImages.length">
            <h2 class="text-base font-semibold text-gray-800 mb-2 flex items-center">
              <span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
              서비스 주요 화면
            </h2>
            <div class="service-images-grid grid grid-cols-1 md:grid-cols-1 gap-4">
              <div 
                v-for="(img, idx) in project.serviceImages"
                :key="idx"
                class="group relative overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <img
                  :src="img"
                  alt="서비스 이미지"
                  class="w-full object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>
          </section>

          <!-- 담당 역할 -->
          <section v-if="project.role">
            <h2 class="text-base font-semibold text-gray-800 mb-3 flex items-center">
              <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
              담당 역할
            </h2>
            <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-4 space-y-2">
              <div 
                v-for="role in project.role" 
                :key="role"
                class="flex items-start space-x-2"
              >
                <div class="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1 flex-shrink-0"></div>
                <p class="text-gray-700 text-sm">{{ role }}</p>
              </div>
            </div>
          </section>

          <!-- 핵심 기능 -->
          <section>
            <h2 class="text-base font-semibold text-gray-800 mb-3 flex items-center">
              <span class="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
              핵심 기능
            </h2>
            <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-4 space-y-2">
              <div 
                v-for="point in project.points" 
                :key="point"
                class="flex items-start space-x-2"
              >
                <div class="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1 flex-shrink-0"></div>
                <p class="text-gray-700 text-sm">{{ point }}</p>
              </div>
            </div>
          </section>

          <!-- 아키텍처 이미지 -->
          <section v-if="project.architectureImage && project.architectureImage.length">
            <h2 class="text-base font-semibold text-gray-800 mb-2 flex items-center">
              <span class="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
              시스템 아키텍처
            </h2>
            <div class="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
              <img
                :src="project.architectureImage"
                alt="아키텍처 다이어그램"
                class="w-full max-h-64 object-contain bg-gray-50 print:max-h-48"
              />
            </div>
          </section>

          <!-- 문제 해결 -->
          <section v-if="project.troubleshooting">
            <h2 class="text-base font-semibold text-gray-800 mb-2 flex items-center">
              <span class="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
              문제 해결
            </h2>
            <div class="bg-red-50 rounded-md p-3 border border-red-200">
              <p class="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{{ project.troubleshooting }}</p>
            </div>
          </section>

          <!-- 성과 -->
          <section v-if="project.results">
            <h2 class="text-base font-semibold text-gray-800 mb-2 flex items-center">
              <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
              성과 및 개선사항
            </h2>
            <div class="bg-emerald-50 rounded-md p-3 border border-emerald-200">
              <p class="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{{ project.results }}</p>
            </div>
          </section>

          <!-- 배운 점 -->
          <section v-if="project.lessons">
            <h2 class="text-base font-semibold text-gray-800 mb-2 flex items-center">
              <span class="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
              배운 점 & 인사이트
            </h2>
            <div class="bg-amber-50 rounded-md p-3 border border-amber-200">
              <p class="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{{ project.lessons }}</p>
            </div>
          </section>

          <!-- 링크 섹션 -->
          <section v-if="project.github || project.video || project.detail" class="print:hidden">
            <h2 class="text-base font-semibold text-gray-800 mb-2 flex items-center">
              <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              관련 링크
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <a 
                v-if="project.github" 
                :href="project.github" 
                target="_blank"
                class="flex items-center space-x-2 p-2.5 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200 shadow-sm text-sm"
              >
                <span>🔗</span>
                <span class="font-medium">GitHub</span>
              </a>
              <a 
                v-if="project.video" 
                :href="project.video" 
                target="_blank"
                class="flex items-center space-x-2 p-2.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 shadow-sm text-sm"
              >
                <span>🎥</span>
                <span class="font-medium">시연 영상</span>
              </a>
              <a 
                v-if="project.detail" 
                :href="project.detail" 
                target="_blank"
                class="flex items-center space-x-2 p-2.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 shadow-sm text-sm"
              >
                <span>📄</span>
                <span class="font-medium">문서</span>
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const project = defineProps({
  title: String,
  period: String,
  description: String,
  teamCount: String,
  team: Array,
  tags: Array,
  points: Array,
  github: String,
  detail: String,
  video: String,
  role: Array,
  lessons: String,
  responsibilities: Array,
  troubleshooting: String,
  results: String,
  architectureImage: String,
  serviceImages: Array,
});
</script>

<style scoped>
.project-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  transition: all 0.2s ease;
}

.project-tag:hover {
  transform: translateY(-1px);
  shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

  /* 이미지 최적화 */
  img {
    max-width: 100% !important;
    height: auto !important;
    max-height: 200pt !important;
    object-fit: contain !important;
    page-break-inside: avoid !important;
  }
  
  /* 서비스 이미지 그리드 */
  .grid-cols-1.md\\:grid-cols-2 {
    grid-template-columns: 1fr 1fr !important;
    gap: 8pt !important;
  }

/* PDF 인쇄 최적화 */
@media print {
  * {
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  
  @page {
    size: A4;
    margin: 1cm;
  }
  
  body {
    font-size: 11pt !important;
    line-height: 1.4 !important;
  }
  
  .min-h-screen {
    min-height: auto !important;
    padding: 0 !important;
    background: white !important;
  }
  
  .max-w-4xl {
    max-width: 100% !important;
  }
  
  .bg-white {
    background: white !important;
  }
  
  .shadow-lg, .shadow-md, .shadow-sm {
    box-shadow: none !important;
  }
  
  .rounded-xl, .rounded-lg {
    border-radius: 4pt !important;
  }
  
  /* 헤더 스타일 유지 */
  .bg-gradient-to-r {
    background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%) !important;
    -webkit-print-color-adjust: exact !important;
  }
  
  /* 태그 스타일 */
  .project-tag {
    background: #e2e8f0 !important;
    color: #1e293b !important;
    border: 1px solid #94a3b8 !important;
    font-size: 8pt !important;
    padding: 2pt 6pt !important;
    display: inline-block !important;
    margin: 1pt !important;
  }
  
  /* 색상 배경 유지 */
  .bg-blue-50 {
    background: #eff6ff !important;
    -webkit-print-color-adjust: exact !important;
  }
  
  .bg-gray-50 {
    background: #f9fafb !important;
    -webkit-print-color-adjust: exact !important;
  }
  
  .bg-red-50 {
    background: #fef2f2 !important;
    -webkit-print-color-adjust: exact !important;
  }
  
  .bg-emerald-50 {
    background: #ecfdf5 !important;
    -webkit-print-color-adjust: exact !important;
  }
  
  .bg-amber-50 {
    background: #fffbeb !important;
    -webkit-print-color-adjust: exact !important;
  }
  
  /* 보더 색상 */
  .border-blue-500 {
    border-color: #3b82f6 !important;
  }
  
  .border-red-200 {
    border-color: #fecaca !important;
  }
  
  .border-emerald-200 {
    border-color: #a7f3d0 !important;
  }
  
  .border-amber-200 {
    border-color: #fde68a !important;
  }
  
  /* 텍스트 크기 조정 */
  h1 {
    font-size: 18pt !important;
    margin-bottom: 4pt !important;
  }
  
  h2 {
    font-size: 12pt !important;
    margin-bottom: 6pt !important;
    margin-top: 12pt !important;
  }
  
  p, li {
    font-size: 10pt !important;
    line-height: 1.3 !important;
  }
  
  /* 이미지 최적화 */
  img {
    max-width: 100% !important;
    height: auto !important;
    max-height: 200pt !important;
    object-fit: contain !important;
    page-break-inside: avoid !important;
  }
  
  /* 서비스 이미지 그리드 */
  .grid-cols-1.md\\:grid-cols-2 {
    grid-template-columns: 1fr 1fr !important;
    gap: 8pt !important;
  }
  
  /* 섹션 간격 */
  section {
    margin-bottom: 12pt !important;
    page-break-inside: avoid !important;
  }
  
  /* 페이지 브레이크 방지 */
  .project-tag,
  .flex.items-start {
    page-break-inside: avoid !important;
  }
  
  /* 링크 숨김 */
  .print\\:hidden {
    display: none !important;
  }
  
  /* 색상 도트 */
  .w-2.h-2 {
    width: 6pt !important;
    height: 6pt !important;
  }
  
  .bg-blue-500 {
    background: #3b82f6 !important;
  }
  
  .bg-green-500 {
    background: #22c55e !important;
  }
  
  .bg-purple-500 {
    background: #a855f7 !important;
  }
  
  .bg-orange-500 {
    background: #f97316 !important;
  }
  
  .bg-teal-500 {
    background: #14b8a6 !important;
  }
  
  .bg-red-500 {
    background: #ef4444 !important;
  }
  
  .bg-emerald-500 {
    background: #10b981 !important;
  }
  
  .bg-amber-500 {
    background: #f59e0b !important;
  }
}
</style>