<template>
  <div class="Banner">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="banner"
      :contentTableConfig="contentTableConfig"
      @updateBtnClick="handleUpdateData"
      @newBtnClick="handleNewData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      pageName="banner"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
    ></page-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { contentTableConfig } from './config/content.config';
import { searchFormConfig } from './config/search.config';
import { modalConfig } from './config/modal.config';

const pageModalRef = ref();
const pageContentRef = ref();
const defaultInfo = ref();

const handleQueryClick = (queryInfo) => {
  pageContentRef.value.getPageData(queryInfo);
};

const handleResetClick = () => {
  pageContentRef.value.getPageData();
};

const handleUpdateData = (item) => {
  defaultInfo.value = { ...item };
  pageModalRef.value.dialogVisible = true;
};

const handleNewData = () => {
  defaultInfo.value = {};
  pageModalRef.value.dialogVisible = true;
};
</script>

<style lang="less" scoped></style>
