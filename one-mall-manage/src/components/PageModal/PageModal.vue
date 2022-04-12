<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" center destroy-on-close>
      <hlo-form v-model="formData" v-bind="modalConfig"> </hlo-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  otherInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  }
});

const dialogVisible = ref(false);
const formData = ref({});

watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`];
    }
  }
);

// 点击确定按钮的逻辑
const store = useStore();
const handleConfirmClick = () => {
  dialogVisible.value = false;
  if (Object.keys(props.defaultInfo).length) {
    // 编辑
    store.dispatch('pageModule/updatePageDataAction', {
      pageName: props.pageName,
      updateData: { ...formData.value, ...props.otherInfo },
      id: props.defaultInfo.id
    });
  } else {
    // 新建
    store.dispatch('pageModule/createPageDataAction', {
      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo }
    });
  }
};

defineExpose({ dialogVisible });
</script>

<style scoped></style>
