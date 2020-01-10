<template>
  <div :id="layoutClass"
    :style="{height: commodityContianer}"
    :class="{'is-scroll': isScroll}"
  >
    <div :class="layoutItemClass"
      v-for="(item, index) in commodityData"
      :key="item.id" 
      :style="styleItems[index]"
      ref="commodityItems"
      @click="jumpToDetails(item)"
    >
      <img :src="item.img" 
        :alt="item.name"
        :style="imagesStyle[index]"
      />
      <div class="item-footer">
        <div :class="['item-footer-name', {'is-have-style': !item.isHave}]">
          <span class="item-footer-tag" v-if="item.isDirect">直营</span>
          <span class="item-footer-tag have" v-if="!item.isHave">缺货</span>
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
    props: {
      layout: {
        type: String,
        default: 'vertical'
      },
      isScroll: {
        type: Boolean,
        default: true
      },
      sortRule: {
        type: String,
        default: '1'
      }
    },
    data() {
      return {
        layoutClass: '',
        layoutItemClass: '',
        commodityData: [],
        MAX_IMAGE_HEIGHT: 240,
        MIN_IMAGE_HEIGHT: 80,
        imagesStyle: [],
        MARGIN_HEIGHT: 5,
        styleItems: [],
        commodityContianer: "",
        sortData: ""
      }
    },
    methods: {
      returnRandomHeight() {
        let result = Math.floor(Math.random() * (this.MAX_IMAGE_HEIGHT - this.MIN_IMAGE_HEIGHT) + this.MIN_IMAGE_HEIGHT)
        return result
      },
      initImagesHeight() {
        if(this.layout == "waterfall") {
          this.commodityData.forEach((item) => {
            let height =  this.returnRandomHeight() + 'px'
            this.imagesStyle.push({height : height})
          })
        }
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
      },
      controlTheLayout() {
        this.commodityContianer = '100%'
        this.styleItems = []
        this.imagesStyle = []
        switch(this.layout) {
          case 'vertical':
            this.layoutClass = 'commodity-vertical-container'
            this.layoutItemClass = 'commodity-vertical-item'
            break;
          case 'grid':
            this.layoutClass = 'commodity-grid-container'
            this.layoutItemClass = 'commodity-grid-item'
            break;
          case 'waterfall':
            this.layoutClass = 'commodity-list-container'
            this.layoutItemClass = 'commodity-item'
            this.initImagesHeight()
            this.$nextTick(() => {
              this.waterfallFlowLayout()
            })
            break;
        }
      },
      setSortRule(type) {
        switch(type) {
          case "1":
            this.sortData = this.commodityData.slice(0)
            break;
          case '1-2':
            this.sortArithmetic("price")
            break;
          case '1-3':
            this.sortArithmetic("volume")
            break;
          case "2":
            this.sortArithmetic("isHave")
            break;
          case "3":
            this.sortArithmetic("isDirect")
            break;
        }
      },
      sortArithmetic(key) {
        this.commodityData.sort((current, next) => {
          let currentVal = current[key]
          let nextVal = next[key]
          if(typeof currentVal == 'boolean' && typeof nextVal == 'boolean') {
            if(currentVal) {
              return -1
            }
            if(nextVal) {
              return 1
            }
            return 0
          }
          if(parseFloat(currentVal) >= parseFloat(nextVal)) {
            return -1
          }
          return 1
        })
      },
      jumpToDetails(e) {
        if(!e.isHave) {
          this.$dialog({
            title: '暂无库存'
          })
        }
      }
    },
    watch: {
      layout: function(newVal) {
        this.controlTheLayout(newVal)
      },
      sortRule: function(newVal) {
        this.setSortRule(newVal)
      }
    },
    created() {
      getTheRequiredData(commodityData).then(res => {
        this.commodityData = res.data.list
        this.setSortRule(this.sortRule)
        this.controlTheLayout()
      })
    }
  }
</script>

<style lang="scss" scoped>
  .is-scroll {
    overflow: hidden;
    overflow-y: auto;
  }
  /* 公共样式 */
  .item-footer {
    padding: 10px 0;
    &-tag {
     background: $color-theme;
     padding: 0 8px;
     border-radius: 5px;
     color: $color-white;
    }
    .have {
      background: $color-gray;
    }
    &-name {
     @include text-line();
     font-size: $base-font;
     font-weight: 700;
     line-height: 26px;
    }
    & > .is-have-style {
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
  /* 瀑布流 layout */
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
    }
  }
  /* 网格 layout */
  #commodity-grid-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    overflow: hidden;
    overflow-y: auto;
    .commodity-grid-item {
      width: 49%;
      padding: 10px;
      margin-top: $margin-top;
      box-sizing: border-box;
      background: $color-white;
      border-radius: 8px;
      & > img {
        width: 100%;
        height: 200px;
      }
    }
  }
  /* 垂直 layout */
  #commodity-vertical-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    padding: 0 10px;
    margin-top: $margin-top;
    background: $color-white;
    box-sizing: border-box;
    .commodity-vertical-item {
      display: flex;
      width: 100%;
      height: 200px;
      padding: 10px 0;
      border-bottom: $common-border;
      & > img {
        flex-shrink: 0;
        width: 200px;
        height: 100%;
      }
      .item-footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        height: 100%;
        margin-left: 20px;
        padding: 10px 0;
        box-sizing: border-box;
        &-tag {
         background: $color-theme;
         padding: 0 8px;
         border-radius: 5px;
         color: $color-white;
        }
        .have {
          background: $color-gray;
        }
        &-name {
         @include text-line();
         font-size: $base-font;
         font-weight: 700;
         line-height: 26px;
        }
        & > .is-have-style {
          color: $color-gray
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
  }
</style>