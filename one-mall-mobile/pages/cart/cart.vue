<template>
  <view class="cart">
    <view>
      <view class="goodsList" v-for="goods in cart" :key="goods.id">
        <view class="goodsInfo">
          <view class="leftGoodsInfo">
            <radio
              :disabled="goods.stock===0"
              :checked="goods.stock!==0?goods.select_status:false"
              color="#007AFF"
              @click="changeRadioHandle(goods.c_id, goods.select_status,goods.stock)"
            ></radio>
            <image
              :src="goods.picture"
              mode="aspectFit"
              @click="gotoDetail(goods.id)"
            ></image>
          </view>
          <view class="rightGoodsInfo">
            <text class="name" @click="gotoDetail(goods.id)">{{
              goods.description
            }}</text>
            <view class="otherInfo">
              <view class="stock">
                <text v-if="goods.stock !== 0">库存：{{ goods.stock }}</text>
                <text v-if="goods.stock === 0" class="notStock">商品已下架</text>
              </view>
              <view class="cap">
                <text class="price">￥{{ goods.price }}</text>
                <uni-number-box
                  @change="bindChange($event, goods)"
                  v-model="goods.count"
                  :min="1"
                  :max="goods.stock"
                >
                </uni-number-box>
              </view>
            </view>
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
          <button type="default" size="mini" @click="settlement" :disabled="totalCount === 0">结算</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  onShow() {
    if (!this.userId) {
      uni.redirectTo({
        url: '../../subpackage/login/login'
      });
    }
  },
  methods: {
    ...mapActions('cart', ['getCart', 'updateCart', 'changeSelectCart']),
    gotoDetail(id) {
      uni.navigateTo({
        url: `../../subpackage/goodsDetail/goodsDetail?id=` + id
      });
    },
    bindChange(e, goods) {
      const step = e - goods.count;
      this.updateCart({
        ...goods,
        count: step
      });
    },
    async changeRadioHandle(c_id, status,stock) {
      if(stock!==0){
        await this.changeSelectCart({
          c_id,
          status
        });
        this.getCart(this.userId);
      }else{
        uni.showToast({
          title: '商品已经下架咯~'
        })
      }
    },
    settlement() {
      let selectGoods = [];
      this.cart.forEach((item) => {
        if (item.select_status === 1) {
          selectGoods.push(item);
        }
      });
      uni.navigateTo({
        url: '../../subpackage/order/order?goods=' + JSON.stringify(selectGoods)
      });
    }
  },
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
