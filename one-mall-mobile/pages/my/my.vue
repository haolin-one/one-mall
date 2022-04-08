<template>
  <view class="my">
    <uni-card @click="editUserInfo">
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
        <view @click="gotoOrderList(0)">
          <uni-icons type="wallet" size="30"></uni-icons>
          待付款
        </view>
        <view @click="gotoOrderList(1)">
          <uni-icons type="paperplane" size="30"></uni-icons>
          待发货
        </view>
        <view @click="gotoOrderList(2)">
          <uni-icons type="download" size="30"></uni-icons>
          待收货
        </view>
        <view @click="gotoOrderList(3)">
          <uni-icons type="chat" size="30"></uni-icons>
          待评价
        </view>
        <view @click="gotoOrderList(-1)">
          <uni-icons type="calendar" size="30"></uni-icons>
          全部订单
        </view>
      </view>
    </uni-card>
    <uni-card padding="0" title="我的服务">
      <uni-list>
        <uni-list-item
          :border="false"
          title="密码管理"
          link
          to="../../subpackage/settingPassword/settingPassword"
        ></uni-list-item>
        <!--        <uni-list-item :border="false" title="意见反馈" link></uni-list-item>
        <uni-list-item :border="false" title="联系客服" link></uni-list-item>
        <uni-list-item :border="false" title="关于我们" link></uni-list-item> -->
      </uni-list>
    </uni-card>
  </view>
</template>

<script>
import { mapState,mapGetters} from 'vuex';
export default {
  onShow() {
    if (!this.userInfo.id) {
      uni.redirectTo({
        url: '../../subpackage/login/login'
      });
    }
  },
  data() {
    return {};
  },
  methods: {
    editUserInfo() {
      uni.navigateTo({
        url: '../../subpackage/settingUserInfo/settingUserInfo'
      });
    },
    gotoOrderList(status) {
      uni.navigateTo({
        url: `../../subpackage/orderList/orderList?userId=${this.userId}&status=${status}`
      });
    }
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo
    }),
    ...mapGetters({
      nickname: 'nickname',
      signature: 'signature',
      userId: 'userId'
    })
  }
};
</script>

<style lang="scss">
@import './style.scss'
</style>
