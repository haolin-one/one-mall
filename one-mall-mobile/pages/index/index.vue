<template>
  <view class="home">
    <page-search class="home-search"></page-search>
    <index-swiper></index-swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.home {
  position: relative;
  .home-search {
    position: absolute;
    left: 10%;
    width: 80%;
    z-index: 999;
    opacity: 0.7;
  }
}
</style>
