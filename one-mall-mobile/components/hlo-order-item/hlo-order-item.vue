<template>
  <view class="hlo-order-item">
    <uni-card>
      <view class="goodsInfo">
        <view class="goodsPic">
          <image :src="goods.pic" mode="aspectFit"></image>
        </view>
        <view class="name">
          <text class="name">{{ goods.description }}</text>
        </view>
        <view class="cap">
          <text class="price">￥{{ goods.price }}</text>
          <text class="count">x 1</text>
        </view>
      </view>
      <view class="footer">
        <view v-if="goods.status === 0">
          <button type="default" size="mini">去付款</button>
        </view>
        <view v-if="goods.status === 1">
          <button type="default" size="mini">修改地址</button>
        </view>
        <view v-if="goods.status === 2">
          <button type="default" size="mini">确认收货</button>
        </view>
        <view v-if="goods.status === 3">
          <button type="default" size="mini">去评价</button>
        </view>
      </view>
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
  data() {
    return {};
  },
  computed: {
    totalPrice() {
      return (this.goods.price * this.goods.count).toFixed(2);
    },
    goodsCount() {
      return this.goods.count;
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
