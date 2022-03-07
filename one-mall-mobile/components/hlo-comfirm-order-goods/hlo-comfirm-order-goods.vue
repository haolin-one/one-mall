<template>
  <view class="hlo-confirm-order-goods">
    <uni-card title="商品信息">
      <view class="goodsInfo">
        <view class="leftGoodsInfo">
          <image :src="goods.pic" mode="aspectFit"></image>
        </view>
        <view class="rightGoodsInfo">
          <text class="name">{{ goods.description }}</text>
          <view class="cap">
            <text class="price">￥{{ goods.price }}</text>
            <uni-number-box :min="1" :max="9"></uni-number-box>
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
  }
};
</script>

<style lang="scss">
.goodsInfo {
  display: flex;
  justify-content: space-between;
  height: 240rpx;
  width: 100%;
  box-sizing: content-box;
  padding: 10px;

  .leftGoodsInfo {
    width: 200rpx;
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
    margin: 0 10px 0 10px;
    height: 100%;
    flex: 1;

    .name {
      font-size: 26rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .cap {
      display: flex;
      justify-content: space-between;
      .price {
        font-size: 28rpx;
        color: #e4393c;
      }
    }
  }
}
</style>
