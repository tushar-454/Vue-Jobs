<script setup>
import { computed, defineProps, ref } from 'vue';

const props = defineProps({
  job: Object,
});

const isFullDescription = ref(true);
const truncatedDescription = computed(() => {
  let description = props.job.description;
  if (isFullDescription.value) {
    description = description.substring(0, 90) + '...';
  }
  return description;
});

const toggleDescription = () => {
  isFullDescription.value = !isFullDescription.value;
};
</script>

<template>
  <div class="relative rounded-xl bg-white shadow-md">
    <div class="p-4">
      <div class="mb-6">
        <div class="my-2 text-gray-600">{{ job.title }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        <div>
          {{ truncatedDescription }}
        </div>
        <button @click="toggleDescription" class="text-green-500">
          {{ !isFullDescription ? 'Less' : 'More' }}
        </button>
      </div>

      <h3 class="mb-2 text-green-500">{{ job.salary }} / Year</h3>

      <div class="mb-5 border border-gray-100"></div>

      <div class="mb-4 flex flex-col justify-between lg:flex-row">
        <div class="mb-3 text-orange-700">
          <i class="pi pi-map-marker text-lg"></i>
          {{ job.location }}
        </div>
        <RouterLink
          :to="'/jobs/' + job.id"
          class="h-[36px] rounded-lg bg-green-500 px-4 py-2 text-center text-sm text-white hover:bg-green-600"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
