<template>
  <view class="orderList">
    <view v-for="order in orderList">
      <hlo-order-item :goods="order"></hlo-order-item>
    </view>
  </view>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  onLoad(options) {
    this.getOrder(options.userId);
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(['getOrder'])
  },
  computed: {
    ...mapGetters({
      orderList: 'order'
    })
  }
};
</script>

<style lang="scss"></style>
