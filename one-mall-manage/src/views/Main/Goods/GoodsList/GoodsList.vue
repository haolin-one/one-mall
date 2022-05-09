<template>
  <div class="goods-list">
    <page-search
      :searchFormConfig="searchConfigComputed"
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
import { tranListToTreeData } from '@/utils/tranListToTreeData';

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

// 获取分类列表
const { list: goodsCateList } = await getPageListData('goodsCate/list');

let treeListData;

treeListData = ref(tranListToTreeData(goodsCateList, 0));

const configComputed = (config) =>
  computed(() => {
    const goodsCateItem = config.formItems.find(
      (item) => item.field === 'goods_cate_id'
    );

    goodsCateItem.options = treeListData.value;

    return config;
  });

const modalConfigComputed = configComputed(modalConfig);
const searchConfigComputed = configComputed(searchFormConfig);
</script>

<style lang="less" scoped></style>
