<template>
  <div id='swiper-container'>
    <swiper class="swiper-context"
      :options="swiperOption"
    >
      <swiper-slide class="swiper-item"
        v-for="(item, index) in swiperData.data" 
        :key="index"
      >
        <img class="swiper-item-img"
          :alt="index"
          :src="item"
          :style="{height: swiperData['height'] + 'px', width: '100%', display: 'block'}"
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
        default: function() {
          return {}
        }
      },
      type: {
        type: String,
        default: 'default'
      }
    },
    data() {
      return {
        swiperOption: {
          autoplay: true,
          autoHeight: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
          }
        }
      }
    },
    methods: {
      initPaginationLayoutView() {
        switch(this.type) {
          case 'default':
            break;
          case 'flat':
            this.swiperOption.pagination = {
              el: '.swiper-pagination',
              type: 'fraction'
            }
            break;
        }
      }
    },
    components: {
      swiper, 
      swiperSlide
    },
    created() {
      this.initPaginationLayoutView()
    }
  }
</script>

<style lang="scss" scoped>
  #swiper-container {
    
  }
  .swiper-pagination-fraction {
    left: auto;
    right: 0;
    width: auto;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 6px 18px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    bottom: 32px;
    color: white;
  }
</style>