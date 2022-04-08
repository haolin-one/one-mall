<template>
  <view class="hlo-confirm-order-goods">
    <block v-for="goods in goodsInfo" :key="goods.id">
      <uni-card title="商品信息">
        <view class="goodsInfo">
          <view class="leftGoodsInfo">
            <image :src="goods.picture" mode="aspectFit"></image>
          </view>
          <view class="rightGoodsInfo">
            <text class="name">{{ goods.description }}</text>
            <view class="cap">
              <text class="price">￥{{ goods.price }}</text>
              <uni-number-box
                v-model="goods.count"
                :min="1"
                :max="999"
              ></uni-number-box>
            </view>
          </view>
        </view>
      </uni-card>
    </block>
    <view class="footer">
      <view class="orderInfo">
        <text class="count">共{{ goodsCount }}件</text>
        合计:￥
        <text class="price">{{ totalPrice }}</text>
      </view>
      <view class="submitBtn">
        <button type="default" size="mini" @click="submitOrder">
          提交订单
        </button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'hlo-comfirm-order-goods',
  props: {
    goodsInfo: {
      required: true
    }
  },
  emits: ['submitOrder'],
  data() {
    return {};
  },
  methods: {
    submitOrder() {
      this.$emit('submitOrder', {
        goods_id: this.goodsIds,
        count: this.goodsCount,
        total_amount: this.totalPrice
      });
    }
  },
  computed: {
    totalPrice() {
      let price = 0;
      console.log(this.goodsInfo);
      this.goodsInfo.forEach((item) => {
        price += item.price * item.count;
      });
      return price.toFixed(2);
    },
    goodsCount() {
      let count = 0;
      this.goodsInfo.forEach((item) => {
        count += item.count;
      });
      return count;
    },
    goodsIds() {
      const ids = [];
      this.goodsInfo.forEach((item) => {
        ids.push(item.id);
      });
      return ids;
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
