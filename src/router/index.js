import { createRouter, createWebHistory } from 'vue-router'
import TasksPage from '../views/TasksPage.vue'
import AboutPage from '../views/AboutPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'

const routes = [
    { path: '/', component: TasksPage },
    { path: '/sobre', component: AboutPage },

    // NOVO
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/', redirect: '/login' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
