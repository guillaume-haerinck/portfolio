import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/not-found',
    name: 'not-found',
    component: () => import('../views/NotFound.vue') // lazy-loading
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
