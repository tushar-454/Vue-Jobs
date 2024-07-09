<script setup>
import DevAndEmpoly from '@/components/DevAndEmpoly.vue';
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import Jobs from '@/components/Jobs.vue';
</script>

<template>
  <Header />
  <Hero
    title="Become a Vue Dev"
    description="Find the Vue job that fits your skills and needs"
  />
  <DevAndEmpoly />
  <Jobs />
</template>
