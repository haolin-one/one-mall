<template>
  <view class="hlo-order-footer">
    <view class="footer">
      <view v-if="orderInfo.order_status === 0">
        <button type="default" size="mini">去付款</button>
      </view>
      <view v-if="orderInfo.order_status === 1">
        <button type="default" size="mini" @click="updateAddress">
          修改地址
        </button>
      </view>
      <view v-if="orderInfo.order_status === 2">
        <button type="default" size="mini" @click="confirmReceive">
          确认收货
        </button>
      </view>
      <view v-if="orderInfo.order_status === 3">
        <button type="default" size="mini" @click="gotoComment">去评价</button>
      </view>
      <view v-if="orderInfo.order_status === 4">
        <button type="default" size="mini">已完成</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'hlo-order-footer',
  props: {
    orderInfo: {
      required: true
    },
    orderItem:{
      required:true
    }
  },
  methods: {
    updateAddress() {
      uni.navigateTo({
        url:
          '../../subpackage/updateAddress/updateAddress?orderInfo=' +
          JSON.stringify(this.orderInfo)
      });
    },
    confirmReceive() {
      uni.showModal({
        title:'确认收到货了吗',
        content:'为保证你的售后权益，请收到商品确认无误后再确认收货',
        success:()=> {
          uni.hloRequest.post({
            url:'order/confirmReceive',
            data:{id:this.orderInfo.ordersID}
          })
          uni.redirectTo({
            url:'../../subpackage/receiveSuccess/receiveSuccess?orderItem='+JSON.stringify(this.orderItem)
          })
        }
      })
    },
    gotoComment(){
      uni.navigateTo({
        url:'../../subpackage/comment/comment?orderItem='+JSON.stringify(this.orderItem)
      })
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
