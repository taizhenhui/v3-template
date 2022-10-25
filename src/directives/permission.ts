import { useUserStoer } from "@/store";
import type { Directive, DirectiveBinding } from "vue";


const hasNotPerssion = (value: string) => {
  return useUserStoer().currentUser?.permissions.indexOf(value) === -1
}

export const permissionDirective: Directive = {
  mounted(el:Element, {value}: DirectiveBinding) {
    hasNotPerssion(value) && el.parentNode?.removeChild(el)
  }
}