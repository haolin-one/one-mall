<template>
  <view class="comment">
    <uni-card>
      <block v-for="goods in orderItem" :key="goods.id">
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
        <view class="rateStart">
          <view class="correspond">
            <text>描述相符</text>
            <uni-rate
              v-model="goods.correspond"
              color="#bbb"
              active-color="#087dd8"
            />
          </view>
          <view class="logistics">
            <text>物流速度</text>
            <uni-rate
              v-model="goods.logistics"
              color="#bbb"
              active-color="#087dd8"
            />
          </view>
          <view class="manner">
            <text>客服服务</text>
            <uni-rate
              v-model="goods.manner"
              color="#bbb"
              active-color="#087dd8"
            />
          </view>
        </view>
      </block>
    </uni-card>
    <button type="default" @click="confirmComment">提交评价</button>
  </view>
</template>

<script>
export default {
  onLoad(payload) {
    this.orderItem = JSON.parse(payload.orderItem);
  },
  data() {
    return {
      orderItem: []
    };
  },
  methods: {
    async confirmComment() {
      const res = await uni.hloRequest.post({
        url: 'order/confirmComment',
        data: this.orderItem
      });
      uni.switchTab({
        url: '../../pages/my/my'
      });
      uni.showToast({
        title: res,
        icon: 'none'
      });
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
