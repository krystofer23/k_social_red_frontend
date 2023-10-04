import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../views/home/HomeView.vue';
import Profile from '../views/profile/ProfileView.vue';

import Login from '../views/auth/LoginView.vue';
import Register from '../views/auth/RegisterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register 
    }
  ]
})

export default router
