<script setup>
   import { RouterLink } from 'vue-router';
</script>

<template>
   <main>
      <h1>THIS IS THE HOME PAGE.</h1>
      <RouterLink to="/test-theme">Link to the first test theme</RouterLink>
   </main>
</template>

<style lang="scss" scoped>
   main {
      background-color: purple;
   }
</style>
