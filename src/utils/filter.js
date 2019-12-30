import Vue from 'vue'

/**
 * 过滤器
 * @param 处理金额是否为正整数, 不是返回两位浮点数
 */

Vue.filter('priceValue', function(value) {
  let val = parseFloat(value)

  if(isNaN(val)) {
    throw new Error('不是一个正确的类型')
  }

  return Number.isInteger(val) ? val : val.toFixed(2)
})