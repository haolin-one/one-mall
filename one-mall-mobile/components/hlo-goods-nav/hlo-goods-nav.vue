<template>
  <view class="goodsNav">
    <uni-goods-nav
      :options="options"
      :buttonGroup="buttonGroup"
    ></uni-goods-nav>
  </view>
</template>

<script>
export default {
  name: 'hlo-goods-nav',
  data() {
    return {
      options: [
        {
          icon: 'headphones',
          text: '客服'
        },
        {
          icon: 'shop',
          text: '店铺',
          info: 2,
          infoBackgroundColor: '#007aff'
        },
        {
          icon: 'cart',
          text: '购物车',
          info: 2,
          infoBackgroundColor: '#007aff'
        }
      ],
      buttonGroup: [
        {
          text: '加入购物车',
          backgroundColor: '#1e83ff',
          color: '#fff'
        },
        {
          text: '立即购买',
          backgroundColor: '#0154ba',
          color: '#fff'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.goodsNav {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
