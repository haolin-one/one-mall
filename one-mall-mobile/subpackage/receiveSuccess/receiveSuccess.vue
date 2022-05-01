<template>
  <view class="receiveSuccess">
    <view class="text">
      <uni-icons type="checkmarkempty"></uni-icons>
      <text>交易成功</text>
    </view>
    <view class="btnGroup">
      <view class="btnLeft" @click="gotoIndex">
        <button size="mini">返回首页</button>
      </view>
      <view class="btnRight" @click="gotoComment">
        <button size="mini">立即评价</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  onLoad(payload) {
    console.log(JSON.parse(payload.orderItem));
    this.orderItem = JSON.parse(payload.orderItem);
  },
  data() {
    return {
      orderItem: []
    };
  },
  methods: {
    gotoIndex() {
      uni.switchTab({
        url: '../../pages/index/index'
      });
    },
    gotoComment() {
      uni.navigateTo({
        url: '../comment/comment?orderItem=' + JSON.stringify(this.orderItem)
      });
    }
  }
};
</script>

<style lang="scss">
.receiveSuccess {
  width: 100vw;
  height: 100vh;
  .text {
    padding: 20px 0;
    text-align: center;
    text {
      font-weight: 600;
      margin-left: 3px;
    }
  }
  .btnGroup {
    display: flex;
    justify-content: space-around;
    button {
      border: 1px solid #087dd8;
      border-radius: 30px;
      overflow: hidden;
    }
  }
}
</style>
