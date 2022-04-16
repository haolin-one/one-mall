import * as echarts from 'echarts';

// 实例化echarts实例
export default function (el) {
  const echartInstance = echarts.init(el);

  const setOptions = (options) => {
    echartInstance.setOption(options);
  };

  const updateResize = () => {
    echartInstance.resize();
  };

  window.addEventListener('resize', () => {
    echartInstance.resize();
  });

  return {
    echartInstance,
    setOptions,
    updateResize
  };
}
