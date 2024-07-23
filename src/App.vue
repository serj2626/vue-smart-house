<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <div class="app">
    <header>
      <Navigation />
    </header>
    <main class="container mx-auto">
      <RouterView />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
.app {
  background-color: #fbf1f1;
}

main {
  min-height: 80vh;
}

footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #dbc3c3;
    padding-block: 20px;
    text-align: center;
}
</style>
