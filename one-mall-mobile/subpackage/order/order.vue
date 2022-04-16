<template>
  <view class="order">
    <hlo-address :receiverInfo="receiverInfo"></hlo-address>
    <hlo-comfirm-order-goods
      :goodsInfo="goodsInfo"
      @submitOrder="submitOrder"
    ></hlo-comfirm-order-goods>
    <hlo-confirm-order-pay></hlo-confirm-order-pay>
  </view>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  onLoad(options) {
    this.goodsInfo = JSON.parse(options.goods);
  },
  data() {
    return {
      goodsInfo: []
    };
  },
  methods: {
    ...mapActions(['addOrder']),
    submitOrder(goodsInfo) {
      this.addOrder({
        ...goodsInfo,
        ...this.$store.getters.address,
        userId: this.$store.getters.userId
      });
      uni.switchTab({
        url: '../../pages/my/my'
      });
    }
  },
  computed: {
    receiverInfo() {
      return this.$store.getters.address;
    }
  }
};
</script>

<style lang="scss">
.order {
  padding-bottom: 70px;
}
</style>
