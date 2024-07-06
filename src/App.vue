<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="app container">
    <header>
      <Navigation />
    </header>
    <main>
      <RouterView />
    </main>
  </div>


</template>

<style scoped></style>
