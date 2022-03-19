<template>
  <view class="hlo-order-footer">
    <view class="footer">
      <view v-if="status === 0">
        <button type="default" size="mini">去付款</button>
      </view>
      <view v-if="status === 1">
        <button type="default" size="mini">修改地址</button>
      </view>
      <view v-if="status === 2">
        <button type="default" size="mini">确认收货</button>
      </view>
      <view v-if="status === 3">
        <button type="default" size="mini">去评价</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'hlo-order-footer',
  props: {
    status: {
      required: true
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
