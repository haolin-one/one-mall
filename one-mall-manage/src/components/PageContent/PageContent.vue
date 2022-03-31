<template>
  <div class="page-content">
    <hlo-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" @click="handleNewClick"> 创建 </el-button>
      </template>

      <!-- 列里的插槽 -->
      <template #status="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>

      <template #gender="scope">
        {{ scope.row.gender === '1' ? '男' : '女' }}
      </template>

      <template #handle="scope">
        <div class="handle-btns">
          <el-button
            size="small"
            type="primary"
            plain
            @click="handleUpdateClick(scope.row)"
          >
            编辑
          </el-button>
          <el-popconfirm
            confirm-button-text="确定"
            cancel-button-text="取消"
            :icon="InfoFilled"
            icon-color="red"
            @confirm="handleDeleteClick(scope.row)"
            title="确定永久删除该数据吗?"
          >
            <template #reference>
              <el-button size="small" type="danger" plain>删除</el-button>
            </template>
          </el-popconfirm>
        </div>
      </template>

      <!-- 动态插槽 -->
      <template v-for="item in otherPropSlots" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hlo-table>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
// import { usePermission } from '@/hooks/usePermission';

const props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['newBtnClick', 'updateBtnClick']);

const store = useStore();

// 双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 7 });
watch(pageInfo, () => getPageData());

const getPageData = (queryInfo = {}) => {
  store.dispatch('pageModule/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  });
};

getPageData();

// 从vuex获取数据
const dataList = computed(() =>
  store.getters['pageModule/pageListData'](props.pageName)
);

const dataCount = computed(() =>
  store.getters['pageModule/pageListCount'](props.pageName)
);

// 删除/编辑/新建
const handleDeleteClick = (item) => {
  store.dispatch('pageModule/deletePageDataAction', {
    pageName: props.pageName,
    id: item.id
  });
};

const handleUpdateClick = (item) => {
  emit('updateBtnClick', item);
};

const handleNewClick = () => {
  emit('newBtnClick');
};

defineExpose({ getPageData });
</script>

<style scoped></style>
