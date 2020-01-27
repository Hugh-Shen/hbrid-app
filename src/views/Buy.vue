<template>
  <div id="buy">
    <NavigationBar title="立即购买"
      @handleClickLeftEvent="handleClickLeftEvent"
    />
    <div class="commodity-container">
      <img :src="commodityData.img" :alt="commodityData.name" />
      <div class="commodity-detail">
        <p>{{commodityData.name}}</p>
        <p>￥{{commodityData.price | priceValue}}</p>
      </div>
    </div>
    <div class="pay-container">
      <div class="pay-itme"
        v-for="(item, index) in paymentData"
        :key="index"
        @click="handleClickToCheck(item)"
      >
        <img class="pay-icon"
          :src="item.icon" 
        />
        <div class="pay-context">
          <p>{{item.name}}</p>
          <p>{{item.desc}}</p>
        </div>
        <img class="select-icon"
          :src="returnIcon(selectPayMent.id == item.id)"
        />
      </div>
    </div>
    <Button :btnStyle="btnStyle" />
  </div>
</template>

<script>
  import NavigationBar from '@c/navigationBar/index.vue'
  import Button from '@c/button/index.vue'

  import servicePath from '@utils/baseUrl.js'
  import getTheRequiredData from '@utils/serviceApi/index.js'
  import '@utils/mockData/commodityInfoData.js'
  let {commodityInfoData} = servicePath
  export default {
    name: 'buy',
    data() {
      return {
        commodityData: {},
        paymentData: [
          {
            id: '1',
            name: '支付宝',
            desc: '数亿用户都在用，安全可信托',
            icon: require('@assets/images/alipay.svg')
          },
          {
            id: '2',
            name: '微信',
            desc: '数亿用户选择，更快更安全',
            icon: require('@assets/images/weichat.png')
          }
        ],
        selectPayMent: {},
        btnStyle: {
          position: "fixed",
          bottom: 0,
          left: 0,
          children: {
            borderRadius: '20px'
          }
        }
      }
    },
    methods: {
      handleClickLeftEvent() {
        return this.$router.go(
          -1
        )
      },
      handleClickToCheck(e) {
        this.selectPayMent = e
      },
      returnIcon(e) {
        return e ? require('@assets/images/check.svg') : require('@assets/images/no-check.svg')
      }
    },
    components: {
      NavigationBar,
      Button
    },
    created() {
      getTheRequiredData(commodityInfoData, {
        params: this.$route.query.commodityId
      }).then(res => {
        this.commodityData = res.data
        console.log(res.data)
      })
      this.selectPayMent = this.paymentData[0]
    }
  }
</script>

<style lang="scss" scoped>
  #buy {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    background: $bg-color;
    font-size: $base-font;
    position: absolute;
    .commodity-container {
      display: flex;
      padding: 10px;
      background: $color-white;
      margin-top: 10px;
      & > img {
        width: 150px;
        height: 150px;
      }
      .commodity-detail {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 10px;
        font-weight: $font-weight;
        line-height: 30px;
        & > p:last-child {
          color: $color-theme
        }
      }
    }
    .pay-container {
      margin-top: 10px;
      background: $color-white;
      .pay-itme {
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        border-bottom: $common-border;
        padding: 10px 10px;
        .pay-icon { 
          width: 60px;
          height: 60px;
        }
        .pay-context {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 20px;
          & > p:first-child {
            font-weight: $font-weight;
          }
          & > p:last-child {
            margin-top: 5px;
            font-size: $desc-font;
          }
        }
        .select-icon {
          width: 30px;
          height: 30px;
        }
        &:last-child {
          border: none;
        }
      }
    }
  }
</style>