<script setup>
import axios from 'axios';
import { defineProps, onMounted, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import JobListCard from './JobListCard.vue';

defineProps({
  limit: Number,
  showButton: Boolean,
});

const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs');
    state.jobs = response.data;
  } catch (error) {
    console.log('Homeview Error' + error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl m-auto lg:container">
      <h2 class="mb-6 text-center text-3xl font-bold text-green-500">
        Browse Jobs
      </h2>
      <div v-if="state.isLoading" class="grid">
        <i class="pi pi-spin pi-spinner text-center text-2xl"></i>
      </div>
      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <!-- Job Listing 1 -->
        <JobListCard
          v-for="(job, index) in state.jobs.slice(
            0,
            limit || state.jobs.length,
          )"
          :job="job"
          :key="index"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto my-10 max-w-lg px-6">
    <RouterLink
      to="/jobs"
      class="block rounded-xl bg-black px-6 py-4 text-center text-white hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
