<template>
  <div>
    <el-button type="primary">我看起来是什么</el-button>
  </div>
</template>

<script setup>
import axios from 'axios';
axios.get('/api/banner').then((res) => {
  console.log(res);
});
</script>

<style lang="scss" scoped></style>
