<template>
  <view class="goodsList">
    <view v-for="item in goods" :key="item.id" @click="gotoDetail(item.id)">
      <hlo-goods :goods="item"></hlo-goods>
    </view>
  </view>
</template>

<script>
export default {
  async onLoad(options) {
    const res = await uni.hloRequest.get({
      url: `goods/qSearch/${options.query}`
    });
    this.goods = res;
  },
  data() {
    return {
      goods: []
    };
  },
  methods: {
    gotoDetail(id) {
      uni.navigateTo({
        url: `../goodsDetail/goodsDetail?id=` + id
      });
    }
  }
};
</script>

<style lang="scss">
.goodsList {
  min-height: 100vh;
  background-color: #ffffff;
}
</style>
