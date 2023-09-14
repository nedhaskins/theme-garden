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

      <button>
         <RouterLink class="link-1" to="/test-theme">Link to the first test theme</RouterLink>
      </button>
   </main>
</template>

<style lang="scss" scoped>
   main {
      background-color: black;
      min-height: 100vh;
   }

   h1 {
      color: #ff7cff;
   }

   p {
      background-color: lime;
      padding: 20px;
   }

   button {
      margin-top: 36px;
      background-color: blue;
      color: white;
      width: 200px;
      padding: 1rem;
      box-shadow: 10px 10px;
   }

   .link-1 {
      font-size: 36px;
   }
</style>
