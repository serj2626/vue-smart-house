<script setup>
import { RouterLink } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <nav class="flex justify-around items-center">
    <div>
      <p class="text-white font-serif font-bold text-2xl">Умный дом</p>
    </div>
    <div class="flex justify-end items-center gap-2">
      <div>
        <p class="text-white font-bold text-2xl">26 <span>&#176;</span></p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-8 cursor-pointer text-yellow-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-8 svg-dark"
        title="Светлая тема"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg> -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-8 svg-white"
        title="Темная тема"
        @click="toggleDark()"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>
    </div>
  </nav>

  <header
    class="container mx-auto h-[100px] mt-3 flex justify-around items-center"
  >
    <img src="/logo1.png" width="100" height="200" alt="Мой Дом" />
    <div class="flex">
      <RouterLink class="header-link" to="/">Мой Дом</RouterLink>
      <RouterLink class="header-link" :to="{ name: 'account' }"
        >Мой профиль</RouterLink
      >
      <RouterLink class="header-link" :to="{ name: 'login' }">Войти</RouterLink>
      <RouterLink class="header-link" :to="{ name: 'signup' }"
        >Регистрация</RouterLink
      >
    </div>
  </header>
</template>

<style scoped>
nav {
  height: 60px;
  background-color: rgb(45, 43, 43);
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

.svg-white {
  fill: white;
  border: 1px solid white;
  border-radius: 20%;
  padding: 2px;
  cursor: pointer;
}
.svg-dark {
  fill: rgb(45, 43, 43);
  border: 1px solid rgb(45, 43, 43);
  border-radius: 20%;
  background-color: white;
  padding: 2px;
  cursor: pointer;
}
</style>
