<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex justify-end items-center">
    <img src="../assets/images/status/svet_off.png" alt="">
    <img src="../assets/images/status/svet_on.png" alt="">
  </nav>
  <header class="container h-[100px]  
  flex justify-center items-center bg-slate-300">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
  </header>

</template>

<style scoped>
nav {
  height: 60px;
  background-color: black;
}

nav img {
  height: 40px;
  margin-right: 10px;
  margin-left: 10px;
  width: auto;
}
</style>
