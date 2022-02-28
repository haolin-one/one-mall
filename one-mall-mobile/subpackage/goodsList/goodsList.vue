<template>
  <view class="goodsList">
    <view v-for="item in goods" :key="item.id">
      <hlo-goods :goods="item"></hlo-goods>
    </view>
  </view>
</template>

<script>
  export default{
    onLoad(options) {
      console.log(options)
      uni.hloRequest({
        url: `goods/qSearch/${options.query}`,
        success: (res) => {
          this.goods = res.data;
        }
      });
    },
    data() {
      return {
        goods: []
      }
    },
  }
</script>

<style lang="scss">
  .goodsList{
    min-height: 100vh;
    background-color: #FFFFFF;
  }
</style>
