<template>
  <view class="my">
    <hlo-user v-if="userInfo.id"></hlo-user>
    <hlo-login
      @changeStatus="status = 'register'"
      v-else-if="status === 'login' && !userInfo.id"
    ></hlo-login>
    <hlo-register
      @changeStatus="status = 'login'"
      v-else-if="status === 'register' && !userInfo.id"
    ></hlo-register>
  </view>
</template>

<script>
import { mapState } from 'vuex';
export default {
  created() {},
  data() {
    return {
      status: 'login'
    };
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
