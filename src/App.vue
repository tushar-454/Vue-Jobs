<script>
export default {
  data() {
    return {
      mesage: 'Hello vue',
    };
  },
  methods: {
    clickMe() {
      this.mesage = 'I am changed value';
    },
  },
};
</script>

<template>
  <h1>{{ mesage }}</h1>
  <button @click="clickMe">Click Me</button>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
