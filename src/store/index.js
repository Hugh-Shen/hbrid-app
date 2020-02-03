import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export  default new Vuex.Store({
  state: {
    shoppingData: []
  },
  mutations: {
    /**
     * 为商品添加属性
     * @param {number} 表示数量
     * @param {isCheck} 是否选中 
     */ 
    addToShoppingDCart(state, data) {
      const Exist = state.shoppingData.some( item => {
        if(item.id == data.id) {
          item.number += 1;
          return true;
        }
      })
      if(!Exist) {
        Vue.set(data, 'isCheck', false)
        Vue.set(data, 'number', 1)
        state.shoppingData.push(data)
      }
    },
    changeSpecifiedData(state, data) {
      state.shoppingData[data.index].number = data.number
    }
  },  
  actions: {

  }
})