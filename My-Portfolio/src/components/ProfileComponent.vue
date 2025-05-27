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
        <h1 class="text-4xl font-bold text-slate-900 mb-2 tracking-tight">{{ name }}</h1>
        <h2 class="text-xl font-semibold text-blue-600 mb-3 uppercase tracking-wide">{{ jobTitle }}</h2>
        <p class="font-bold text-slate-600 text-base leading-relaxed max-w-md">
          대화(Chat)를 통해 기술의 가치를 실현하는 개발자
        </p>
      </div>
    </div>

    <!-- 간단 소개 -->
    <div class="pro-summary mb-8 bg-white rounded-2xl border border-blue-100 shadow-sm p-4">
      <div class="flex items-center mb-4">
        <div class="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
            <path d="M8 12h8M8 8h8M8 16h5"/>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-slate-800">
          간단 소개
        </h3>
      </div>
      <p class="text-slate-600 leading-relaxed">
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
</style>