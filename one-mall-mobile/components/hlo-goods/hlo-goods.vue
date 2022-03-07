<template>
  <view class="hloGoods">
    <view class="leftGoodsInfo">
      <image :src="goods.pic"></image>
    </view>
    <view v-if="status === 'list'" class="rightGoodsInfo">
      <text class="name">{{ goods.description }}</text>
      <text class="price">￥{{ goods.price }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'hlo-goods',
  props: {
    goods: {
      default: {}
    },
    status: {
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.hloGoods {
  display: flex;
  justify-content: space-between;
  height: 240rpx;
  width: 100%;
  box-sizing: content-box;
  padding: 10px;

  .leftGoodsInfo {
    width: 240rpx;
    height: 100%;

    image {
      height: 100%;
      width: 100%;
    }
  }

  .rightGoodsInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 10px 0 20px;
    height: 100%;
    flex: 1;

    .name {
      font-size: 26rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .price {
      font-size: 28rpx;
      color: #e4393c;
    }
  }
}
</style>
