<template>
  <div class="login">
    <transition name="el-zoom-in-center">
      <div v-show="show" class="login-form">
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

<script>
import { mapActions } from 'vuex';
export default {
  created() {
    setTimeout(() => {
      this.show = true;
    }, 10);
  },
  data() {
    return {
      show: false,
      loginForm: {
        username: 'admin',
        password: 'admin'
      }
    };
  },
  methods: {
    ...mapActions(['admin/login']),
    async handleLogin() {
      const result = await this['admin/login'](this.loginForm);
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
        this.$router.push('/main');
      }
    }
  }
};
</script>

<style lang="less">
@import './style.less';
</style>
