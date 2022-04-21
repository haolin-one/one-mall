<template>
  <div class="pie-echarts">
    <hlo-echarts :options="options"></hlo-echarts>
  </div>
</template>

<script setup>
import { getCateSale } from '@/api/dashboard';

const res = await getCateSale();
const data = res.map((item) => {
  return { name: item.name, value: item.value };
});

const options = {
  title: {
    text: '商品分类销售量Top5',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: '销售量及占比Top5',
      type: 'pie',
      radius: [20, 140],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5
      },
      data: data
    }
  ]
};
</script>

<style lang="less" scoped></style>
