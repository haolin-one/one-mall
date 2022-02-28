<template>
  <view class="home">
    <hlo-search class="home-search" @searchBox="gotoSearch"></hlo-search>
    <index-swiper></index-swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    gotoSearch() {
      uni.navigateTo({
        url: '../../subpackage/search/search'
      });
    }
  }
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
