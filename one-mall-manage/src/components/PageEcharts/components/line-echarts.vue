<template>
  <div class="line-echarts">
    <hlo-echarts :options="options"></hlo-echarts>
  </div>
</template>

<script setup>
import { getMonthSale } from '@/api/dashboard.js';

const data = await getMonthSale();
const month = [];
const value = [];
data.forEach((item) => {
  month.push(item.month);
  value.push(item.value);
});
const options = {
  title: {
    text: '每月总销售量',
    left: 'center',
    textStyle: {
      color: '#000'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: month
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: value,
      type: 'line'
    }
  ]
};
</script>

<style lang="less" scoped></style>
