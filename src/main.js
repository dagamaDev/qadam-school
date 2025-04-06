import { createApp } from 'vue'
import './style.css'
import HomePage from './views/HomePage.vue';
import MissionPage from './views/MissionPage.vue';
import TeamPage from './views/TeamPage.vue';
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
        },
        {
            path: '/team',
            component: TeamPage
        },
    ]
})

createApp(App).use(router).mount('#app')
