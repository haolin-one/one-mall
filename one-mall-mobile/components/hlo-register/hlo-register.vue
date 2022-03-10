<template>
  <view class="register">
    <view class="registerForm">
      <uni-forms ref="registerForm" :modelValue="formData">
        <uni-forms-item name="username">
          <view class="formItem">
            <text class="label">用户名</text>
            <input
              class="input"
              type="text"
              v-model="formData.username"
              placeholder="请输入用户名"
            />
          </view>
        </uni-forms-item>
        <uni-forms-item name="phone">
          <view class="formItem">
            <text class="label">手机号</text>
            <input
              class="input"
              type="text"
              v-model="formData.phone"
              placeholder="请输入手机号"
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
        <uni-forms-item name="confirmPassword">
          <view class="formItem">
            <text class="label">确认密码</text>
            <input
              class="input"
              type="password"
              v-model="formData.confirmPassword"
              placeholder="请确认密码"
            />
          </view>
        </uni-forms-item>
      </uni-forms>
      <button @click="register">注册</button>
      <text class="goToLogin" @click="goToLogin">已有账号？去登陆 ></text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'hlo-register',
  emits: ['changeStatus'],
  methods: {
    async register() {
      try {
        const result = await this.$refs.registerForm.validate();
        console.log(result);
        const res = await uni.hloRequest.post({
          url: 'user/register',
          data: result
        });
        uni.showToast({
          title: res
        });
      } catch (e) {
        //TODO handle the exception
      }
    },
    goToLogin() {
      this.$emit('changeStatus');
    }
  },
  onReady() {
    // 需要在onReady中设置规则
    this.$refs.registerForm.setRules(this.rules);
  },
  data() {
    return {
      formData: {
        username: 'coderone',
        password: '123456',
        confirmPassword: '',
        phone: '19924688484'
      },
      rules: {
        username: {
          rules: [
            {
              required: true,
              errorMessage: '请输入用户名'
            },
            {
              minLength: 8,
              maxLength: 12,
              errorMessage: '用户名长度在 {minLength} 到 {maxLength} 个字符'
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
        },
        confirmPassword: {
          rules: [
            {
              required: true,
              errorMessage: '请确认密码'
            },
            {
              validateFunction: (rule, value, data, callback) => {
                if (value !== this.formData.password) {
                  callback('两次密码不一致');
                }
              }
            }
          ]
        },
        phone: {
          rules: [
            {
              required: true,
              errorMessage: '请输入手机号码'
            },
            {
              minLength: 11,
              maxLength: 11,
              errorMessage: '手机号码长度在为11个字符'
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
