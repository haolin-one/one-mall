<template>
  <view class="hlo-address">
    <uni-card title="收货信息" @click="chooseAddress">
      <view class="address">
        <view class="icon">
          <uni-icons type="location"></uni-icons>
        </view>
        <view class="receiptInfo">
          <text class="addressInfo">{{ addressInfo }}</text>
          <view class="receiverInfo">
            <text class="receiver">{{ receiverInfo.userName }}</text>
            <text class="phone">{{ receiverInfo.telNumber }}</text>
          </view>
        </view>
      </view>
    </uni-card>
  </view>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'hlo-address',
  props: {
    receiverInfo: {
      required: true
    },
    update:{
      default:true
    }
  },
  methods: {
    ...mapMutations('user', ['setAddress']),
    chooseAddress() {
      if(this.update){
        uni.chooseAddress({
          success: (res) => {
            this.setAddress(res);
          }
        });
      }
    }
  },
  computed: {
    addressInfo() {
      return (
        this.receiverInfo.provinceName +
        this.receiverInfo.cityName +
        this.receiverInfo.countyName +
        this.receiverInfo.detailInfo
      );
    }
  }
};
</script>

<style lang="scss">
.address {
  display: flex;
  .icon {
    margin-right: 10px;
  }
  .receiptInfo {
    display: flex;
    flex-direction: column;
    .addressInfo {
      color: #000000;
      font-weight: 600;
    }
    .receiverInfo {
      font-size: 24rpx;
      .receiver {
        margin-right: 10px;
      }
    }
  }
}
</style>
