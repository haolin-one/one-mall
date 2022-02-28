<template>
  <view class="swiper">
    <swiper
      :circular="true"
      :indicator-dots="true"
      :autoplay="true"
      :interval="3000"
      :duration="1000"
    >
      <block v-for="banner in banners" :key="banner.id">
        <swiper-item>
          <view class="swiper-item">
            <image :src="banner.img_url"></image>
          </view>
        </swiper-item>
      </block>
    </swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      banners: []
    };
  },
  created() {
    uni.hloRequest({
      url: 'banner',
      success: (res) => {
        this.banners = res.data;
      }
    });
  }
};
</script>

<style lang="scss">
.swiper {
  margin: 10rpx 20rpx;
  border-radius: 30rpx;
  overflow: hidden;
  swiper {
    width: 100%;
    height: 30vh;
    image {
      width: 100%;
      height: 30vh;
    }
  }
}
</style>
