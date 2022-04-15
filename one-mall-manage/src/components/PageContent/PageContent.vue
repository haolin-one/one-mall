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

      <!-- 订单的插槽start -->
      <template #money="scope"> ￥{{ scope.row.total_amount }} </template>

      <template #order_address="scope">
        {{
          scope.row.provinceName +
          scope.row.cityName +
          scope.row.countyName +
          scope.row.detailInfo
        }}
      </template>

      <template #order_status="scope">
        <p v-if="scope.row.order_status === 0">待付款</p>
        <p v-if="scope.row.order_status === 1">待发货</p>
        <p v-if="scope.row.order_status === 2">待收货</p>
        <p v-if="scope.row.order_status === 3">待评价</p>
        <p v-if="scope.row.order_status === 4">已完成</p>
        <p v-if="scope.row.order_status === 5">已关闭</p>
      </template>

      <template #order_handle="scope">
        <el-button
          size="small"
          type="primary"
          plain
          @click="detailOrder(scope.row)"
        >
          查看订单
        </el-button>
        <el-button
          v-if="scope.row.order_status === 1"
          size="small"
          type="success"
          plain
          @click="handleorderShipClick(scope.row)"
        >
          订单发货
        </el-button>
        <el-button
          v-else-if="
            scope.row.order_status === 2 ||
            scope.row.order_status === 3 ||
            scope.row.order_status === 4
          "
          size="small"
          type="success"
          plain
          @click="handleTrackClick(scope.row)"
        >
          订单跟踪
        </el-button>
        <el-popconfirm
          v-else-if="scope.row.order_status === 5"
          confirm-button-text="确定"
          cancel-button-text="取消"
          icon-color="red"
          @confirm="handleDeleteClick(scope.row)"
          title="确定永久删除该数据吗?"
        >
          <template #reference>
            <el-button size="small" type="danger" plain> 删除订单 </el-button>
          </template>
        </el-popconfirm>
      </template>
      <!-- 订单的插槽end -->

      <template #img="scope">
        <el-image
          v-if="scope.row.picture"
          style="width: 60px; height: 60px"
          :src="scope.row.picture"
          :preview-src-list="[scope.row.picture]"
        >
        </el-image>
        <text v-else>无</text>
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
      <!-- <template v-for="item in otherPropSlots" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template> -->
    </hlo-table>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
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

const emit = defineEmits([
  'newBtnClick',
  'updateBtnClick',
  'orderShipBtnClick',
  'trackBtnClick'
]);

const store = useStore();
const router = useRouter();

// const otherPropSlots = props.contentTableConfig?.propList.filter((item) => {
//   if (item.slotName === 'status') return false;
//   if (item.slotName === 'createAt') return false;
//   if (item.slotName === 'updateAt') return false;
//   if (item.slotName === 'handle') return false;
//   return true;
// });

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

// 订单发货
const handleorderShipClick = (item) => {
  emit('orderShipBtnClick', item);
};

// 订单跟踪
const handleTrackClick = (item) => {
  emit('trackBtnClick', item);
};

// 查看订单
const detailOrder = async (item) => {
  router.push({
    path: '/main/order/orderDetail',
    query: { item: JSON.stringify(item) }
  });
};

defineExpose({ getPageData });
</script>

<style scoped></style>
