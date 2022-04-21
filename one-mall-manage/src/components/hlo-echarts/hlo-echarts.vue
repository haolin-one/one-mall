<template>
  <div class="hlo-echarts">
    <el-card>
      <div ref="echartsDivRef" :style="{ width: width, height: height }"></div>
    </el-card>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import useEchart from '@/components/hlo-echarts/hooks/useEchart';

const props = defineProps({
  width: {
    default: '100%'
  },
  height: {
    default: '400px'
  },
  options: {}
});

const echartsDivRef = ref();

onMounted(() => {
  const { setOptions } = useEchart(echartsDivRef.value);
  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>

<style lang="less" scoped></style>
