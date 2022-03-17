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
            <text class="receiver">{{ goods.userName }}</text>
            <text class="phone">{{ goods.telNumber }}</text>
          </view>
        </view>
      </view>
    </uni-card>
    <uni-card>
      <view class="goodsInfo">
        <view class="goodsPic">
          <image :src="goods.pic" mode="aspectFit"></image>
        </view>
        <view class="name">
          <text class="name">{{ goods.description }}</text>
        </view>
        <view class="cap">
          <text class="price">￥{{ goods.price }}</text>
          <text class="count">x {{ goods.goods_count }}</text>
        </view>
      </view>
      <view class="otherInfo">
        <view class="title"> 实付款 </view>
        <view class="content"> ￥{{ goods.total_amount }} </view>
      </view>
      <view class="otherInfo">
        <view class="title"> 订单编号 </view>
        <view class="content">
          {{ goods.order_sn }}
        </view>
      </view>
      <view class="otherInfo">
        <view class="title"> 创建时间 </view>
        <view class="content">
          {{ goods.create_time }}
        </view>
      </view>
    </uni-card>
    <view class="footer">
      <view v-if="goods.status === 0">
        <button type="default" size="mini">去付款</button>
      </view>
      <view v-if="goods.status === 1">
        <button type="default" size="mini">修改地址</button>
      </view>
      <view v-if="goods.status === 2">
        <button type="default" size="mini">确认收货</button>
      </view>
      <view v-if="goods.status === 3">
        <button type="default" size="mini">去评价</button>
      </view>
    </view>
  </view>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'hlo-address',
  onLoad(options) {
    this.goods = JSON.parse(options.goods);
    console.log(this.goods);
  },
  data() {
    return {
      goods: {}
    };
  },
  methods: {},
  computed: {
    addressInfo() {
      return (
        this.goods.provinceName +
        this.goods.cityName +
        this.goods.countyName +
        this.goods.detailInfo
      );
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
