<template>
  <div class="nav-menu">
    <div class="logo" v-if="!collapse && mode !== 'horizontal'">
      <span class="title">Vue3 + Koa后台管理系统</span>
    </div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
      :mode="mode"
    >
      <el-menu-item
        class="home"
        index="home"
        @click="handleMenuItemClick('home', 'home', '')"
      >
        首页
      </el-menu-item>

      <div v-for="item in userMenus" :key="item.id">
        <el-sub-menu v-if="item.level === 0" :index="item.id + ''">
          <template #title>
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <!-- 遍历里面的item -->
          <div v-for="subitem in userMenus" :key="subitem.id">
            <el-menu-item
              v-if="subitem.parent_id === item.id"
              :index="subitem.id + ''"
              @click="handleMenuItemClick(subitem.id, item.name, subitem.name)"
            >
              <i v-if="subitem.icon" :class="subitem.icon"></i>
              <span>{{ subitem.title }}</span>
            </el-menu-item>
          </div>
        </el-sub-menu>
      </div>
    </el-menu>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { sessionCache } from '@/utils/cache';

defineProps({
  collapse: Boolean,
  mode: {
    default: 'vertical'
  }
});

let defaultActive = sessionCache.getItem('defaultActive') || 'home';

const router = useRouter();

const userMenus = sessionCache.getItem('menus');

const handleMenuItemClick = (active, parentName, childrenName) => {
  defaultActive = active + '';
  sessionCache.setItem('defaultActive', defaultActive);
  router.push(`/main/${parentName}/${childrenName}`);
};
</script>

<style lang="less" scoped>
@import './style.less';
</style>
