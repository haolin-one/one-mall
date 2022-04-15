<template>
  <view class="update-address">
    <hlo-address :receiverInfo="orderInfo"></hlo-address>
  </view>
</template>

<script>
  export default {
    onLoad(payload) {
      console.log(JSON.parse(payload.orderInfo))
      this.orderInfo = JSON.parse(payload.orderInfo)
    },
    data(){
      return {
        orderInfo:{}
      }
    }
  }
</script>

<style lang="scss">

</style>
