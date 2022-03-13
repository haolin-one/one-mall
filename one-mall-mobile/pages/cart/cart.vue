<template>
  <view class="cart">
    <block v-if="userId">
      <view class="goodsInfo" v-for="goods in cart" :key="goods.id">
        <view class="leftGoodsInfo">
          <radio
            :checked="goods.select_status"
            color="#007AFF"
            @click="changeRadioHandle"
          ></radio>
          <image :src="goods.pic" mode="aspectFit"></image>
        </view>
        <view class="rightGoodsInfo">
          <text class="name">{{ goods.description }}</text>
          <view class="cap">
            <text class="price">￥{{ goods.price }}</text>
            <uni-number-box
              v-model="goods.count"
              :min="1"
              :max="999"
            ></uni-number-box>
          </view>
        </view>
      </view>
      <view class="footer">
        <view class="orderInfo">
          <text class="count">共{{ totalCount }}件</text>
          合计:￥
          <text class="price">{{ totalPrice }}</text>
        </view>
        <view class="submitBtn">
          <button type="default" size="mini">提交订单</button>
        </view>
      </view>
    </block>
    <block v-else>请先登录!</block>
  </view>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('cart', ['cart']),
    ...mapGetters('cart', ['totalCount', 'totalPrice']),
    ...mapGetters({
      userId: 'userId'
    })
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
