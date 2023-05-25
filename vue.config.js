const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/frontend': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        timeout: 10000,
      },
    },
  },
})
