<template>
  <view class="order">
    <hlo-address></hlo-address>
    <hlo-comfirm-order-goods :goods="goodsInfo"></hlo-comfirm-order-goods>
    <hlo-confirm-order-pay></hlo-confirm-order-pay>
    <hlo-confirm-order-footer></hlo-confirm-order-footer>
  </view>
</template>

<script>
export default {
  onLoad(options) {
    this.goodsInfo = JSON.parse(options.goods);
  },
  data() {
    return {
      goodsInfo: {}
    };
  }
};
</script>

<style lang="scss"></style>
