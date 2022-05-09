<template>
  <div class="login">
    <transition name="el-zoom-in-center">
      <div class="login-form">
        <h2 class="title">ONE-MALL 后台管理系统</h2>
        <el-form :model="loginForm">
          <el-form-item>
            <el-input
              v-model="loginForm.username"
              placeholder="请输入用户名"
              prefix-icon="el-icon-user"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginForm.password"
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="loginBtn" type="success" @click="handleLogin"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const loginForm = reactive({
  username: 'admin',
  password: 'admin'
});

const store = useStore();
const router = useRouter();

const handleLogin = async () => {
  const result = await store.dispatch('adminModule/loginAction', {
    loginForm: loginForm
  });
  console.log(result);
  if (!result.id) {
    ElMessage({
      message: result,
      type: 'error'
    });
  } else {
    ElMessage({
      message: '登陆成功~',
      type: 'success'
    });
    router.push('/');
  }
};
</script>

<style lang="less">
@import './style.less';
</style>
