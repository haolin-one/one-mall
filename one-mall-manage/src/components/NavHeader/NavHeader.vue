<template>
  <div class="nav-header">
    <i class="fold-menu" @click="handleFoldClick">
      <el-icon v-if="!isFold"><fold /></el-icon>
      <el-icon v-else><expand /></el-icon>
    </i>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['foldChange']);

const isFold = ref(false);
const handleFoldClick = () => {
  isFold.value = !isFold.value;
  emit('foldChange', isFold.value);
};
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;

    .el-dropdown-link {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
}
</style>
