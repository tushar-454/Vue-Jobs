<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
  subTitle: String,
  btnName: String,
});
</script>

<template>
  <div class="rounded-lg bg-gray-100 p-6 shadow-md">
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <p class="mb-4 mt-2">{{ subTitle }}</p>
    <a
      href="jobs.html"
      class="inline-block rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-700"
    >
      {{ btnName }}
    </a>
  </div>
</template>
