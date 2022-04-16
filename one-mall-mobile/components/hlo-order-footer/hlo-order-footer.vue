<template>
  <view class="hlo-order-footer">
    <view class="footer">
      <view v-if="orderInfo.order_status === 0">
        <button type="default" size="mini">去付款</button>
      </view>
      <view v-if="orderInfo.order_status === 1">
        <button type="default" size="mini" @click="updateAddress">
          修改地址
        </button>
      </view>
      <view v-if="orderInfo.order_status === 2">
        <button type="default" size="mini" @click="confirmReceive">
          确认收货
        </button>
      </view>
      <view v-if="orderInfo.order_status === 3">
        <button type="default" size="mini">去评价</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'hlo-order-footer',
  props: {
    orderInfo: {
      required: true
    }
  },
  methods: {
    updateAddress() {
      uni.navigateTo({
        url:
          '../../subpackage/updateAddress/updateAddress?orderInfo=' +
          JSON.stringify(this.orderInfo)
      });
    },
    confirmReceive() {}
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
