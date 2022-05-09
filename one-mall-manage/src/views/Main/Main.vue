<template>
  <div class="main">
    <el-container class="main-content" v-show="width > 840 || width == 840">
      <el-aside :width="isCollapse ? '70px' : '210px'">
        <suspense>
          <nav-menu :collapse="isCollapse" />
        </suspense>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChange"></nav-header>
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <suspense>
              <router-view></router-view>
            </suspense>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <el-container class="main-content2" v-show="width < 840">
      <el-container class="page">
        <el-header class="page-header">
          <suspense>
            <nav-menu mode="horizontal" />
          </suspense>
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <suspense>
              <router-view></router-view>
            </suspense>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isCollapse = ref(false);
const handleFoldChange = (isFold) => {
  isCollapse.value = isFold;
};

let width = ref(document.documentElement.clientWidth);

window.addEventListener('resize', () => {
  width.value = document.documentElement.clientWidth;
});
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .main-content {
    height: 100%;
    .el-aside {
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      background-color: #001529;
      transition: width 0.3s linear;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .page {
      .el-header {
        height: 100%;
        display: flex;
        color: #333;
        text-align: center;
        align-items: center;
        height: 48px !important;
      }

      .page-content {
        // height: calc(100% - 48px);
        color: #333;
        text-align: center;
        background-color: #f0f2f5;

        .page-info {
          // height: 100%;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  .main-content2 {
    height: 100%;

    .el-header {
      height: 56px;
    }

    .page {
      .page-content {
        // height: calc(100% - 48px);
        color: #333;
        text-align: center;
        background-color: #f0f2f5;

        .page-info {
          // height: 100%;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>
