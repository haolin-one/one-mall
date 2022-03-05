<template>
  <view class="my">
    <hlo-login
      @changeStatus="status = 'register'"
      v-if="status === 'login'"
    ></hlo-login>
    <hlo-register
      @changeStatus="status = 'login'"
      v-else-if="status === 'register'"
    ></hlo-register>
  </view>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      status: 'register'
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.my {
  height: 100vh;
  width: 100%;
}
</style>
