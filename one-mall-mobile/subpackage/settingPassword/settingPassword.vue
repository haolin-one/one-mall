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
      <uni-forms-item label="用户名">
        <uni-easyinput
          disabled="true"
          v-model="userInfo.username"
        ></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item label="原密码" name="oldPassword">
        <uni-easyinput
          type="password"
          v-model="formData.oldPassword"
          placeholder="填写原密码"
        ></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item label="新密码" name="newPassword">
        <uni-easyinput
          type="password"
          v-model="formData.newPassword"
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
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      rules: {
        newPassword: {
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
                if (value !== this.formData.newPassword) {
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
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    async editPassword() {
      try {
        const result = await this.$refs.settingPasswordForm.validate();
        console.log(result);
        return;
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
