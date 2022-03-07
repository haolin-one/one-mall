<template>
  <view>
    <uni-card title="收货信息" @click="chooseAddress">
      <view class="address">
        <view class="icon">
          <uni-icons type="location"></uni-icons>
        </view>
        <view class="receiptInfo">
          <text class="addressInfo">{{ address }}</text>
          <view class="receiverInfo">
            <text class="receiver">{{ receiverInfo.name }}</text>
            <text class="phone">{{ receiverInfo.phone_number }}</text>
          </view>
        </view>
      </view>
    </uni-card>
  </view>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'hlo-address',
  data() {
    return {};
  },
  methods: {
    chooseAddress() {
      uni.chooseAddress({
        success: (res) => {
          this.receiverInfo = res;
        }
      });
    }
  },
  created() {
    console.log(this.address);
  },
  computed: {
    ...mapGetters({
      receiverInfo: 'address'
    }),
    address() {
      return (
        this.receiverInfo.province +
        this.receiverInfo.city +
        this.receiverInfo.region +
        this.receiverInfo.detail_address
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
