import Vue from 'vue'
import Dialogs from './index.vue'

const DialogConstructor = Vue.extend(Dialogs)

Dialogs.install = function(data) {
  let time = data.time ? data.time : 2000
  let instance = new DialogConstructor({data}).$mount()
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.show = true
    let clear = setTimeout(() => {
      clearTimeout(clear)
      instance.show = false
      instance = null
    }, time);
  })
}

export default Dialogs