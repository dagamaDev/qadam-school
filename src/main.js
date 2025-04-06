import { createApp } from 'vue'
import './style.css'
import HomePage from './views/HomePage.vue';
import MissionPage from './views/MissionPage.vue';
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/mission',
            component: MissionPage
        }
    ]
})

createApp(App).use(router).mount('#app')
