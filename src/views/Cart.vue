<template>
  <div id='cart'>
    <NavigationBar title="购物车"
      :show="false"
    />
    <div class="shopping-list-container">
      <div class="shopping-item"
        v-for="(item, index) in shoppingCartData"
        :key="index"
        @click="handleClickToSelections(item)"
      >
        <img class="item-check-icon"
          :src="setCheckIcon(item.isCheck)" 
          alt="图标"
        />
        <img class="commodity-image"
          :src="item.img" 
          alt="商品图片"
        />
        <div class="commodity-detail">
          <div class="commodity-detail-header">
            <Tag :tagData="item" />
            {{item.name}}
          </div>
          <div class="commodity-detail-footer">
            <div class="commodity-detail-footer-price">￥{{item.price | priceValue}}</div>
            <Counter :count="item.number"
              @numberChange="numberChangeEvent(arguments, item, index)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="totalize-container"
      @click="handleClickToAllSelections"
    >
      <img class="totalize-image"
        :src="setAllSelections(statisticsData.allSelections)" 
        alt="全选"
      >
      <span>全选</span>
      <div class="sum">
        <p>合计：<span class="sum-money">￥{{statisticsData.money | priceValue}}</span></p>
        <p>总额 <span class="sum-money">
          ￥{{statisticsData.money | priceValue}}
          </span> 立减 <span class="sum-money">￥0.00</span>
        </p>
      </div>
      <div class="close-an-account">去结算({{statisticsData.number}})</div>
    </div>
  </div>
</template>

<script>
  import NavigationBar from '@c/navigationBar/index.vue'
  import Tag from '@c/tag/index.vue'
  import Counter from '@c/counter/index.vue'
  export default {
    data() {
      return {
        shoppingCartData: this.$store.state.shoppingData,
        statisticsData: {
          allSelections: false,
          number: 0,
          money: 0.00
        }
      }
    },
    methods: {
      setCheckIcon(isCheck) {
        return isCheck ? require('@assets/images/check.svg') : require('@assets/images/no-check.svg')
      },
      handleClickToSelections(e) {
        e.isCheck = !e.isCheck
        this.computeAmount()
      },
      setAllSelections(isCheck) {
        return isCheck ? require('@assets/images/check.svg') : require('@assets/images/no-check.svg')
      },
      handleClickToAllSelections() {
        this.statisticsData.allSelections = !this.statisticsData.allSelections
        this.shoppingCartData.forEach(item => {
          item.isCheck = this.statisticsData.allSelections
        });
        this.computeAmount()
      },
      numberChangeEvent($arguments, item, index) {
        let number  = $arguments[0]
        this.$store.commit('changeSpecifiedData', {
          index: index,
          number: number
        })
        // 商品状态发生变化
        if (item.isCheck) {
          this.computeAmount();
        }
      },
      computeAmount() {
        this.statisticsData = {
          allSelections: true,
          number: 0,
          money: 0.00
        }
        this.shoppingCartData.forEach(item => {
          if(item.isCheck) {
            this.statisticsData.money += parseFloat(item.price) * parseInt(item.number)
            this.statisticsData.number += parseInt(item.number)
          }else {
            this.statisticsData.allSelections = false
          }
        })
      }
    },
    components: {
      NavigationBar,
      Tag,
      Counter
    },
    created() {
      this.computeAmount()
    }
  }
</script>

<style lang="scss" scoped>
  #cart {
    @include init-page();
    .shopping-list-container {
      width: 100%;
      height: calc(100% - 170px);
      overflow: hidden;
      overflow-y: auto;
      .shopping-item {
        display:flex;
        background: $color-white;
        box-sizing: border-box;
        padding: 10px;
        border-top: $common-border;
        .item-check-icon {
          width: 30px;
        }
        .commodity-image {
          width:150px;
          height: 150px;
          margin-left: 10px;
          margin-right: 10px;
        }
        .commodity-detail {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .commodity-detail-header {
            @include text-line();
            font-size: $base-font;
            font-weight: 700;
            line-height: 30px;
          }
          .commodity-detail-footer {
            display: flex;
            justify-content: space-between;
            .commodity-detail-footer-price {
              font-weight: 700;
              color: $color-theme;
            }
          }
        }
      }
    }
    .totalize-container {
      display: flex;
      width: 100%;
      height: 80px;
      align-items: center;
      box-sizing: border-box;
      padding-left: 10px;
      background: $color-white;
      border-top: $common-border;
      .totalize-image {
        width: 30px;
      }
      & > span {
        padding: 0 10px;
      }
      .sum {
        flex: 1;
        & > p {
          .sum-money {
            color: $color-theme;
            font-weight: 700;
          }
        }
        & > p:last-child {
          margin-top: 5px;
        }
      }
      .close-an-account {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 220px;
        height: 100%;
        background: $color-theme;
        color: $color-white;
      }
    }
  }
</style>