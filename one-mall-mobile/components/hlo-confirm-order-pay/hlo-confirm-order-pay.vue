<template>
  <view class="hlo-confirm-order-pay">
    <uni-card>
      <radio-group @change="radioChange">
        <view class="radio">
          <radio checked value="wx">微信支付</radio>
        </view>
      </radio-group>
    </uni-card>
  </view>
</template>

<script>
export default {
  name: 'hlo-confirm-order-pay',
  data() {
    return {
      checkPayWay: ''
    };
  },
  methods: {
    radioChange(e) {
      console.log(e.detail.value);
    }
  }
};
</script>

<style lang="scss">
.hlo-confirm-order-pay {
  .radio {
    // margin-bottom: 15px;
  }
}
</style>
