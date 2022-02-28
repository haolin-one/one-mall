<template>
  <view class="hloGoods">
      <view class="leftGoodsInfo">
        <image :src="goods.pic"></image>
      </view>
      <view class="rightGoodsInfo">
          <text class="name">{{goods.name}}</text>
          <text class="price">￥{{goods.price}}</text>
      </view>
  </view>
</template>

<script>
  export default {
    name:"hlo-goods",
    props:{
      goods:{
        default:[]
      }
    },
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">
.hloGoods{
  display: flex;
  justify-content: space-between;
  height: 240rpx;
  width: 100%;
  box-sizing: content-box;
  padding: 10px;
  .leftGoodsInfo{
    width: 240rpx;
    height: 100%;
    image{
      height: 100%;
      width: 100%;
    }
  }
  .rightGoodsInfo{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    height: 100%;
    flex: 1;
    .name{
      font-size: 28rpx;
    }
    .price{
      color: #e4393c;
    }
  }
}
</style>
