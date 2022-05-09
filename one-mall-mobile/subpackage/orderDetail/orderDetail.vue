<template>
  <view class="orderDetail">
    <hlo-address :receiverInfo="orderInfo"></hlo-address>
    <uni-card title="商品信息">
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
        <view class="otherInfo" v-if="goods.remark">
          <view class="title"> 备注信息 </view>
          <view class="content"> {{ goods.remark }} </view>
        </view>
        <view class="rateStart" v-if="goods.correspond">
          <view class="otherInfo">
            <text>描述相符</text>
            <uni-rate
              v-model="goods.correspond"
              :readonly="true"
              color="#bbb"
              active-color="#087dd8"
            />
          </view>
          <view class="otherInfo">
            <text>物流速度</text>
            <uni-rate
              v-model="goods.logistics"
              :readonly="true"
              color="#bbb"
              active-color="#087dd8"
            />
          </view>
          <view class="otherInfo">
            <text>客服服务</text>
            <uni-rate
              v-model="goods.manner"
              :readonly="true"
              color="#bbb"
              active-color="#087dd8"
            />
          </view>
        </view>
      </block>
    </uni-card>
    <uni-card title="其他信息">
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
        <view class="title"> 下单时间 </view>
        <view class="content">
          {{ orderInfo.createAt }}
        </view>
      </view>
      <view class="otherInfo" v-if="orderInfo.delivery_time">
        <view class="title"> 发货时间 </view>
        <view class="content">
          {{ orderInfo.delivery_time }}
        </view>
      </view>
      <view class="otherInfo" v-if="orderInfo.receive_time">
        <view class="title"> 收货时间 </view>
        <view class="content">
          {{ orderInfo.receive_time }}
        </view>
      </view>
      <view class="otherInfo" v-if="orderInfo.comment_time">
        <view class="title"> 评价时间 </view>
        <view class="content">
          {{ orderInfo.comment_time }}
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
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
