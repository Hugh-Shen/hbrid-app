<template>
  <div id='home'>
    <Swiper :swiperData="swiperData" />
  </div>
</template>

<script>
  import Swiper from '@c/swiper/index.vue'
  import {getSwiperData} from '@utils/serviceApi/index.js'
  import servicePath from '@utils/baseUrl.js'
  let {swiperData , test} = servicePath
  export default {
    data() {
      return {
        swiperData: {
          height: 100,
          data: [],
          swiperOption: {
            autoplay: true,
            autoHeight: true,
            pagination: {
              // 分页器对应的 html 元素
              el: '.swiper-pagination',
              // 分页器的样式
              type: 'bullets'
            }
          }
        }
      }
    },
    methods: {

    },
    components: {
      Swiper
    },
    created() {
      getSwiperData(swiperData).then(res => {
        console.log('最终数据', res)
        this.swiperData.data = res.data.list
      })
    }
  }
</script>

<style lang="scss" scoped>
  #home {
    @include init-page();
    
  }
</style>