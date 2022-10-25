import { defineStore } from "pinia";
import type { UserType } from '@/api/types'
import { me } from '@/api/modules/user'
import { usePermissionStore } from '@/store'
type UserState = {
  currentUser: UserType | null
}

export const useUserStoer = defineStore('user', {
  state: (): UserState => {
    return {
      currentUser: null
    }
  },
  actions: {
    async fetchCurrentUser() {
      this.currentUser = await me()
      // Todo:超级管理员机制
      usePermissionStore().generateRoutes(this.currentUser.permissions)
    }
  },
  persist: {
    enabled: true, // 这个配置代表存储生效，而且是整个store都存储
  }
})
