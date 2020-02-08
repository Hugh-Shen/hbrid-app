<template>
  <div id='button-container'
    :style="btnStyle"
  >
    <div  v-if="isAddCart"
      @click="handleClickToShoppingCart"
    >
      加入购物车
    </div>
    <div @click="handleClickToBuy"
      :style="btnStyle.children"
    >
      {{title}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      btnStyle: {
        type: Object,
        default: function() {
          return {}
        }
      },
      isAddCart: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '立即购买'
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handleClickToBuy() {
        this.$emit('handleClickToBuy')
      },
      handleClickToShoppingCart() {
        this.$emit('handleClickToShoppingCart')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #button-container {
    display: flex;
    width: 100%;
    height: 100px;
    padding: 10px;
    box-sizing: border-box;
    & > div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color:  $color-white;
    }
    & > div:first-child {
      background: darkgoldenrod;
    }
    & > div:last-child {
      background: $color-theme;
    }
  }
</style>