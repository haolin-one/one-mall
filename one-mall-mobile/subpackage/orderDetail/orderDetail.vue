<template>
  <view class="orderDetail">
    <uni-card title="收货信息">
      <view class="address">
        <view class="icon">
          <uni-icons type="location"></uni-icons>
        </view>
        <view class="receiptInfo">
          <text class="addressInfo">{{ addressInfo }}</text>
          <view class="receiverInfo">
            <text class="receiver">{{ orderInfo.userName }}</text>
            <text class="phone">{{ orderInfo.telNumber }}</text>
          </view>
        </view>
      </view>
    </uni-card>
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
          {{ orderInfo.create_time }}
        </view>
      </view>
    </uni-card>
    <hlo-order-footer
      class="detailFooter"
      :status="orderInfo.status"
    ></hlo-order-footer>
  </view>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'hlo-address',
  onLoad(options) {
    this.orderItem = JSON.parse(options.goods).orderItem;
    this.orderInfo=JSON.parse(options.goods).orderInfo
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
  computed: {
    addressInfo() {
      return (
        this.orderInfo.provinceName +
        this.orderInfo.cityName +
        this.orderInfo.countyName +
        this.orderInfo.detailInfo
      );
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
