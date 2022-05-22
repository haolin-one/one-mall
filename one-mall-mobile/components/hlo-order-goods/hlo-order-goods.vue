<template>
  <view class="hlo-order-goods">
    <view class="goodsInfo">
      <view class="goodsPic">
        <image :src="goods.picture" mode="aspectFit"></image>
      </view>
      <view class="name">
        <text class="name">{{ goods.description }}</text>
      </view>
      <view class="cap">
        <text class="price">￥{{ goods.price }}</text>
        <text class="count">x {{ goods.goods_count }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'hlo-order-goods',
  props: {
    goods: {
      required: true
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
