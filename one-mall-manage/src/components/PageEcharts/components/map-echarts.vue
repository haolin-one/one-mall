<template>
  <div class="map-echarts">
    <hlo-echarts :options="options"></hlo-echarts>
  </div>
</template>

<script setup>
import 'echarts/extension/bmap/bmap';
import { convertData } from '@/components/PageEcharts/utils/convert-data';
import { getCitySale } from '@/api/dashboard';

const result = await getCitySale();
const data = result.map((item) => {
  return { name: item.cityName, value: item.value };
});

const options = {
  backgroundColor: 'transparent',
  title: {
    text: '全国主要城市销售量',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  // 加载bmap组件
  bmap: {
    // 百度地图中心经纬度
    center: [155, 35.550339],
    // 百度地图缩放
    zoom: 4,
    // 是否可以拖拽
    roam: true,
    // 百度地图的自定义样式
    mapStyle: {
      styleJson: [
        {
          featureType: 'water',
          elementType: 'all',
          stylers: {
            color: '#044161'
          }
        },
        {
          featureType: 'land',
          elementType: 'all',
          stylers: {
            color: '#004981'
          }
        },
        {
          featureType: 'label',
          elementType: 'all',
          stylers: {
            visibility: 'off'
          }
        }
      ]
    }
  },
  series: [
    {
      name: '销量',
      type: 'scatter',
      // 使用百度地图坐标
      coordinateSystem: 'bmap',
      data: convertData(data),
      encode: {
        value: 2
      },
      symbolSize: function (val) {
        return val[2] / 5;
      },
      label: {
        formatter: '{b}',
        position: 'right'
      },
      itemStyle: {
        color: '#ddb926'
      },
      emphasis: {
        label: {
          show: true
        }
      }
    },
    {
      name: '销量Top 5',
      type: 'effectScatter',
      coordinateSystem: 'bmap',
      data: convertData(
        data
          .sort(function (a, b) {
            return b.value - a.value;
          })
          .slice(0, 5)
      ),
      encode: {
        value: 2
      },
      symbolSize: function (val) {
        return val[2] / 5;
      },
      showEffectOn: 'emphasis',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        formatter: '{b}',
        position: 'right',
        show: true
      },
      itemStyle: {
        color: '#f4e925',
        shadowBlur: 10,
        shadowColor: '#333'
      },
      zlevel: 1
    }
  ]
};
</script>

<style lang="less" scoped></style>
