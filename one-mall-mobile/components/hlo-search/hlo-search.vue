<template>
  <view class="my-search-container">
    <view class="my-search-box" @click="searchBox">
      <uni-icons type="search" size="17"></uni-icons>
      <text class="placeholder">搜索</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'page-search',
  props: {
    isFocus: {
      default: false
    }
  },
  emits: ['searchBox'],
  data() {
    return {};
  },
  methods: {
    searchBox() {
      this.$emit('searchBox');
    }
  }
};
</script>

<style lang="scss">
.my-search-container {
  display: flex;
  align-items: center;
  padding: 0 26rpx;
  height: 100rpx;
  .my-search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62rpx;
    width: 100%;
    background-color: #ffffff;
    border-radius: 18px;
    .placeholder {
      margin-left: 10rpx;
    }
  }
}
</style>
