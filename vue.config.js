const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
    .set('@assets', resolve('src/assets'))
    .set('@view', resolve('src/view'))
    .set('@c', resolve('src/components'))
    .set('@utils', resolve('src/utils'))
  },
  css:{
    loaderOptions:{
      scss:{
        prependData:`@import "~@/assets/style/common.scss";`
      }
    }
  }
}