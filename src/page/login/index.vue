<template>
  <div class="login_container">
    <div class="container">
      <el-card>
        <h1 class="title">后台管理系统</h1>
        <el-form
          ref="ruleFormRef"
          :model="loginForm"
          :rules="rules"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" :prefix-icon="User" placeholder="请输入用户名"/>
          </el-form-item>
        
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" :prefix-icon="Connection" placeholder="请输入密码"/>
          </el-form-item>

        </el-form>
        <el-button class="login_btn" type="primary" @click="submitForm(ruleFormRef)" :loading="loading">登陆</el-button>
      </el-card>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useAppStore, useUserStoer} from '@/store'
import { useRouter } from 'vue-router'

const ruleFormRef = ref<FormInstance>()
const loginForm = reactive<TokenRequest>({
  username:'',
  password:'',
})

const rules = reactive<FormRules>({
  username: [
    { required: true, message: '账号不能为空' },
  ],
  password: [
    { required: true, message: '密码不能为空' },
  ],
})
const loading = ref(false)
const appStore = useAppStore()
const userStore = useUserStoer()
const router = useRouter()
const submitForm = async (formEl: FormInstance | undefined) => {
  
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try{
        loading.value = true
        await appStore.login(loginForm)
        await userStore.fetchCurrentUser()
        await ElMessage({
          message: '登陆成功',
          type: 'success',
        })
        await router.push('/')
      } finally {
        loading.value = false
      }

    } else {
      // console.log('error submit!', fields)
    }
  })
}
onMounted(() => {
 
})
</script>

<style scoped lang='scss'>
.login_container{
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  .container{
    width: 400px;
    .title{
      width: 100%;
      text-align: center;
      font-weight: 600;
      font-size: 30px;
      margin-bottom: 20px;
    }
    .login_btn{
      width: 100%;
    }
  }
}
</style>