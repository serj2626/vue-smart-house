<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex justify-end items-center">
    <img src="../assets/images/status/svet_off.png" alt="">
    <img src="../assets/images/status/svet_on.png" alt="">
  </nav>
  <header class="h-[100px] mt-3 flex justify-around items-center">
    <img src="/logo.png" width="100" height="200" alt="Мой Дом">
    <div class="flex">
      <RouterLink class="header-link" to="/">Мой Дом</RouterLink>
      <RouterLink class="header-link" :to="{ name: 'about' }">About</RouterLink>
      <RouterLink class="header-link" :to="{ name: 'login' }">Войти</RouterLink>
      <RouterLink class="header-link" :to="{ name: 'signup' }">Регистрация</RouterLink>
    </div>

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
