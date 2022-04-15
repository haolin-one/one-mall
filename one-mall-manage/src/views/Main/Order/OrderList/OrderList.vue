<template>
  <page-search
    :searchFormConfig="searchFormConfig"
    @queryBtnClick="handleQueryClick"
    @resetBtnClick="handleResetClick"
  ></page-search>
  <page-content
    :contentTableConfig="contentTableConfig"
    @orderShipBtnClick="handleOrderShipClick"
    @trackBtnClick="handleTrackClick"
    ref="pageContentRef"
    pageName="order"
  >
  </page-content>
  <page-modal
    :modalConfig="modalConfig"
    :defaultInfo="defaultInfo"
    ref="pageModalRef"
    pageName="order"
  ></page-modal>
  <el-dialog v-model="dialogVisible" title="订单跟踪" width="30%">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { searchFormConfig } from './config/search.config';
import { contentTableConfig } from './config/content.config.js';
import { modalConfig } from './config/modal.config';
import { Check, Minus } from '@element-plus/icons-vue';

const pageModalRef = ref();
const pageContentRef = ref();
const defaultInfo = ref();

const dialogVisible = ref(false);
const activities = ref();

const handleQueryClick = (queryInfo) => {
  pageContentRef.value.getPageData(queryInfo);
};

const handleResetClick = () => {
  pageContentRef.value.getPageData();
};

const handleOrderShipClick = (item) => {
  defaultInfo.value = { ...item };
  pageModalRef.value.dialogVisible = true;
};

const handleTrackClick = (item) => {
  activities.value = [
    {
      content: '买家已付款, 等待卖家发货',
      timestamp: item.createAt,
      type: item.createAt ? 'success' : 'info',
      size: 'large',
      icon: Check
    },
    {
      content: '卖家已发货,等待买家收货',
      timestamp: item.delivery_time ? item.delivery_time : '订单正在运输中...',
      type: item.delivery_time ? 'success' : 'info',
      size: 'large',
      icon: item.delivery_time ? Check : Minus
    },
    {
      content: '订单完成,买家已收货',
      timestamp: item.receive_time ? item.receive_time : '等待买家收货...',
      type: item.receive_time ? 'success' : 'info',
      size: 'large',
      icon: item.receive_time ? Check : Minus
    }
  ];
  dialogVisible.value = true;
};
</script>

<style lang="less" scoped></style>
