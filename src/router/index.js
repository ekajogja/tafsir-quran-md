import { createRouter, createWebHistory } from 'vue-router'
import NavMenu from '../components/NavMenu.vue'

const routes = [
  {
    path: '/',
    name: 'NavMenu',
    component: NavMenu
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router