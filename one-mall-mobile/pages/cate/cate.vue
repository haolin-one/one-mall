<template>
  <view class="cate">
    <scroll-view class="scroll-view-left" scroll-y="true" show-scrollbar="true">
      <block v-for="cate in cateList" :key="cate.id" v-if="cate.parent_id === 0">
        <view>{{ cate.name }}</view>
      </block>
    </scroll-view>
    <scroll-view class="scroll-view-right" scroll-y="true">
      <view>我是分类</view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      cateList: []
    };
  },
  created() {
    uni.request({
      url: 'http://localhost:7777/goodsCate',
      success: (res) => {
        this.cateList = res.data;
        console.log(this.cateList);
      }
    });
  },
  methods: {}
};
</script>

<style lang="scss">
.cate {
  height: 100vh;
  display: flex;
  .scroll-view-left {
    width: 25vw;
    view {
      font-size: 26rpx;
      padding: 30rpx 0 30rpx 30rpx;
    }
  }
  .scroll-view-right {
    background-color: #ffffff;
    flex: 1;
  }
}
</style>
