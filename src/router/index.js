import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/Home',
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: () => import('@/views/Home'),
        meta: {
          name: 'Home',
          title: 'Home',
          icon: 'dashboard'
        }
      }
    ]
  },
  {
    path: '/test2',
    name: 'test2',
    component: Layout,
    hidden: false,
    meta: {
      name: '测试2',
      title: 'test2',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'log2',
        name: 'About',
        component: () => import('@/views/About'),
        meta: {
          name: '分页',
          title: 'log2',
          icon: 'dashboard'
        }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/Permission1',
    name: 'Permission1',
    component: Layout,
    meta: {
      title: 'Page Permission',
      roles: ['admin', 'editor'],
      name: '添加1'
    },
    children: [
      {
        path: 'log3',
        name: 'log3',
        component: () => import('@/views/About'),
        meta: {
          name: '分页',
          title: 'log3'
        }
      },
      {
        path: 'log4',
        name: 'log4',
        component: () => import('@/views/About'),
        meta: {
          name: '分页',
          title: 'log3'
        }
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
