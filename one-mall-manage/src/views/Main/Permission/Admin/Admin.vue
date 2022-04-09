<template>
  <div class="admin">
    <page-search
      :searchFormConfig="searchConfigComputed"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>
    <page-content
      pageName="admin"
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @updateBtnClick="handleUpdateData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      pageName="admin"
      :modalConfig="modalConfigComputed"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { getPageListData } from '@/api/page';
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

// 获取角色列表
const { list: roleList } = await getPageListData('/role/list');

const configComputed = (config) =>
  computed(() => {
    const rolementItem = config.formItems.find(
      (item) => item.field === 'role_id'
    );

    rolementItem.options = roleList.map((item) => {
      return { title: item.name, value: item.id };
    });

    return config;
  });

const modalConfigComputed = configComputed(modalConfig);
const searchConfigComputed = configComputed(searchFormConfig);
</script>

<style lang="less" scoped></style>
