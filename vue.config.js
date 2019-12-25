const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  css:{
    loaderOptions:{
      scss:{
        prependData:`@import "~@/assets/style/common.scss";`
      }
    }
  }
}