<template>
  <div>
    <NavigationBar :show="true"
      :navgigationBarStyle="navgigationBarStyle"
      @handleClickLeftEvent="handleClickLeftEvent"
    >
    </NavigationBar>
    <Swiper :swiperData="swiperData" 
      type="flat"
    />
  </div>
</template>

<script>
  import NavigationBar from '@c/navigationBar/index.vue'
  import Swiper from '@c/swiper/index.vue'
  export default {
    data() {
      return {
        navgigationBarStyle: {},
        slotData: {},
        swiperData: {
          height: 300,
          data: []
        }
      }
    },
    methods: {
      handleClickLeftEvent() {
        return this.$router.go(
          -1
        )
      }
    },
    watch: {},
    components: {
      NavigationBar,
      Swiper
    },
    created() {
      this.swiperData.data = this.$route.params.commodity.swiperImgs
    }
  }
</script>

<style lang="scss" scoped>

</style>