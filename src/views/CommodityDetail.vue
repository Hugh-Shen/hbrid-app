<template>
  <div id="commodity-detail-container">
    <NavigationBar :show="true"
      :navgigationBarStyle="navgigationBarStyle"
      @handleClickLeftEvent="handleClickLeftEvent"
    >
    </NavigationBar>
    <Swiper :swiperData="swiperData" 
      type="flat"
    />
    <div class="commodity-info">
      <p>￥{{commodityData.price | priceValue}}</p>
      <div>{{commodityData.name}}</div>
    </div>
    <ProductDescription :rendererData="commodityData"></ProductDescription>
    <Button :btnStyle="btnStyle" />
  </div>
</template>

<script>
  import NavigationBar from '@c/navigationBar/index.vue'
  import Swiper from '@c/swiper/index.vue'
  import ProductDescription from '@c/productDescription/index.vue'
  import Button from '@c/button/index.vue'

  export default {
    data() {
      return {
        navgigationBarStyle: {
          position: "fixed",
          top:  0,
          left: 0
        },
        slotData: {},
        swiperData: {
          height: 300,
          data: []
        },
        commodityData: "",
        btnStyle: {
          position: "fixed",
          bottom: 0,
          left: 0
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
      Swiper,
      ProductDescription,
      Button
    },
    created() {
      this.swiperData.data = this.$route.params.commodity.swiperImgs
      this.commodityData = this.$route.params.commodity
    }
  }
</script>

<style lang="scss" scoped>
  #commodity-detail-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    background: $bg-color;
    font-size: $base-font;
    .commodity-info {
      padding: 5px 10px;
      box-sizing: border-box;
      line-height: 30px;
      font-weight: $font-weight;
      background: $color-white;
      margin-bottom: 10px;
      & > p {
        color: $color-theme;
      }
    }
  }
</style>