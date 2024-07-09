<script setup>
import DevAndEmpolyCard from '@/components/DevAndEmpolyCard.vue';
</script>

<template>
  <section class="py-4">
    <div class="container-xl m-auto lg:container">
      <div class="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2">
        <DevAndEmpolyCard
          title="For Developers"
          subTitle="Browse our Vue jobs and start your career today"
          btnName="Browse Jobs"
        />
        <DevAndEmpolyCard
          title="For Employers"
          subTitle="List your job to find the perfect developer for the role"
          btnName="Add Job"
        />
      </div>
    </div>
  </section>
</template>
