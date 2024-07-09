<script setup>
import jobs from '@/jobs.json';
const jobsArr = jobs.jobs;
console.log(jobsArr);
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl m-auto lg:container">
      <h2 class="mb-6 text-center text-3xl font-bold text-green-500">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <!-- Job Listing 1 -->
        <div
          v-for="job in jobsArr.slice(0, 3)"
          :key="job.id"
          class="relative rounded-xl bg-white shadow-md"
        >
          <div class="p-4">
            <div class="mb-6">
              <div class="my-2 text-gray-600">{{ job.title }}</div>
              <h3 class="text-xl font-bold">{{ job.type }}</h3>
            </div>

            <div class="mb-5">
              {{ job.description.slice(0, 90) + '...' }}
            </div>

            <h3 class="mb-2 text-green-500">{{ job.salary }} / Year</h3>

            <div class="mb-5 border border-gray-100"></div>

            <div class="mb-4 flex flex-col justify-between lg:flex-row">
              <div class="mb-3 text-orange-700">
                <i class="fa-solid fa-location-dot text-lg"></i>
                {{ job.location }}
              </div>
              <a
                href="job.html"
                class="h-[36px] rounded-lg bg-green-500 px-4 py-2 text-center text-sm text-white hover:bg-green-600"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <section class="m-auto my-10 max-w-lg px-6">
        <a
          href="jobs.html"
          class="block rounded-xl bg-black px-6 py-4 text-center text-white hover:bg-gray-700"
          >View All Jobs</a
        >
      </section>
    </div>
  </section>
</template>
