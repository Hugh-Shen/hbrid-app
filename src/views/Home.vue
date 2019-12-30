<template>
  <div id='home'>
    <Search  />
    <Swiper :swiperData="swiperData" />
    <Activity>
      <div class="activity-container">
        <img v-for="(item, index) in activityData" 
          :key="index" 
          :src="item.icon"
          :alt="index"
        />
      </div>
    </Activity>
    <OptionsMenu />
    <Seckill :seckillData="seckillData">
      <CountDown :time="19" />
    </Seckill>
    <Activity>
      <div class="pin-gou-jie">
        <img src="@assets/images/pinGouJie.gif" alt="拼购节">
      </div>
    </Activity>
  </div>
</template>

<script>
  import Search from '@c/search/index.vue'
  import Swiper from '@c/swiper/index.vue'
  import Activity from '@c/activity/index.vue'
  import OptionsMenu from '@c/optionsMenu/index.vue'
  import Seckill from '@c/seckill/index.vue'
  import CountDown from '@c/countDown/index.vue'
  import {getTheRequiredData} from '@utils/serviceApi/index.js'
  import servicePath from '@utils/baseUrl.js'

  import '@utils/mockData/swiperData.js'
  import '@utils/mockData/activityData.js'
  import '@utils/mockData/seckillData.js'
  let {swiperData, activityData, seckillData} = servicePath
  export default {
    data() {
      return {
        swiperData: {
          height: 200,
          data: [],
          swiperOption: {
            autoplay: true,
            autoHeight: true,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets'
            }
          }
        },
        activityData: [],
        seckillData: []
      }
    },
    methods: {

    },
    components: {
      Search,
      Swiper,
      Activity,
      OptionsMenu,
      Seckill,
      CountDown
    },
    created() {
      this.$axios.all([
          getTheRequiredData(swiperData), 
          getTheRequiredData(activityData),
          getTheRequiredData(seckillData)
      ])
      .then(this.$axios.spread((swiperData, activityData, seckillData) => {
        this.swiperData.data = swiperData.data.list.map(item => item.icon)
        this.activityData = activityData.data.list
        this.seckillData = seckillData.data.list
      }))
    }
  }
</script>

<style lang="scss" scoped>
  #home {
    @include init-page();
  }
  .activity-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    & > img {
      display: inline-block;
      width: 33.33%;
    }
  }
  .pin-gou-jie {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    & > img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
</style>