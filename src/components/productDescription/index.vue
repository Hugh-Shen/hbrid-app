<template>
  <div id="product-description-container">
    <div class="select">
      <span>已选</span>
      <span>{{rendererData.name}}</span>
    </div>
    <div class="tag">
      <ul>
        <li v-for="(item, index) in tag"
          :key="index"
        >
          <img class="item-images"
            src="@assets/images/support.svg" alt="图标"
          >
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="picture-description">
      <img :src="item" 
        alt="描述"
        v-for="(item, index) in rendererData.detailImgs"
        :key="index"
      >
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      rendererData: {
        type: Object,
        default: function() {
          return {}
        }
      },
      tag: {
        type: Array,
        default: function() {
          return [
            '可配送海外',
            '京东发货&售后',
            '京准达',
            '211限时达',
            '可自提',
            '不可使用优惠券'
          ]
        }
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  #product-description-container {
    width: 100%;
    background: $color-white;
    .select {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80px;
      padding: 0 10px;
      box-sizing: border-box;
      & > span:first-child {
        color: $color-gray;
      }
      & > span:nth-child(2) {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: $font-weight;
      }
    }
    .tag {
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      & > ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        border-top: $common-border;
        padding: 20px 0;
        line-height: 40px;
        & > li {
          display: flex;
          justify-content: center;
          align-items: center;
          padding:  0 10px;
          .item-images {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            vertical-align: middle;
          }
        }
      }
    }
    .picture-description {
      width: 100%;
      & > img {
        width: 100%;
        vertical-align: middle
      }
    }
  }
</style>