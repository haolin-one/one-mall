<template>
  <div class="nav-header">
    <div class="content">
      <div class="fold-menu" @click="handleFoldClick">
        <el-icon v-if="!isFold"><fold /></el-icon>
        <el-icon v-else><expand /></el-icon>
      </div>
      <div class="adminInfo">
        <el-dropdown @command="handleCommand">
          欢迎您,
          <el-button type="text">
            {{ admin.username }}
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { sessionCache } from '@/utils/cache';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const emit = defineEmits(['foldChange']);

const isFold = ref(false);
const handleFoldClick = () => {
  isFold.value = !isFold.value;
  emit('foldChange', isFold.value);
};

const admin = sessionCache.getItem('admin');

const router = useRouter();
const store = useStore();
const handleCommand = (command) => {
  if (command === 'logout') {
    store.dispatch('adminModule/logoutAction');
    router.push('/login');
  }
};
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding-right: 20px;

    .fold-menu {
      font-size: 30px;
      cursor: pointer;
    }

    .adminInfo {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
}
</style>
