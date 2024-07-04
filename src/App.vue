<script setup>
import { ref } from 'vue';

const name = ref('John Dou');
const status = ref('active');
const tasks = ref(['Task-1', 'Task-2', 'Task-3']);
const changeStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending';
  } else if (status.value === 'pending') {
    status.value = '';
  } else {
    status.value = 'active';
  }
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">{{ name }} is Active</p>
  <p v-else-if="status === 'pending'">{{ name }} in pending</p>
  <p v-else="status">{{ name }} in not available</p>
  <button @click="changeStatus">Click Status</button>
  <h2>Tasks</h2>
  <ul>
    <li
      v-for="(task, index) in tasks"
      :key="index"
    >
      {{ task }}
    </li>
  </ul>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
