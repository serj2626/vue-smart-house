<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>

    <header>
        <Navigation />
    </header>
    <main class="container mx-auto">
        <RouterView />
    </main>


</template>

<style scoped>
main{

    min-height: 100vh;
}
</style>
