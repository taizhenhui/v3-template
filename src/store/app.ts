import { defineStore } from "pinia";
import { createToken } from '@/api/modules/token'
import type { TokenRequest } from '@/api/types'
import { useUserStoer } from "./user";

type AppStore = {
  token: string,
  menuCollapse: boolean,
  activeIndex: string
}
export const useAppStore = defineStore('app', {
  state: (): AppStore => {
    return {
      token: '',
      menuCollapse: false,
      activeIndex: ''
    }
  },
  actions: {
    async login(loginForm: TokenRequest): Promise<void> {
      this.token = await createToken(loginForm)
    },
    async logout(): Promise<void> {
      const userStore = useUserStoer()
      this.token = ''
      userStore.$reset()
    }
  },
  persist: {
    enabled: true, // 这个配置代表存储生效，而且是整个store都存储
  }
})