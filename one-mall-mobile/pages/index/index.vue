<template>
  <view class="home">
    <hlo-search class="home-search" @searchBox="gotoSearch"></hlo-search>
    <index-swiper></index-swiper>
    <index-recommend></index-recommend>
    <text class="end">已经到底咯~</text>
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
  width: 100vw;
  height: 100%;
  .home-search {
    position: absolute;
    left: 10%;
    width: 80%;
    z-index: 999;
    opacity: 0.7;
  }
  .end {
    display: block;
    padding: 10px 0;
    color: #a3a6ad;
    text-align: center;
  }
}
</style>
