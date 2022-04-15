<template>
  <div class="hlo-echarts">
    <div id="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup>
import { onMounted, watchEffect } from 'vue';
import useEchart from '@/components/hlo-echarts/hooks/useEchart';

const props = defineProps({
  width: {
    default: '100%'
  },
  height: {
    default: '1000px'
  },
  options: {}
});

onMounted(() => {
  const echartsDivRef = document.getElementById('echartDivRef');
  const { setOptions } = useEchart(echartsDivRef);
  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>

<style lang="less" scoped></style>
