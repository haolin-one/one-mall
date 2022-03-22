<template>
  <view class="settingPassword">
    <uni-forms
      class="settingPasswordForm"
      ref="settingPasswordForm"
      :modelValue="formData"
    >
      <uni-forms-item>
        <text class="title"
          >请设置密码。你可以用绑定的账号+密码登录，比如手机号+密码登录。</text
        >
      </uni-forms-item>
      <uni-forms-item label="用户名" name="username">
        <uni-easyinput
          type="text"
          v-model="formData.username"
          placeholder="填写用户名"
        ></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item label="手机号码" name="phone">
        <uni-easyinput
          type="text"
          v-model="formData.phone"
          placeholder="填写手机号码"
        ></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item label="新密码" name="password">
        <uni-easyinput
          type="password"
          v-model="formData.password"
          placeholder="填写新密码"
        ></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item label="确认密码" name="confirmPassword">
        <uni-easyinput
          type="password"
          v-model="formData.confirmPassword"
          placeholder="再次填写确认"
        ></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item>
        <button @click="editPassword" type="default">完成</button>
      </uni-forms-item>
      <uni-forms-item>
        密码必须6-18位的包含大小写字母、数字、符号任意两者组合(不能是纯数字)
      </uni-forms-item>
    </uni-forms>
  </view>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      formData: {
        username: '',
        phone: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        username: {
          rules: [
            {
              required: true,
              errorMessage: '请输入用户名'
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
              // pattern:"^\S+?@\S+?\.\S+?$",
              pattern: /^[1]([3-9])[0-9]{9}$/,
              errorMessage: '手机号码格式不正确'
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
              maxLength: 18,
              errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符'
            },
            {
              pattern:
                /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-z]|[A-Z]|[0-9])+$/,
              errorMessage: '密码必须包含大小写字母/数字/符号任意两者组合'
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
        }
      }
    };
  },
  onReady() {
    // 需要在onReady中设置规则
    this.$refs.settingPasswordForm.setRules(this.rules);
  },
  methods: {
    async editPassword() {
      try {
        await this.$refs.settingPasswordForm.validate();
        const res = await uni.hloRequest.post({
          url: 'user/forgetPassword',
          data: this.formData
        });
        uni.redirectTo({
          url: '../login/login'
        });
        uni.showToast({
          title: res
        });
      } catch (e) {
        //TODO handle the exception
      }
    }
  }
};
</script>

<style lang="scss">
.settingPassword {
  background-color: #ffffff;
  height: 100vh;
  width: 100%;
  padding-top: 10px;
  .uni-forms {
    width: 90%;
    margin-left: 5%;

    .title {
      font-size: 12px;
      color: #a6a6a6;
    }
  }
}
</style>
