import { defineStore } from "pinia";
import type { StoreDefinition } from "pinia";
import { createToken } from '@/api/modules/token'
import type { TokenRequest } from '@/api/types'
import { useUserStoer } from "./user";

type AppStore = {
  token:string,
}
export const useAppStore: StoreDefinition<string, AppStore> = defineStore('app',{
  state:() => {
    return {
      token:''
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
    enabled: true , // 这个配置代表存储生效，而且是整个store都存储
  }
})