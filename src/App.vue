<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import { useAuthStore } from "./stores/auth";
import { onMounted } from "vue";

const store = useAuthStore();
onMounted(() => {
  store.initAuth();
});

const authUser = store.userState;
console.log(authUser);
</script>

<template>
  <div class="app bg-[#fbf1f1] dark:bg-[#1f1f1f]">
    <header>
      <Navigation />
    </header>
    <main class="container min-h-[80vh] mx-auto">
      <RouterView />
    </main>
    <footer class="flex justify-around items-center py-5 mt-5 text-center">
      <Footer />
    </footer>
  </div>
</template>

<style scoped></style>
