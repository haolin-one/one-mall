<template>
  <div class="page-search">
    <hlo-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h3>高级检索</h3>
      </template>
      <template #footer>
        <div class="handle-btn">
          <el-button type="primary" @click="handleResetClick"
            ><el-icon class="el-icon--left"><Refresh /></el-icon>重置</el-button
          >
          <el-button type="primary" @click="handleQueryClick">
            <el-icon class="el-icon--left"><Search /></el-icon>搜索</el-button
          >
        </div>
      </template>
    </hlo-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  searchFormConfig: {
    type: Object,
    reuqired: true
  }
});

const emit = defineEmits(['resetBtnClick', 'queryBtnClick']);

const formItems = props.searchFormConfig?.formItems ?? [];

const formOriginData = {};
for (const item of formItems) {
  formOriginData[item.field] = '';
}

const formData = ref(formOriginData);

const handleResetClick = () => {
  for (const key in formOriginData) {
    formData.value[`${key}`] = formOriginData[key];
  }
  emit('resetBtnClick');
};

const handleQueryClick = () => {
  emit('queryBtnClick', formData.value);
};
</script>

<style scoped>
.handle-btn {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
