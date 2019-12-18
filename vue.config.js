// vue.config.js
module.exports = {
  devServer: {
    port: 8088,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9099', //API服务器的地址
        // ws: true, //代理websockets
        changeOrigin: true, // 虚拟的站点需要更管origin
        secure: false,
        pathRewrite: {
          //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          '^/api': ''
        }
      }
    }
  }
}
