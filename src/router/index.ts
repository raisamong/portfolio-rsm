import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skill',
    name: 'Skill',
    component: () => import('../views/Skill.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/Project.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
