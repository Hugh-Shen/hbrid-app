<template>
  <div id="commodity-detail-container">
    <NavigationBar :show="true"
      :navgigationBarStyle="navgigationBarStyle"
      @handleClickLeftEvent="handleClickLeftEvent"
    >
      <template v-slot:main>
        <div class="commodity-title" 
          :style="{'opacity': opacity}"
        >
          商品详情
        </div>
      </template>
    </NavigationBar>
    <Parallax @scrollOnChange="scrollOnChange">
      <template v-slot:slow>
        <Swiper :swiperData="swiperData" 
          type="flat"
        />
      </template>
      <template>
        <div class="commodity-info">
          <p>￥{{commodityData.price | priceValue}}</p>
          <div>{{commodityData.name}}</div>
        </div>
        <ProductDescription :rendererData="commodityData"></ProductDescription>
        <Button :btnStyle="btnStyle" 
          isAddCart
          @handleClickToBuy="handleClickToBuy"
          @handleClickToShoppingCart="handleClickToShoppingCart"
        />
      </template>
    </Parallax>
  </div>
</template>

<script>
  import NavigationBar from '@c/navigationBar/index.vue'
  import Swiper from '@c/swiper/index.vue'
  import ProductDescription from '@c/productDescription/index.vue'
  import Button from '@c/button/index.vue'
  import Parallax from '@c/parallax/index.vue'

  import servicePath from '@utils/baseUrl.js'
  import getTheRequiredData from '@utils/serviceApi/index.js'
  import '@utils/mockData/commodityInfoData.js'
  let {commodityInfoData} = servicePath
  export default {
    name: 'detail',
    data() {
      return {
        navgigationBarStyle: {
          position: "fixed",
          top:  0,
          left: 0,
          backgroundColor: ""
        },
        slotData: {},
        swiperData: {
          height: 300,
          data: []
        },
        commodityData: {},
        btnStyle: {
          position: "fixed",
          bottom: 0,
          left: 0,
          backgroundColor: '#ffffff',
          borderTop: '1px solid #ccc'
        },
        MAX_HEIGHT: 100,
        opacity:  0
      }
    },
    methods: {
      handleClickLeftEvent() {
        return this.$router.go(
          -1
        )
      },
      scrollOnChange(e) {
        this.opacity = e / this.MAX_HEIGHT
        this.navgigationBarStyle.backgroundColor = 'rgba(216, 30, 6, ' + this.opacity + ')'
      },
      handleClickToBuy() {
        this.$router.push({
          name: 'buy',
          params: {
            routeType: 'push'
          },
          query: {
            commodityId: this.commodityData.id
          }
        })
      },
      handleClickToShoppingCart() {
        this.$dialog({
          title: '添加成功',
          time: 400
        })
        this.$router.push({
          name: 'root',
          params: {
            routeType: 'push',
            componentIndex: 1,
            clearStack: true
          }
        })
      }
    },
    watch: {},
    components: {
      NavigationBar,
      Swiper,
      ProductDescription,
      Button,
      Parallax 
    },
    created() {
      getTheRequiredData(commodityInfoData, {
        method: 'post',
        params: this.$route.query.commodityId
      }).then(res => {
        this.commodityData = res.data
        this.swiperData.data = res.data.swiperImgs
      })
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
    position: absolute;
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
  .commodity-title {
    color: $color-white;
    font-weight: $font-weight;
  }
</style>