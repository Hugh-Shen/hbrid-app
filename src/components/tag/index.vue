<template>
  <div id="tag-container" v-if="tagData.isDirect || !tagData.isHave">
    <span class="item-footer-tag" v-if="tagData.isDirect">直营</span>
    <span class="item-footer-tag have" v-if="!tagData.isHave">缺货</span>
  </div>
</template>

<script>
  export default {
    props: {
      tagData: {
        type: Object,
        require: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  #tag-container {
    display: inline-block;
    & > .item-footer-tag:first-child {
      margin-right: 5px;
    }
    .item-footer-tag  {
      display: inline-flex;
      justify-self: center;
      font-size: 20px;
      background: $color-theme;
      padding: 0 8px;
      border-radius: 5px;
      color: $color-white;
    }
    .have {
      background: $color-gray;
    }
  }
</style>