<template>
  <div id='commodity-list-container'
    :style="{height: commodityContianer}"
  >
    <div class="commodity-item"
      v-for="(item, index) in commodityData"
      :key="item.id"
      ref="commodityItems"
      :style="styleItems[index]"
    >
      <img :src="item.img" 
        :alt="item.name"
        :style="imagesStyle[index]" 
      />
      <div class="item-footer">
        <div :class="['item-footer-name', {'is-direct-style' : item.isDirect}]">
          <span class="item-footer-tag" v-if="item.isHave">直营</span>
          <span class="item-footer-tag direct" v-if="item.isDirect">缺货</span>
          {{item.name}}
        </div>
        <div class="item-details">
          <span>￥{{item.price | priceValue}}</span>
          <span>销量：{{item.volume}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import getTheRequiredData from '@utils/serviceApi/index.js'
  import servicePath from '@utils/baseUrl.js'
  import '@utils/mockData/commodityData.js'
  let{commodityData} = servicePath
  export default {
    data() {
      return {
        commodityData: [],
        MAX_IMAGE_HEIGHT: 240,
        MIN_IMAGE_HEIGHT: 80,
        imagesStyle: [],
        MARGIN_HEIGHT: 5,
        styleItems: [],
        commodityContianer: ""
      }
    },
    methods: {
      returnRandomHeight() {
        let result = Math.floor(Math.random() * (this.MAX_IMAGE_HEIGHT - this.MIN_IMAGE_HEIGHT) + this.MIN_IMAGE_HEIGHT)
        return result
      },
      initImagesHeight() {
        this.commodityData.forEach((item) => {
          let height =  this.returnRandomHeight() + 'px'
          this.imagesStyle.push({height : height})
        })
      },
      waterfallFlowLayout() {
        let eles = this.$refs.commodityItems;
        if (!eles) {
          return
        }
        let leftHeightTotal = 0, 
            rightHeightTotal = 0;
        eles.forEach((item, index) => {
            let itemStyle = {};
            let elHeight = item.clientHeight + this.MARGIN_HEIGHT;
            if (leftHeightTotal <= rightHeightTotal) {
              itemStyle = {
                left: '5px',
                top: leftHeightTotal + 'px'
              }
              leftHeightTotal += elHeight
            } else {
              itemStyle = {
                right: '5px',
                top: rightHeightTotal + 'px' 
              }
              rightHeightTotal += elHeight
            }
            this.styleItems.push(itemStyle)
        });
        
        if (!this.isScroll) {
          this.commodityContianer = (leftHeightTotal > rightHeightTotal ? leftHeightTotal : rightHeightTotal) + 'px';
        }
      }
    },
    created() {
      getTheRequiredData(commodityData).then(res => {
        this.commodityData = res.data.list
        this.initImagesHeight()
        this.$nextTick(() => {
          this.waterfallFlowLayout()
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
 #commodity-list-container {
   display: flex;
   flex-wrap: wrap;
   width: 100%;
   padding: 0 10px;
   box-sizing: border-box;
   margin-top: $margin-top;
   position: relative;
   .commodity-item {
     width: 48%;
     padding: 10px;
     box-sizing: border-box;
     border-radius: 8px;
     position: absolute;
     background: $color-white;
     & > img {
       width: 100%;
     }
     .item-footer {
       padding: 10px 0;
       &-tag {
        background: $color-theme;
        padding: 0 8px;
        border-radius: 5px;
        color: $color-white;
       }
       .direct {
         background: $color-gray;
       }
       &-name {
        @include text-line();
        font-size: $base-font;
        font-weight: 700;
        line-height: 26px;
       }
       & > .is-direct-style {
         color: $color-gray
       }
     }
     .item-details {
        margin-top: $margin-top;
        display: flex;
        justify-content: space-between;
        font-size: $base-font;
        & > span:first-child {
          font-weight: 700;
          color: $color-theme;
        }
        & > span:last-child {
          color: $color-gray
        }
     }
   }
 }
</style>