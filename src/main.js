import './assets/main.css'
import { createApp } from "vue";
import Toast from "vue-toastification";
import axios from 'axios';
import "vue-toastification/dist/index.css";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app
    .use(createPinia())
    .use(router, Toast, axios)
    .mount('#app')
