<template>
  <div id='search-container' :style="{background: searchInputStyle.bgColor, color: searchInputStyle.color}">
    <img :src="searchInputStyle.icon" alt="图标">
    <span class="search-content">围巾</span>
  </div>
</template>

<script>
  export default {
    props: {
      searchInputStyle: {
        type: Object,
        default: function() {
          return {
            icon: require('@assets/images/search.svg')
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #search-container {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;
    border-radius: 40px;
    padding: 0 10px;
    background: $color-white;
    color: $color-gray;
    & > img {
      width: 40px;
      height: 30px;
    }
    .search-context {
      padding-left: 30px;
    }
  }
</style>