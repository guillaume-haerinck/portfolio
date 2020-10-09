import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Landing from '../views/Landing.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Landing
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue') // lazy-loading
  },
  {
    path: '/legals',
    name: 'legals',
    component: () => import('../views/Legals.vue') // lazy-loading
  },
  {
    path: '/project-detail/:projectName',
    name: 'project-detail/:projectName',
    component: () => import('../views/Article.vue') // lazy-loading
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/NotFound.vue') // lazy-loading
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
