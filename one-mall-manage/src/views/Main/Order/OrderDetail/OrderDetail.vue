<template>
  <div class="OrderDetail">
    <div class="steps">
      <el-steps align-center :active="stepActive" finish-status="success">
        <el-step title="提交订单" :description="orderInfo.createAt" />
        <el-step title="平台发货" :description="orderInfo.delivery_time" />
        <el-step title="买家收货" :description="orderInfo.receive_time" />
        <el-step title="完成评价" :description="orderInfo.comment_time" />
      </el-steps>
    </div>
    <div class="baseInfo">
      <div class="title">
        <el-icon><list /></el-icon>
        基本信息
      </div>
      <el-descriptions direction="vertical" border>
        <el-descriptions-item align="center" label="订单编号">
          {{ orderInfo.order_sn }}
        </el-descriptions-item>
        <el-descriptions-item align="center" label="姓名">
          {{ orderInfo.userName }}
        </el-descriptions-item>
        <el-descriptions-item align="center" label="联系方式">
          {{ orderInfo.telNumber }}
        </el-descriptions-item>
        <el-descriptions-item align="center" label="物流单号">
          {{ orderInfo.delivery_sn ?? '暂无' }}
        </el-descriptions-item>
        <el-descriptions-item align="center" label="配送方式">
          {{ orderInfo.delivery_company ?? '暂无' }}
        </el-descriptions-item>
        <el-descriptions-item align="center" label="地址">
          {{ orderInfo.address }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
    <div class="goodsInfo">
      <div class="title">
        <el-icon><list /></el-icon>
        商品信息
      </div>
      <hlo-table v-bind="contentTableConfig" :listData="orderItem">
        <template #img="scope">
          <el-image
            :src="scope.row.picture"
            :preview-src-list="[scope.row.picture]"
          ></el-image>
        </template>
        <template #sum="scope">
          {{ (scope.row.goods_count * scope.row.price).toFixed(2) }}
        </template>
      </hlo-table>
      <div class="totalPrice">
        合计：<strong>{{ '￥' + orderInfo.total_amount }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import hloAxios from '@/request/index';

import { contentTableConfig } from './config/content.config';

const route = useRoute();

const orderInfo = JSON.parse(route.query.item);

const orderItem = ref();

const getOrderItem = async () => {
  orderItem.value = await hloAxios.post({
    url: `order/orderDetail/${orderInfo.order_sn}`
  });
};

await getOrderItem();

const stepActive = computed(() => {
  if (orderInfo.comment_time) {
    return 4;
  } else if (orderInfo.receive_time) {
    return 3;
  } else if (orderInfo.delivery_time) {
    return 2;
  } else {
    return 1;
  }
});
</script>

<style lang="less" scoped>
@import './style.less';
</style>
