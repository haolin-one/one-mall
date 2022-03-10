<template>
  <view class="goodsNav">
    <uni-goods-nav
      :options="options"
      :buttonGroup="buttonGroup"
      @buttonClick="goodsNavRightButtonClick"
      @click="goodsNavLeftButtonClick"
    ></uni-goods-nav>
  </view>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'hlo-goods-nav',
  props: {
    goods: {
      required: true
    }
  },
  emit: ['goodsNavRightButtonClick', 'goodsNavLeftButtonClick'],
  data() {
    return {
      options: [
        {
          icon: 'headphones',
          text: '客服'
        },
        {
          icon: 'shop',
          text: '店铺'
        },
        {
          icon: 'cart',
          text: '购物车'
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
  },
  methods: {
    goodsNavRightButtonClick(e) {
      this.$emit('goodsNavRightButtonClick', e.index);
    },
    goodsNavLeftButtonClick(e) {
      this.$emit('goodsNavLeftButtonClick', e.index);
    }
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
