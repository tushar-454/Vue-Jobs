<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="py-4">
    <div class="container-xl m-auto lg:container">
      <div class="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2">
        <div class="rounded-lg bg-gray-100 p-6 shadow-md">
          <h2 class="text-2xl font-bold">For Developers</h2>
          <p class="mb-4 mt-2">
            Browse our Vue jobs and start your career today
          </p>
          <RouterLink
            to="/jobs"
            class="inline-block rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-700"
          >
            Browse Jobs
          </RouterLink>
        </div>
        <div class="rounded-lg bg-green-100 p-6 shadow-md">
          <h2 class="text-2xl font-bold">For Employers</h2>
          <p class="mb-4 mt-2">
            List your job to find the perfect developer for the role
          </p>
          <RouterLink
            to="/add-jobs"
            class="inline-block rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Add Job
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
