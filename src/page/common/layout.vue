<template>
  <div class="common-layout">
    <el-container class="container-box">
      <side-bar />
      <el-container class="con-box">
        <Header class="Header"/>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import Header from './header.vue'
import SideBar from './sidebar.vue'
</script>

<style scoped lang='scss'>
.container-box{
  width: 100vw;
  height:100vh;
  background-color: #eee;
  display: flex;
}
.Aside{
  width: 250px;
  height: 100vh;
  background-color: #fff;
}
.Header{
  width: 100%;
  height: 60px;
  background-color: #fff;
}
.con-box{
  display: flex;
  flex-direction: column;
}
</style>