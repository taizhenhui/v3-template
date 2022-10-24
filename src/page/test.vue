<template>
  <div class="test">
    <h1>this is test page</h1>
    <button @click="go">go home</button>
    <h1>{{test.phoneHidden}}</h1>
    <el-button @click="add" type="primary"> 加 {{test.count}}</el-button>
    <el-button @click="reducePage"> 减 {{test.count}}</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { testStore } from "../store/test";

const test = testStore()
const router = useRouter()
const go = () => {
  router.push('/')
}
const add = () => {
  test.addState()
}
const reducePage = ()=>{
  test.count--
  test.phone = '17808098401'
}
</script>

<style scoped lang=''>

</style>
