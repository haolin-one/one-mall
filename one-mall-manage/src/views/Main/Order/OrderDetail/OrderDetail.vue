<template>
  <div class="OrderDetail">
    <div class="steps">
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="Done" />
        <el-step title="Processing" />
        <el-step title="Step 3" />
      </el-steps>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import hloAxios from '@/request/index';

const route = useRoute();

const orderInfo = JSON.parse(route.query.item);
console.log(orderInfo);

const orderItem = ref();

const getOrderItem = async () => {
  orderItem.value = await hloAxios.post({
    url: `order/orderDetail/${orderInfo.order_sn}`
  });
};

await getOrderItem();

console.log(orderItem.value);
</script>

<style lang="less" scoped></style>
