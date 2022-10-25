import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import LayoutView from '@/page/common/layout.vue'
import PageLayoutView from '@/page/common/page-layout.vue'
import testRouter from './modules/test'
import { useAppStore } from "@/store";
import {PermissionEnum} from '@/config/permisson.config'

declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, undefined> {
    permisson?: string;
    icon?: string;
    title?: string;
  }
}

export const MENU_ROUTE_NAME = 'menuRoute'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: MENU_ROUTE_NAME,
    component: LayoutView,
    redirect: 'dashboard',
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        meta: {
          title: '控制台',
          icon: 'Setting',
          permisson: PermissionEnum.DASHBOARD,

        },
        component: () => import('@/page/dashboard.vue')
      },
      {
        name:'user',
        path:'user',
        component: PageLayoutView,
        meta:{
          title: '用户',
          icon: 'User',
          permisson: PermissionEnum.USER,
        },
        redirect: {name:'user-list'},
        children:[
          {
            name:'user-list',
            path:'list',
            component: () => import('@/page/user/index.vue'),
            meta:{
              title: '用户管理',
              // icon: 'User',
              permisson: PermissionEnum.UESR_LIST,
            }
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/page/login/index.vue')
  },
  ...testRouter,

]

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes,
  scrollBehavior: () => ({ top: 0, left: 0 })  // 跳转页面回到顶部
})

const whiteList = [
  '/login'
]
router.beforeEach((to, from, next) => {
  const appStore = useAppStore()
  if (!appStore.token) {
    whiteList.indexOf(to.path) !== -1 ? next() : next(`login?redirect=${to.path}`)
    return
  }
  if (appStore.token && to.path === '/login') {
    next({ path: '/' })
    return
  }
  next()
})
export default router