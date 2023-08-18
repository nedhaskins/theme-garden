<script setup>
   import { RouterLink } from 'vue-router';
</script>

<template>
   <main>
      <h1>THEME GARDEN HOME PAGE.</h1>

      <p>
         This site explores different themes for different purposes using the same underlying framework (Vue) and
         modules. The same HTML and CSS boilerplate are used for each theme. The differences lie in the color,
         typography, and UX design choices made for each theme.
      </p>

      <RouterLink to="/test-theme">Link to the first test theme</RouterLink>
   </main>
</template>

<style lang="scss" scoped>
   main {
      background-color: #ff7cff;

      p {
         background-color: lime;
         padding: 20px;
      }
   }
</style>
