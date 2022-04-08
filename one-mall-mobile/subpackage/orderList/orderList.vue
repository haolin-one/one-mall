<template>
  <view class="orderList">
    <view v-for="order in orderList" :key="order.id">
      <view class="orderItem">
        <uni-card>
          <block v-for="goods in order.orderItem" :key="goods.id">
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
            <text class="totalAmountInfo">{{ order.orderInfo.total_amount }}</text>
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
    this.$store.dispatch('getOrder',options)
  },
  data() {
    return {
      
    };
  },
  methods: {
    gotoOrderDetail() {
      uni.navigateTo({
        url:
          '../../subpackage/orderDetail/orderDetail?goods=' +
          JSON.stringify({
            orderItem: this.orderList.orderItem,
            orderInfo: this.orderList.orderInfo
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
@import './style.scss'
</style>
