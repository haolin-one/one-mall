<template>
  <view class="login">
    <view class="loginForm">
      <uni-forms ref="loginForm" :modelValue="formData" :rules="rules">
        <uni-forms-item name="account">
          <view class="formItem">
            <text class="label">账号</text>
            <input
              class="input"
              type="text"
              v-model="formData.account"
              placeholder="请输入用户名/手机号"
            />
          </view>
        </uni-forms-item>
        <uni-forms-item name="password">
          <view class="formItem">
            <text class="label">密码</text>
            <input
              class="input"
              type="password"
              v-model="formData.password"
              placeholder="请输入密码"
            />
          </view>
        </uni-forms-item>
      </uni-forms>
      <button type="default" @click="login">登录</button>
      <view class="navigate">
        <navigator>忘记密码?</navigator>
        <text @click="goToRegister">注册</text>
      </view>
    </view>
  </view>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'hlo-login',
  emits: ['changeStatus'],
  methods: {
    ...mapActions(['user/login', 'cart/getCart']),
    async login() {
      try {
        const result = await this.$refs.loginForm.validate();
        await this['user/login'](this.formData);
        this['cart/getCart'](this.$store.getters.userId);
      } catch (e) {
        console.log(e);
      }
    },
    goToRegister() {
      this.$emit('changeStatus');
    }
  },
  data() {
    return {
      formData: {
        account: 'coderone',
        password: '123456'
      },
      rules: {
        account: {
          rules: [
            {
              required: true,
              errorMessage: '请输入账号'
            },
            {
              minLength: 8,
              maxLength: 12,
              errorMessage: '账号长度在 {minLength} 到 {maxLength} 个字符'
            }
          ]
        },
        password: {
          rules: [
            {
              required: true,
              errorMessage: '请输入密码'
            },
            {
              minLength: 6,
              maxLength: 20,
              errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符'
            }
          ]
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
