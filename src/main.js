import { createApp } from 'vue'
import './style.css'
import HomePage from './views/HomePage.vue';
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        }
    ]
})

createApp(App).use(router).mount('#app')
