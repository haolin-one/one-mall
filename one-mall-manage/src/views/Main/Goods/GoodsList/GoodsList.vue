<template>
  <div class="goods-list">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      pageName="goods"
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @updateBtnClick="handleUpdateData"
    ></page-content>
    <page-modal
      pageName="goods"
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { searchFormConfig } from './config/search.config';
import { contentTableConfig } from './config/content.config';
import { modalConfig } from './config/modal.config';

const pageContentRef = ref();
const pageModalRef = ref();

const handleResetClick = () => {
  pageContentRef.value.getPageData();
};

const handleQueryClick = (query) => {
  pageContentRef.value.getPageData(query);
};

const defaultInfo = ref();

const handleNewData = () => {
  defaultInfo.value = {};
  pageModalRef.value.dialogVisible = true;
};

const handleUpdateData = (item) => {
  defaultInfo.value = { ...item };
  pageModalRef.value.dialogVisible = true;
};
</script>

<style lang="less" scoped></style>
