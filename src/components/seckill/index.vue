<template>
  <div id="seckill-container">
    <div class="seckill-title-container">
      <span class="seckill-title">整点秒杀</span>
      <div class="seckill-count-down">
        <slot></slot>
      </div>
    </div>
    <div class="seckill-body-container">
      <div class="seckill-item"
        v-for="(item, index) in seckillData"
        :key="index"
      >
        <img class="item-image"
          :src="item.icon" :alt="item.id" 
        />
        <div class="item-content">
          <p>￥{{item.price | priceValue}}</p>
          <p>￥{{item.oldPrice | priceValue}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      seckillData: {
        type: Array,
        required: true,
        default: function() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #seckill-container {
    padding: 0 10px;
    margin-top: $margin-top;
    background: $color-white;
    .seckill-title-container {
      display: flex;
      align-items: center;
      width: 100%;
      height: 50px;
      border-bottom: $common-border;
      font-size: $font-title;
      font-weight: $font-weight;
      .seckill-title {
        margin-right: 10px;
      }
      .seckill-count-down {
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
    .seckill-body-container {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      overflow-x: scroll;
      padding: 20px 0;
      .seckill-item {
        text-align: center;
        & > img {
          width: 160px;
          height: 160px;
        }
        .item-content {
          padding-top: 10px;
          color: $color-theme;
          & > p:last-child {
            margin-top: 5px;
            color: $color-gray;
            text-decoration: line-through
          }
        }
      }
    }
  }
</style>