import { defineStore } from "pinia";
import type { UserType } from '@/api/types'
import { me } from '@/api/modules/user'
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
    }
  },
  persist: {
    enabled: true, // 这个配置代表存储生效，而且是整个store都存储
  }
})
