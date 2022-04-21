<template>
  <view class="update-address">
    <hlo-address :update="false" :receiverInfo="orderInfo"></hlo-address>
    <button class="updateBtn" @click="updateBtnClick">点击修改地址</button>
  </view>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  onLoad(payload) {
    this.orderInfo = JSON.parse(payload.orderInfo);
  },
  data() {
    return {
      orderInfo: {}
    };
  },
  methods: {
    ...mapActions(['updateAddress']),
    updateBtnClick() {
      uni.chooseAddress({
        success: (res) => {
          this.updateAddress({ ...res, id: this.orderInfo.ordersID });
        }
      });
      uni.switchTab({
        url: '../../pages/my/my'
      });
    }
  }
};
</script>

<style lang="scss">
.update-address {
  .updateBtn {
    width: 90%;
  }
}
</style>
