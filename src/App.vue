<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <header>
    <Navigation />
  </header>
  <main>
    <RouterView />
  </main>

</template>

<style scoped></style>
