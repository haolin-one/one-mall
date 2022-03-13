<template>
  <view class="hlo-order-item">
    <uni-card>
      <view class="goodsInfo">
        <view class="leftGoodsInfo">
          <image :src="goods.pic" mode="aspectFit"></image>
        </view>
        <view class="rightGoodsInfo">
          <text class="name">{{ goods.description }}</text>
          <view class="cap">
            <text class="price">￥{{ goods.price }}</text>
          </view>
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
