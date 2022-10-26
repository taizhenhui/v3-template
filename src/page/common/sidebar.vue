<template>
  <div class="">
    <el-aside
      :class="{ open: !appStore.menuCollapse, close: appStore.menuCollapse }"
    >
      <el-menu
        :default-active="appStore.activeIndex"
        class="el-menu-vertical-demo"
        :collapse="appStore.menuCollapse"
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        :collapse-transition="false"
      >
        <sidebar-item v-for="item in permissionStore.menuRoutes" :key="item.name" :item="item"/>
      </el-menu>
    </el-aside>
  </div>
</template>

<script setup lang='ts'>
import { useAppStore, usePermissionStore } from "@/store";
import SidebarItem from "@/components/SidebarItem.vue"
const appStore = useAppStore();
const permissionStore = usePermissionStore()
</script>

<style scoped lang='scss'>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu-vertical-demo {
  height: 100vh;
}
.el-menu {
  border-right: 0;
}
::v-deep(.el-sub-menu__title:hover) {
  background-color: #434a50 !important;
}
.title_sty {
  height: 60px;
}

.open {
  width: 200px;
  transition: 0.4s;
  background-color: #545c64;
}
.close {
  width: 64px;
  transition: 0.4s;
  background-color: #545c64;
}
</style>