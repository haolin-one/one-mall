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
                :max="goods.stock"
              ></uni-number-box>
            </view>
          </view>
        </view>
        <view class="remark" @click="writeMark">
          <uni-easyinput
            v-model="remark"
            type="input"
            placeholder="备注信息,选填"
          ></uni-easyinput>
        </view>
      </uni-card>
    </block>
    <view class="footer">
      <view class="orderInfo">
        <text class="count">共{{ goodsTotalCount }}件</text>
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
    return {
      remark: ''
    };
  },
  methods: {
    submitOrder() {
      this.$emit('submitOrder', {
        goodsItem: this.goodsItem,
        remark: this.remark,
        totalCount: this.goodsTotalCount,
        total_amount: this.totalPrice
      });
    }
  },
  computed: {
    totalPrice() {
      let price = 0;
      this.goodsInfo.forEach((item) => {
        price += item.price * item.count;
      });
      return price.toFixed(2);
    },
    goodsTotalCount() {
      let count = 0;
      this.goodsInfo.forEach((item) => {
        count += item.count;
      });
      return count;
    },
    goodsItem() {
      const items = [];
      this.goodsInfo.forEach((item) => {
        items.push({
          goods_id: item.id,
          goods_count: item.count
        });
      });
      return items;
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
