<template>
  <view class="goodsDetail">
    <view class="goodsInfo">
      <image :src="goodsDetail.pic"></image>
      <text class="price">￥{{ goodsDetail.price }}</text>
      <text class="description">{{ goodsDetail.description }}</text>
    </view>
    <hlo-goods-nav :goods="goodsDetail"></hlo-goods-nav>
  </view>
</template>

<script>
export default {
  async onLoad(options) {
    const res = await uni.hloRequest.get({
      url: `goods/${options.id}`
    });
    this.goodsDetail = res;
  },
  data() {
    return {
      goodsDetail: {}
    };
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
