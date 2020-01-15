<template>
  <div id='button-container'
    :style="btnStyle"
  >
    <div>加入购物车</div>
    <div>立即购买</div>
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
      }
    },
    data() {
      return {

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
    background: $color-white;
    border-top: $common-border;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
    }
    & > div:first-child {
      background: $color-theme;
    }
    & > div:last-child {
      background: darkgoldenrod;
    }
  }
</style>