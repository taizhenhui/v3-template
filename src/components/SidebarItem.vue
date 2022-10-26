<template>
  <div>
    <el-menu-item v-if="item && !item.children" :index="item.name" @click="selectItem">
      <el-icon >
        <component :is="item.meta.icon" />
      </el-icon>
      <template #title> {{item.meta.title}} </template>
    </el-menu-item>
    <el-sub-menu :index="item.name" class="sub_menu_sty" :class="{closeFont: appStore.menuCollapse}" v-if="item && item.children">
      <template #title>
        <el-icon >
          <component :is="item.meta.icon" />
        </el-icon>      
        <span>{{item.meta.title}}</span>
      </template>
      <sidebar-item v-for="subItem in item.children" :key="subItem.name" :item="subItem" />
    </el-sub-menu>
  </div>
</template>

<script setup lang='ts'>
import { useAppStore } from "@/store";
import SidebarItem from "@/components/SidebarItem.vue"
import { useRouter } from "vue-router";
 const porps = defineProps({
  item:{
    type:Object,
    default:null
  }
})
console.log(porps.item,'item');

const appStore = useAppStore();
const router = useRouter()
const selectItem = (val: { index: string; }) => {
  appStore.activeIndex = val.index;
  router.push({ name: val.index })
};
</script>

<style scoped lang='scss'>

::v-deep(.closeFont){
  .el-sub-menu__title{
    .el-sub-menu__icon-arrow, span{
      display: none;
    }
  }
}
</style>