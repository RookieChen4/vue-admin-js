import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    name: 'test1',
    component: Layout,
    hidden: false,
    meta: {
      name: '测试1'
    },
    children: [
      {
        path: 'Home',
        name: 'test',
        component: () => import('@/views/Home'),
        meta: {
          name: '分页'
        }
      }
    ]
  },
  {
    path: '/',
    name: 'test2',
    component: Layout,
    hidden: false,
    meta: {
      name: '测试2'
    },
    children: [
      {
        path: 'log2',
        name: 'About',
        component: () => import('@/views/About'),
        meta: {
          name: '分页'
        }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: {
      title: 'Page Permission',
      roles: ['admin']
    }
  }
]

const createRouter = () => new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
