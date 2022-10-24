import { defineStore } from 'pinia'

export const testStore = defineStore('test', {
  state: () => {
    return {
      count:0,
      phone:'17808098401'
    }
  },
  getters:{
    phoneHidden(state){
      console.log(state.phone,'statestate');
      return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
  },
  actions:{
    addState(){
      this.count++
      this.phone = '17800000000'
    },
    reduceState(){
        this.count--
    }
  },
  persist: {
    enabled: true , // 这个配置代表存储生效，而且是整个store都存储
  }
})