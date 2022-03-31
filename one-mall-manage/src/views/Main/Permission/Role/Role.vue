<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="role"
      :contentTableConfig="contentTableConfig"
      @updateBtnClick="handleUpdateData"
      @newBtnClick="handleNewData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      pageName="role"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
    ></page-modal>
  </div>
</template>

<script setup>
import { searchFormConfig } from './config/search.config';
import { contentTableConfig } from './config/content.config';
import { modalConfig } from './config/modal.config';
import { ref } from '@vue/reactivity';

const pageContentRef = ref();
const pageModalRef = ref();

const handleResetClick = () => {
  pageContentRef.value.getPageData();
};

const handleQueryClick = (queryInfo) => {
  pageContentRef.value.getPageData(queryInfo);
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
