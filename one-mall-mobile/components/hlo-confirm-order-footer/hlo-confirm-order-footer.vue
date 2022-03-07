<template>
  <view class="footer">
    <view class="orderInfo">
      <text class="count">共1件</text>
      合计:￥
      <text class="price">19.87</text>
    </view>
    <view class="submitBtn">
      <button type="default" size="mini">提交订单</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'hlo-confirm-order-footer',
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #ffffff;
  height: 70px;
  .orderInfo {
    font-size: 13px;
    .count {
      padding-right: 5px;
      font-size: 13px;
      color: #8f9298;
    }
    .price {
      font-size: 16px;
      color: red;
      font-weight: 600;
    }
  }
  .submitBtn {
    margin: 0 10px;
    button {
      color: #ffffff;
      height: 40px;
      line-height: 40px;
      border-radius: 30px;
      background-color: #007aff;
    }
  }
}
</style>
