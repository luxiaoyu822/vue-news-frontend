import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home'
import News from '@/views/News'
import Product from '@/views/Product'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = [
  {
    path: '/index',
    name: 'home',
    component: Home,
  },
  {
    path: '/news',
    name: 'news',
    component: News,
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
  },
  {
    path: '/',
    redirect: '/index',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  nProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  nProgress.done()
})

export default router
