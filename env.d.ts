/// <reference types="vite/client" />
export {}
 
declare module 'vue' {
  interface ComponentCustomProperties {
    $filters: any
  }
}