<template>
  <view class="settinfUserInfo">
    <uni-card>
      <view class="user">
        <view class="userInfo">
          <image
            class="avatar"
            src="../../static/tabBar/cart-active.png"
            mode="aspectFit"
          ></image>
          <view class="userInfoRight">
            <text class="nickname">{{ userInfo.nickname }}</text>
            <text class="username">用户名：{{ userInfo.username }}</text>
          </view>
        </view>
      </view>
    </uni-card>
    <uni-card title="基础信息管理">
      <uni-forms
        class="settinfUserInfoForm"
        ref="editUserInfoForm"
        :modelValue="formData"
      >
        <uni-forms-item name="username">
          <view class="formItem">
            <text class="label">用户名:</text>
            <input
              type="text"
              v-model="formData.username"
              :placeholder="userInfo.username"
            />
          </view>
        </uni-forms-item>
        <uni-forms-item name="nickname">
          <view class="formItem">
            <text class="label">昵称:</text>
            <input
              type="text"
              v-model="formData.nickname"
              :placeholder="userInfo.nickname"
            />
          </view>
        </uni-forms-item>
        <uni-forms-item name="personalized_signature">
          <view class="formItem">
            <text class="label">个性签名:</text>
            <input
              type="text"
              v-model="formData.personalized_signature"
              :placeholder="userInfo.personalized_signature"
            />
          </view>
        </uni-forms-item>
        <uni-forms-item class="phone">
          <view class="formItem">
            <text class="label">电话号码:</text>
            <input
              type="text"
              v-model="formData.phone"
              :placeholder="userInfo.phone"
            />
          </view>
        </uni-forms-item>
        <button @click="editUserInfo">确定修改</button>
      </uni-forms>
    </uni-card>
    <view class="logout" @click="signOut">
      <text>退出登录</text>
    </view>
  </view>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  onReady() {
    // 需要在onReady中设置规则
    this.$refs.editUserInfoForm.setRules(this.rules);
  },
  data() {
    return {
      formData: { ...this.$store.getters.userInfo },
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
        }
      }
    };
  },
  methods: {
    ...mapActions('user', ['logout', 'editUserAction']),
    ...mapMutations('cart', ['removeCart']),
    signOut() {
      uni.showModal({
        content: '确定退出?',
        success: () => {
          uni.switchTab({
            url: '/pages/index/index'
          });
          this.logout();
          this.removeCart();
        }
      });
    },
    async editUserInfo() {
      try {
        const result = await this.$refs.editUserInfoForm.validate();
        this.editUserAction(this.formData);
      } catch (e) {
        console.log(e);
      }
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'userInfo'
    })
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
