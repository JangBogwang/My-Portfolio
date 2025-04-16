<template>
    <!-- 배경 오버레이와 중앙에 위치한 모달 창 -->
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <!-- 배경: 클릭 시 모달 종료 -->
      <div class="absolute inset-0 bg-black opacity-50" @click="$emit('close')"></div>
      <!-- 모달 창 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden z-10 max-w-lg w-full">
        <!-- 헤더 영역 -->
        <div class="p-4 border-b">
          <slot name="header"></slot>
        </div>
        <!-- 내용 영역 -->
        <div class="p-4">
          <slot name="body"></slot>
        </div>
        <!-- 푸터 영역 -->
        <div class="p-4 border-t text-right">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Modal',
  }
  </script>
  
  <style scoped>
  /* 추가적인 스타일을 필요에 따라 작성하세요 */
  </style>
  