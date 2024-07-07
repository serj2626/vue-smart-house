<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
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
            <div>
                <p><span class="font-bold">Boytsov SV</span> &copy; 2024 St-Petersburg</p>
            </div>
            <div class="flex gap-4">
                <i class="fa-brands fa-vk fa-xl" style="color: #024bca;"></i>
                <i class="fa-brands fa-linkedin fa-xl" style="color: #419ce1;"></i>
                <i class="fa-brands fa-github fa-xl"></i>
                <i class="fa-brands fa-telegram fa-xl" style="color: #0f7dd2;"></i>
            </div>

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
