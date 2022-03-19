<template>
  <view class="hlo-order-item">
    <uni-card>
      <view class="goodsInfo" @click="gotoOrderDetail">
        <view class="goodsPic">
          <image :src="goods.pic" mode="aspectFit"></image>
        </view>
        <view class="name">
          <text class="name">{{ goods.description }}</text>
        </view>
        <view class="cap">
          <text class="price">￥{{ goods.price }}</text>
          <text class="count">x {{ goods.goods_count }}</text>
        </view>
      </view>
      <view class="totalAmount">
        <text class="totalAmountInfo">实付款</text>
        ￥
        <text class="totalAmountInfo">{{ goods.total_amount }}</text>
      </view>
      <hlo-order-footer :status="goods.status"></hlo-order-footer>
    </uni-card>
  </view>
</template>

<script>
export default {
  name: 'hlo-comfirm-order-goods',
  props: {
    goods: {
      required: true
    }
  },
  methods: {
    gotoOrderDetail() {
      uni.navigateTo({
        url:
          '../../subpackage/orderDetail/orderDetail?goods=' +
          JSON.stringify(this.goods)
      });
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
