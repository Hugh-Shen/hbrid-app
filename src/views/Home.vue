<template>
  <div id='home' @scroll="scrollChange">
    <NavigationBar :show="false"
      :navgigationBarStyle="navgigationBarStyle"
    >
      <template v-slot:left>
        <img :src="slotData.left" alt="菜单">
      </template>
      <template v-slot:main>
        <SearchInput :searchInputStyle="slotData.search" />
      </template>
      <template v-slot:right>
        <img :src="slotData.right" alt="消息">
      </template>
    </NavigationBar>
    <!-- <Search  /> -->
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
    <CommodityList layout="waterfall" />
  </div>
</template>

<script>
  import Search from '@c/search/index.vue'
  import SearchInput from '@c/searchInput/index.vue'
  import NavigationBar from '@c/navigationBar/index.vue'
  import Swiper from '@c/swiper/index.vue'
  import Activity from '@c/activity/index.vue'
  import OptionsMenu from '@c/optionsMenu/index.vue'
  import Seckill from '@c/seckill/index.vue'
  import CountDown from '@c/countDown/index.vue'
  import CommodityList from '@c/commodityList/index.vue'
  import getTheRequiredData from '@utils/serviceApi/index.js'
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
          data: []
        },
        activityData: [],
        seckillData: [],
        defaultSlotData: {
          default: {
            search: {
              icon: require('@assets/images/search.svg'),
              color: '#d7d7d7',
              bgColor: '#ffffff'
            },
            left: require('@assets/images/more-white.svg'),
            right: require('@assets/images/message-white.svg')
          },
          heightLine: {
            search: {
              icon: require('@assets/images/search-white.svg'),
              color: '#ffffff',
              bgColor: '#d7d7d7'
            },
            left: require('@assets/images/more.svg'),
            right: require('@assets/images/message.svg')
          }
        },
        slotData: {
          left: require('@assets/images/more-white.svg'),
          right: require('@assets/images/message-white.svg')
        },
        POINT_OF_AIM: 100,
        navgigationBarStyle: {
          position: 'fixed',
          left: '0',
          top: '0',
          backgroundColor: ''
        }
      }
    },
    methods: {
      scrollChange(e) {
        let height = e.target.scrollTop
        let scale =  height / this.POINT_OF_AIM
        this.slotData = scale >= height ? this.defaultSlotData.default : this.defaultSlotData.heightLine
        this.navgigationBarStyle.backgroundColor = 'rgba(255, 255, 255, ' + scale + ')'
      }
    },
    components: {
      NavigationBar,
      SearchInput,
      Search,
      Swiper,
      Activity,
      OptionsMenu,
      Seckill,
      CountDown,
      CommodityList
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