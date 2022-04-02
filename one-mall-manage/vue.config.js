const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:7776',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      },
      '^/static': {
        target: 'http://120.77.30.174:8000',
        pathRewrite: {
          '^/static': ''
        },
        changeOrigin: true
      }
    }
  },
  // 配置elementplus自动导入
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
});
