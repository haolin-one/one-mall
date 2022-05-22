<template>
  <view class="orderList">
    <view v-for="order in orderList" :key="order.orderInfo.id">
      <view class="orderItem">
        <uni-card>
          <view @click="gotoOrderDetail(order.orderItem, order.orderInfo)">
            <block v-for="goods in order.orderItem" :key="goods.id">
              <hlo-order-goods :goods="goods"></hlo-order-goods>
            </block>
          </view>
          <view class="totalAmount">
            <text class="totalAmountInfo">实付款:</text>
            ￥
            <text class="totalAmountInfo">{{
              order.orderInfo.total_amount
            }}</text>
          </view>
          <hlo-order-footer
            :orderItem="order.orderItem"
            :orderInfo="order.orderInfo"
          ></hlo-order-footer>
        </uni-card>
      </view>
    </view>
  </view>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  onLoad(options) {
    this.query = options;
    this.$store.dispatch('getOrder', options);
  },
  data() {
    return {
      query: {}
    };
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
  },
  onReachBottom() {
    this.$store.dispatch('getOrder', {
      ...this.query,
      offset: this.query.size * this.query.offset++
    });
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
