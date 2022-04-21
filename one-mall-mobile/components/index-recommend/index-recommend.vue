<template>
  <view class="index-recommend">
    <view class="title">商品推荐</view>
    <uni-row>
      <uni-col :span="12" v-for="item in recommend" :key="item.id">
        <view class="recommendItem" @click="gotoDetail(item.id)">
          <image mode="aspectFill" :src="item.picture"></image>
          <text class="description">{{ item.description }}</text>
          <text class="price">{{ '￥' + item.price }}</text>
        </view>
      </uni-col>
    </uni-row>
  </view>
</template>

<script>
export default {
  name: 'index-recommend',
  async created() {
    this.recommend = await uni.hloRequest.get({
      url: 'home/recommend'
    });
  },
  methods: {
    gotoDetail(id) {
      uni.navigateTo({
        url: '../../subpackage/goodsDetail/goodsDetail?id=' + id
      });
    }
  },
  data() {
    return {
      recommend: []
    };
  }
};
</script>

<style lang="scss">
.index-recommend {
  width: 100%;
  height: 100%;
  .title {
    margin: 20px 0 0 5px;
    padding-bottom: 5px;
    text-align: center;
    color: #087dd8;
    font-weight: 700;
    width: 97%;
    border-bottom: 1px solid #087dd8;
  }
  .recommendItem {
    height: 480rpx;
    margin: 10px 5px 0 5px;
    background-color: #ffffff;
    position: relative;
    image {
      width: 100%;
      height: 70%;
    }
    text {
      padding: 0 5px;
    }
    .description {
      font-size: 24rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      position: absolute;
      right: 2px;
      bottom: 2px;
      color: red;
    }
  }
}
</style>
