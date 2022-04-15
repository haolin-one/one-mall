import * as echarts from 'echarts';

export default function (el) {
  // 实例化echarts实例
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
