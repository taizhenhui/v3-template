import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import LayoutView from '@/page/common/layout.vue'
import testRouter from './modules/test'
import { useAppStore } from "@/store";

const routes:Array<RouteRecordRaw> = [
  {
    path:'/',
    name: 'root',
    component: LayoutView,
    redirect:'home',
    children:[
      {
        name:'home',
        path:'home',
        component:() => import('@/page/home.vue')
      }
    ]
  },
  {
    path:'/login',
    name: 'login',
    component: () => import('@/page/login/index.vue')
  },
  ...testRouter,

]

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes,
  scrollBehavior: () => ({top:0,left:0})  // 跳转页面回到顶部
})

const whiteList = [
  '/login'
]
router.beforeEach((to, from, next) => {
  const appStore = useAppStore()
  if(!appStore.token){
    whiteList.indexOf(to.path) !== -1 ? next() : next(`login?redirect=${to.path}`)
    return
  }
  if(appStore.token && to.path === '/login'){
    next({path:'/'})
    return
  } 
  next()
})
export default router