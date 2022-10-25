import { routes } from "@/router";
import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";
import { MENU_ROUTE_NAME } from '@/router/index'
type PermissionState = {
  routes:Array<RouteRecordRaw>
}

const filterRoutes = (routes:Array<RouteRecordRaw>, permissions:Array<string>) => {
  console.log(routes, permissions);
  
  return routes.filter((route:RouteRecordRaw) => {
    if(route.children) route.children = filterRoutes(route.children, permissions)
    // 当 meta 或 meta.permisson 不存在 返回true
    // 当 meta 或 meta.permisson 存在 --> permissions 包含 route.meta.permisson 返回 true , 不包含返回 false
    return (route.meta && route.meta.permisson) ? permissions.includes(route.meta.permisson) : true
  })
}

export const usePermissionStore = defineStore('permission', {
  state: (): PermissionState => {
    return {
      routes:[]
    }
  },
  getters:{
    menuRoutes():Array<RouteRecordRaw> | undefined {
      return this.routes.find(
        (route:RouteRecordRaw) => route.name === MENU_ROUTE_NAME
      )?.children
    }
  },
  actions:{
    generateRoutes(permissions:Array<string>, admin = false) {
      this.routes = admin ? routes : filterRoutes(routes, permissions)
    }
  },
  persist: {
    enabled: true, // 这个配置代表存储生效，而且是整个store都存储
  }
})