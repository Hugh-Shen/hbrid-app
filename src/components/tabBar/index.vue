<template>
  <div id="tab-bar-container">
    <div class="tab-bar-item" 
      v-for="(item, index) in tabBarData" 
      :key="index"
      @click="handleChangeView(item, index)"
    >
      <img class="item-image" :src="[index == selectItemIndex ? item.activeImage : item.image]" :alt="item.name">
      <span :class="['item-text', {'active-item-text' : index == selectItemIndex}]">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabBarData: [
          {
            name: '首页',
            image: require('@assets/images/home-n.svg'),
            activeImage: require('@assets/images/home-h.svg'),
            componentsName: 'Home'
          },
          {
            name: '购物车',
            image: require('@assets/images/shopping-n.svg'),
            activeImage: require('@assets/images/shopping-h.svg'),
            componentsName: 'Cart'
          },
          {
            name: '我的',
            image: require('@assets/images/my-n.svg'),
            activeImage: require('@assets/images/my-h.svg'),
            componentsName: 'My'
          }
        ],
        selectItemIndex: 0
      }
    },
    methods: {
      handleChangeView(item, index) {
        this.selectItemIndex = index
        this.$emit('tabBarChangeView', item.componentsName)
      },
      changePages(index) {
        this.handleChangeView(this.tabBarData[index], index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #tab-bar-container {
    display: flex;
    height: 100px;
    justify-items: center;
    border-top: $common-border;
    .tab-bar-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      .item-image {
        width: 40px;
        height: 40px;
        vertical-align: middle;
      }
      .item-text {
        
      }
      .active-item-text {
        color: $color-theme;
      }
    }
  }
</style>