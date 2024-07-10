<script setup>
import JobListCard from '@/components/JobListCard.vue';
import axios from 'axios';
import { onMounted, reactive } from 'vue';

const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs');
    state.jobs = response.data;
  } catch (error) {
    console.log('Jobsview Error' + error);
  } finally {
    state.isLoading = false;
  }
});
</script>
<template>
  <!-- Filter Jobs -->
  <section class="bg-green-50 py-4">
    <div class="container mx-auto px-4">
      <div class="relative">
        <input
          type="text"
          class="w-full rounded-lg border border-gray-300 p-3 focus:border-green-500 focus:outline-none"
          placeholder="Filter jobs..."
        />
      </div>
    </div>
  </section>

  <!-- All Jobs -->
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl m-auto lg:container">
      <h2 class="mb-6 text-center text-3xl font-bold text-green-500">
        Browse Jobs
      </h2>
      <div v-if="state.isLoading" class="grid">
        <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
      </div>
      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <JobListCard v-for="job in state.jobs" :job="job" :key="job.id" />
      </div>
    </div>
  </section>
</template>
