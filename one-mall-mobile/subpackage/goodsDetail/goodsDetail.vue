<template>
  <view class="goodsDetail">
    <view class="goodsInfo">
      <image :src="goodsDetail.pic"></image>
      <text class="price">￥{{ goodsDetail.price }}</text>
      <text class="description">{{ goodsDetail.description }}</text>
    </view>
    <hlo-goods-nav></hlo-goods-nav>
  </view>
</template>

<script>
export default {
  onLoad(options) {
    console.log(options);
    uni.hloRequest({
      url: `goods/${options.id}`,
      success: (res) => {
        this.goodsDetail = res.data;
        console.log(res.data);
      }
    });
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
