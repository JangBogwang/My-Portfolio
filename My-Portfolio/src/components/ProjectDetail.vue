<template>
    <div>
      <component :is="component" />
    </div>
  </template>
  
  <script setup>
  defineProps({
    component: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  /* 스타일 필요 시 추가 */
  </style>
  