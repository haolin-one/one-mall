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
            <uni-number-box
              v-model="goods.count"
              :min="1"
              :max="999"
            ></uni-number-box>
          </view>
        </view>
      </view>
    </uni-card>
    <view class="footer">
      <view class="orderInfo">
        <text class="count">共{{ goodsCount }}件</text>
        合计:￥
        <text class="price">{{ totalPrice }}</text>
      </view>
      <view class="submitBtn">
        <button type="default" size="mini">提交订单</button>
      </view>
    </view>
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
