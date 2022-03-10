<template>
  <view class="settinfUserInfo">
    <uni-card title="管理我的账户">
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
      <uni-forms class="settinfUserInfoForm">
        <uni-forms-item>
          <view class="formItem">
            <text class="label">用户名:</text>
            <input type="text" :placeholder="userInfo.username" />
          </view>
          <view class="formItem">
            <text class="label">昵称:</text>
            <input type="text" :placeholder="userInfo.nickname" />
          </view>
          <view class="formItem">
            <text class="label">个性签名:</text>
            <input type="text" :placeholder="userInfo.personalized_signature" />
          </view>
          <view class="formItem">
            <text class="label">电话号码:</text>
            <input type="text" :placeholder="userInfo.phone" />
          </view>
        </uni-forms-item>
        <button>确定修改</button>
      </uni-forms>
    </uni-card>
    <view class="logout" @click="signOut">
      <text>退出登录</text>
    </view>
  </view>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions('user', ['logout']),
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
