<template>
  <div>
    <div class="career-section">
      <h3 class="text-xl font-bold text-slate-900 mb-4 tracking-tight">Career</h3>
      
      <!-- Placeholder for a single career entry -->
      <div class="pro-summary mb-4 bg-white rounded-xl border border-blue-100 shadow-sm p-4">
        <div class="flex items-center mb-2">
          <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor"
                 stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h4 class="text-base font-semibold text-slate-800">Company Name - Position</h4>
        </div>
        <p class="text-slate-600 text-sm leading-snug mb-2">Start Date - End Date</p>
        <ul class="list-disc list-inside text-slate-600 text-sm leading-snug pl-4">
          <li>Responsibility or achievement 1</li>
          <li>Responsibility or achievement 2</li>
          <li>Responsibility or achievement 3</li>
        </ul>
      </div>

      <!-- You can duplicate the above 'pro-summary' div for more career entries -->
      <!-- Another Placeholder for a single career entry -->
      <div class="pro-summary mb-4 bg-white rounded-xl border border-blue-100 shadow-sm p-4">
        <div class="flex items-center mb-2">
          <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor"
                 stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h4 class="text-base font-semibold text-slate-800">Another Company - Another Position</h4>
        </div>
        <p class="text-slate-600 text-sm leading-snug mb-2">Start Date - End Date</p>
        <ul class="list-disc list-inside text-slate-600 text-sm leading-snug pl-4">
          <li>Responsibility or achievement A</li>
          <li>Responsibility or achievement B</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// No specific script logic needed for now, as content will be added by the user
</script>

<style scoped>
.career-section {
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #2563eb; /* Consistent border with profile section */
  margin-bottom: 1rem;
}
/* No additional styles needed here as Tailwind classes are used */
</style>
