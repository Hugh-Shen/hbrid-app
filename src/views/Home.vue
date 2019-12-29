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
  </div>
</template>

<script>
  import Search from '@c/search/index.vue'
  import Swiper from '@c/swiper/index.vue'
  import Activity from '@c/activity/index.vue'
  import OptionsMenu from '@c/optionsMenu/index.vue'
  import {getTheRequiredData} from '@utils/serviceApi/index.js'
  import servicePath from '@utils/baseUrl.js'

  import '@utils/mockData/swiperData.js'
  import '@utils/mockData/activityData.js'
  let {swiperData, activityData} = servicePath
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
        activityData: []
      }
    },
    methods: {

    },
    components: {
      Search,
      Swiper,
      Activity,
      OptionsMenu
    },
    created() {
      this.$axios.all([
          getTheRequiredData(swiperData), 
          getTheRequiredData(activityData)
      ])
      .then(this.$axios.spread((swiperData, activityData) => {
        this.swiperData.data = swiperData.data.list.map(item => item.icon)
        this.activityData = activityData.data.list
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
</style>