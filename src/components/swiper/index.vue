<template>
  <div id='swiper-container'>
    <swiper class="swiper-context"
      :options="swiperData.swiperOption"
    >
      <swiper-slide class="swiper-item"
        v-for="(item, index) in swiperData.data" 
        :key="index"
      >
        <img class="swiper-item-img"
          :alt="index"
          :src="item"
          :style="{height: swiperData['height'] + 'px', width: '100%'}"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    props: {
      swiperData: {
        type: Object,
        required: true,
        default: function() {
          return {}
        }
      }
    },
    data() {
      return {
      
      }
    },
    components: {
      swiper, 
      swiperSlide
    }
  }
</script>

<style lang="scss" scoped>
  #swiper-container {
  }
</style>