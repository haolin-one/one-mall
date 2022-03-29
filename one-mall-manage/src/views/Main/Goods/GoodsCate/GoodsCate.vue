<template>
  <div class="goods-cate">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      ref="pageContentRef"
      pageName="goodsCate"
      @newBtnClick="handleNewData"
      @updateBtnClick="handleUpdateData"
    ></page-content>
    <page-modal
      :modalConfig="modalConfig"
      ref="pageModalRef"
      pageName="goodsCate"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { searchFormConfig } from './config/search.config';
import { contentTableConfig } from './config/content.config';
import { modalConfig } from './config/modal.config';

const pageContentRef = ref(null);
const pageModalRef = ref(null);

const handleResetClick = () => {
  pageContentRef.value.getPageData();
};

const handleQueryClick = (queryInfo) => {
  pageContentRef.value.getPageData(queryInfo);
};

const defaultInfo = ref({});

const handleNewData = () => {
  defaultInfo.value = {};
  if (pageModalRef.value) {
    pageModalRef.value.dialogVisible = true;
  }
};

const handleUpdateData = (item) => {
  defaultInfo.value = { ...item };
  if (pageModalRef.value) {
    pageModalRef.value.dialogVisible = true;
  }
};
</script>

<style scoped></style>
