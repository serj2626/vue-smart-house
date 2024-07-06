<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex justify-end items-center">
    <img src="../assets/images/status/svet_off.png" alt="">
    <div>
      <p class="text-white">
        26 <span>&#176;</span>
      </p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="size-6 text-white w-8 h-auto">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>

    <img src="../assets/images/status/svet_on.png" alt="">
  </nav>
  <header class="container mx-auto h-[100px] mt-3 flex justify-around items-center">
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

.router-link-exact-active {
  color: rgb(149, 4, 4);
  border-bottom: 2px solid rgb(149, 4, 4);
}
</style>
