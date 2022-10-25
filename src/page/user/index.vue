<template>
  <div>
    用户管理-----
    <el-button type="primary" v-permission="PermissionEnum.UESR_LIST_CREATE">创建用户</el-button>
  </div>
</template>

<script setup lang='ts'>
import {PermissionEnum} from '@/config/permisson.config'
</script>

<style scoped lang='scss'>

</style>