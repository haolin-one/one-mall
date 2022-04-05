<template>
  <view class="hlo-order-item">
    <uni-card>
      <block v-for="goods in orderItem" :key="goods.id">
          <view class="goodsInfo" @click="gotoOrderDetail">
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
        </block>
        <view class="totalAmount">
          <text class="totalAmountInfo">实付款</text>
          ￥
          <text class="totalAmountInfo">{{ orderInfo.total_amount }}</text>
        </view>
      <hlo-order-footer :status="orderInfo.status"></hlo-order-footer>
    </uni-card>
  </view>
</template>

<script>
  export default {
    name: 'hlo-comfirm-order-goods',
    props: {
      goodsInfo: {
        required: true
      },
    },
    data() {
      return {
        orderItem:this.goodsInfo.orderItem,
        orderInfo:this.goodsInfo.orderInfo
      };
    },
    methods: {
      gotoOrderDetail() {
        uni.navigateTo({
          url: '../../subpackage/orderDetail/orderDetail?goods=' +
            JSON.stringify({orderItem:this.orderItem,orderInfo:this.orderInfo})
        });
      }
    }
  };
</script>

<style lang="scss">
  @import './style.scss';
</style>
