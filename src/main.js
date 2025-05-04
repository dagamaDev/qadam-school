import { createApp } from 'vue'
import './style.css'
import HomePage from './views/HomePage.vue';
import MissionPage from './views/MissionPage.vue';
import TeamPage from './views/TeamPage.vue';
import ParentsPage from './views/ParentsPage.vue';
import AcademicPage from './views/AcademicPage.vue';
import ExtraPage from './views/ExtraPage.vue';
import PricePage from './views/PricePage.vue';
import EnrollmentPage from './views/EnrollmentPage.vue';
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
        {
            path: '/parents',
            component: ParentsPage
        },
        {
            path: '/academic',
            component: AcademicPage
        },
        {
            path: '/extra',
            component: ExtraPage
        },
        {
            path: '/price',
            component: PricePage
        },
        {
            path: '/enrollment',
            component: EnrollmentPage
        },

    ]
})

createApp(App).use(router).mount('#app')
