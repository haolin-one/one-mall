<template>
  <view class="my">
    <hlo-user v-if="userInfo.id"></hlo-user>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  export default {
    onShow() {
      if (!this.userInfo.id) {
        uni.redirectTo({
          url: '../../subpackage/login/login'
        })
      }
    },
    data() {
      return {};
    },
    methods: {},
    computed: {
      ...mapState({
        userInfo: (state) => state.user.userInfo
      })
    }
  };
</script>

<style lang="scss">
  .my {
    height: 100vh;
    width: 100%;
  }
</style>
