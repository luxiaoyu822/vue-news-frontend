import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home'
import News from '@/views/News'
import NewDetail from '@/views/NewDetail'
import Product from '@/views/Product'
import NotFound from '@/components/NotFound'
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
    path: '/new-detail/:id',
    name: 'newdetail',
    component: NewDetail,
  },
  {
    path: '/404',
    name: 'notfound',
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFound,
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
