<template>
  <div class="page-echarts">
    <el-row type="flex" justify="space-between">
      <el-col :span="12">
        <map-echarts></map-echarts>
      </el-col>
      <el-col :span="12">
        <pie-echarts></pie-echarts>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <line-echarts></line-echarts>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import mapEcharts from '@/components/PageEcharts/components/map-echarts';
import pieEcharts from '@/components/PageEcharts/components/pie-echarts';
import lineEcharts from '@/components/PageEcharts/components/line-echarts';
</script>

<style lang="less" scoped></style>
