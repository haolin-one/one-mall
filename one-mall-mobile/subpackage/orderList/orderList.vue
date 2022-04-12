<template>
  <view class="orderList">
    <view v-for="order in orderList" :key="order.orderInfo.id">
      <view class="orderItem">
        <uni-card>
          <view @click="gotoOrderDetail(order.orderItem, order.orderInfo)">
            <block v-for="goods in order.orderItem" :key="goods.id">
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
            </block>
          </view>
          <view class="totalAmount">
            <text class="totalAmountInfo">实付款</text>
            ￥
            <text class="totalAmountInfo">{{
              order.orderInfo.total_amount
            }}</text>
          </view>
          <hlo-order-footer :status="order.orderInfo.status"></hlo-order-footer>
        </uni-card>
      </view>
    </view>
  </view>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  onLoad(options) {
    this.$store.dispatch('getOrder', options);
  },
  data() {
    return {};
  },
  methods: {
    gotoOrderDetail(orderItem, orderInfo) {
      uni.navigateTo({
        url:
          '../../subpackage/orderDetail/orderDetail?goods=' +
          JSON.stringify({
            orderItem: orderItem,
            orderInfo: orderInfo
          })
      });
    }
  },
  computed: {
    ...mapGetters({
      orderList: 'order'
    })
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
