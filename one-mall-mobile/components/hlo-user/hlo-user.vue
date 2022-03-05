<template>
  <view class="hloUser">
    <uni-card>
      <view class="user">
        <view class="userInfo">
          <image
            class="avatar"
            src="../../static/tabBar/cart-active.png"
            mode="aspectFit"
          ></image>
          <view class="userInfoRight">
            <text class="nickname">{{ nickname }}</text>
            <text class="signature">{{ signature }}</text>
          </view>
        </view>
      </view>
    </uni-card>
    <uni-card title="我的订单">
      <view class="order">
        <navigator>
          <uni-icons type="wallet" size="30"></uni-icons>
          待付款
        </navigator>
        <navigator>
          <uni-icons type="paperplane" size="30"></uni-icons>
          待发货
        </navigator>
        <navigator>
          <uni-icons type="download" size="30"></uni-icons>
          待收货
        </navigator>
        <navigator>
          <uni-icons type="chat" size="30"></uni-icons>
          待评价
        </navigator>
        <navigator>
          <uni-icons type="calendar" size="30"></uni-icons>
          全部订单
        </navigator>
      </view>
    </uni-card>
    <uni-card title="我的服务">
      <view class="service">
        <navigator>地址管理</navigator>
        <navigator>意见反馈</navigator>
        <navigator>联系客服</navigator>
        <navigator>关于我们</navigator>
      </view>
    </uni-card>
  </view>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'hlo-user',
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      nickname: 'nickname',
      signature: 'signature'
    })
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
