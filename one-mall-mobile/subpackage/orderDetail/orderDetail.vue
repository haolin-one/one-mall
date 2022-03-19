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
      <view class="goodsInfo" @click="gotoDetail(goods.goodsID)">
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
    <hlo-order-footer
      class="detailFooter"
      :status="goods.status"
    ></hlo-order-footer>
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
