<template>
  <div class="contact-container">
    <h3 class="contact-title">Contact</h3>
    <div class="contact-items">
      <!-- 전화번호 -->
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        <span>010-5344-2695</span>
      </div>

      <!-- 이메일 -->
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"/>
          <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        <span>wkdqhrhkd12@gmail.com</span>
      </div>

      <!-- 블로그 -->
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
        </svg>
        <span><a href="https://growingegg.tistory.com/" class="link" target="_blank">growingegg.tistory.com</a></span>
      </div>

      <!-- GitHub -->
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        <span><a href="https://github.com/JangBogwang" class="link" target="_blank">github.com/JangBogwang</a></span>
      </div>
    </div>
  </div>
</template>

<style>
.contact-container {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
}
.contact-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.contact-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  break-inside: avoid;
  font-size: 0.9rem;
}
.icon {
  width: 1.25rem;
  height: 1.25rem;
  stroke: #2563eb;
  flex-shrink: 0;
}
.link {
  color: #2563eb;
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}

@media print {
  .contact-container {
    padding: 0.75rem !important;
  }
  .contact-title {
    font-size: 1rem !important;
    margin-bottom: 0.25rem !important;
  }
  .contact-items {
    gap: 0.4rem !important;
  }
  .contact-item {
    font-size: 0.8rem !important;
    gap: 0.4rem !important;
  }
  .icon {
    width: 1rem !important;
    height: 1rem !important;
    stroke: #000 !important;
  }
  .link {
    color: black !important;
    text-decoration: underline !important;
  }
}
</style>
