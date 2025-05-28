<template>
  <div>
    <!-- 프로필 섹션 -->
    <div class="profile-section">
      <img
        :src="profileImage"
        alt="Profile"
        class="profile-image"
      />
      <div class="profile-info text-left">
        <h1 class="text-2xl font-bold text-slate-900 mb-1 tracking-tight">{{ name }}</h1>
        <h2 class="text-base font-semibold text-blue-600 mb-1 uppercase tracking-wide">{{ jobTitle }}</h2>
        <p class="font-bold text-slate-600 text-sm leading-snug max-w-md">
          대화(Chat)를 통해 기술의 가치를 실현하는 개발자
        </p>
      </div>
    </div>

    <!-- 간단 소개 -->
    <div class="pro-summary mb-1 bg-white rounded-xl border border-blue-100 shadow-sm p-3">
      <div class="flex items-center mb-2">
        <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
            <path d="M8 12h8M8 8h8M8 16h5"/>
          </svg>
        </div>
        <h3 class="text-sm font-semibold text-slate-800">
          간단 소개
        </h3>
      </div>
      <p class="text-slate-600 text-sm leading-snug">
        대화와 소통 중심의 서비스를 지향하는 개발자입니다. 생성형 AI와 LLM 기술을 활용해 사용자에게 실질적인 가치를 제공하는 데 집중하며, 팀 내 소통과 협업을 통해 더 나은 결과를 만들어냅니다.
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  jobTitle: String,
  profileImage: String
});
</script>

<style scoped>
.profile-section {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #2563eb;
}
.profile-image {
  width: 6rem;
  height: 8rem;
  border-radius: 20%;
  object-fit: cover;
  box-shadow: 0 6px 12px -4px rgba(0, 0, 0, 0.1);
  border: 3px solid white;
}
.profile-info {
  grid-column: 2;
  text-align: left;
}
</style>
