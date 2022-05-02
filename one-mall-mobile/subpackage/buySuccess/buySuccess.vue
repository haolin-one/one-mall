<template>
  <view class="buySuccess">
    下单成功!
    <button type="default" size="mini" @click="gotoHome">返回首页</button>
    <button type="default" size="mini" @click="gotoOrder">查看订单</button>
  </view>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations(['clearOrder']),
    gotoHome() {
      uni.switchTab({
        url: '../../pages/index/index'
      });
    },
    gotoOrder() {
      const size = 10;
      const offset = 0;
      this.clearOrder();
      uni.redirectTo({
        url: `../../subpackage/orderList/orderList?userId=${this.userId}&order_status=1&size=${size}&offset=${offset}`
      });
    }
  },
  computed: {
    ...mapGetters({
      userId: 'userId'
    })
  }
};
</script>

<style lang="scss"></style>
