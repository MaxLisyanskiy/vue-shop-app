import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '@/views/pages/Home'
import NotFound from '@/views/pages/404'
import Shop from '@/views/pages/Shop'
import Product from '@/views/pages/Product'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/shop/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/*',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
