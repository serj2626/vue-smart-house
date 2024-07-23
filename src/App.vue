<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <div class="app bg-[#fbf1f1] dark:bg-[#1f1f1f]">
    <header>
      <Navigation />
    </header>
    <main class="container mx-auto">
      <RouterView />
    </main>
    <footer class="flex justify-around items-center py-5 text-center">
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
main {
  min-height: 80vh;
}
</style>
