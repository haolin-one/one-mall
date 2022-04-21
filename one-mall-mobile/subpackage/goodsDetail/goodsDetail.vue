<template>
  <view class="goodsDetail">
    <view class="goodsInfo">
      <image
        class="picture"
        mode="aspectFill"
        :src="goodsDetail.picture"
      ></image>
      <text class="price">￥{{ goodsDetail.price }}</text>
      <text class="description">{{ goodsDetail.description }}</text>
    </view>
    <image class="priceDescript" src="../../static/priceDescript.jpg"></image>
    <hlo-goods-nav
      @goodsNavRightButtonClick="goodsNavRightButtonClick"
      @goodsNavLeftButtonClick="goodsNavLeftButtonClick"
      :goods="goodsDetail"
    ></hlo-goods-nav>
    <uni-popup class="popup" ref="popup" type="bottom" background-color="#fff">
      <view class="count">
        <text>购买数量</text>
        <uni-number-box
          v-model="goodsDetail.count"
          :min="1"
          :max="999"
        ></uni-number-box>
      </view>
      <button type="default" @click="confirmBuy">确认</button>
    </uni-popup>
  </view>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  async onLoad(options) {
    const res = await uni.hloRequest.get({
      url: `goods/${options.id}`
    });
    this.goodsDetail = {
      ...res,
      count: 1
    };
  },
  data() {
    return {
      goodsDetail: {},
      clickIndex: 0
    };
  },
  computed: {
    ...mapGetters({
      userId: 'userId'
    })
  },
  methods: {
    ...mapActions('cart', ['getCart', 'updateCart']),
    goodsNavRightButtonClick(index) {
      this.clickIndex = index;
      this.$refs.popup.open();
    },
    goodsNavLeftButtonClick(index) {
      if (index === 2) {
        uni.switchTab({
          url: '../../pages/cart/cart'
        });
      }
    },
    confirmBuy() {
      if (this.clickIndex === 0) {
        this.updateCart({
          ...this.goodsDetail,
          select_status: 1,
          user_id: this.userId
        });
        this.getCart(this.userId);
        this.$refs.popup.close();
      } else if (this.clickIndex === 1) {
        uni.navigateTo({
          url:
            '../../subpackage/order/order?goods=' +
            JSON.stringify([this.goodsDetail])
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
