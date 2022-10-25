<template>
  <div>
    <el-header class="header-box">
      <collapse-button v-model:collapse="appStore.menuCollapse"/>
      <el-dropdown trigger="click" class="header-r" @command="handleCommand">
        <el-button text >
          <el-icon  color="#999"><User /></el-icon>
          <span>{{userStore.currentUser && userStore.currentUser.nickname}}</span>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
  </div>
</template>

<script setup lang='ts'>
import { useAppStore, useUserStoer } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import CollapseButton from '@/components/CollapseButton.vue'
const userStore = useUserStoer()
const appStore = useAppStore()
const router = useRouter()
const route = useRoute()

const handleCommand = async (command: string | number | object) => {
  switch (command){
    case 'logout':
      await appStore.logout()
      await router.push(`login?redirect=${route.fullPath}`)
      break;
    default:
      throw new Error('该指令无设置任何操作')
  }
}

</script>

<style scoped lang='scss'>
.header-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-r{
  display: flex;
  align-items: center;
  span{
    margin-left: 10px;
  }
}
</style>