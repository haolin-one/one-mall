<template>
  <view class="orderDetail">
    <hlo-address :receiverInfo="orderInfo"></hlo-address>
    <uni-card>
      <block v-for="goods in orderItem" :key="goods.id">
        <view class="goodsInfo" @click="gotoDetail(goods.goodsID)">
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
      <view class="otherInfo">
        <view class="title"> 实付款 </view>
        <view class="content"> ￥{{ orderInfo.total_amount }} </view>
      </view>
      <view class="otherInfo">
        <view class="title"> 订单编号 </view>
        <view class="content">
          {{ orderInfo.order_sn }}
        </view>
      </view>
      <view class="otherInfo">
        <view class="title"> 创建时间 </view>
        <view class="content">
          {{ orderInfo.createAt }}
        </view>
      </view>
    </uni-card>
    <hlo-order-footer
      class="detailFooter"
      :orderInfo="orderInfo"
    ></hlo-order-footer>
  </view>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'hlo-address',
  onLoad(options) {
    this.orderItem = JSON.parse(options.goods).orderItem;
    this.orderInfo = JSON.parse(options.goods).orderInfo;
  },
  data() {
    return {
      orderItem: [],
      orderInfo: {}
    };
  },
  methods: {
    gotoDetail(id) {
      uni.navigateTo({
        url: `../goodsDetail/goodsDetail?id=` + id
      });
    }
  },
};
</script>

<style lang="scss">
@import './style.scss';
</style>
