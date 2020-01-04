<template>
  <div id='navigation-bar-container'
    :style="navgigationBarStyle"
  >
    <div class="navigation-bar-left"
      @click="handleClickLeftEvent"
    >
      <slot name='left'></slot>
      <img v-if="show"
        src="@assets/images/back.svg" alt="后退"
      >
    </div>
    <div class="navigation-bar-main">
      <slot name='main'></slot>
      <span v-if="title">{{title}}</span>
    </div>
    <div class="navigation-bar-right">
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: true
      },
      navgigationBarStyle: {
        type: Object,
        default: function() {
          return {
            background: 'white'
          }
        }
      }
    },
    data() {
      return {
        height: ''
      }
    },
    methods: {
      handleClickLeftEvent() {
        this.$emit('handleClickLeftEvent')
      }
    },
    watch: {
    }
  }
</script>

<style lang="scss" scoped>
  #navigation-bar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90px;
    z-index: 2;
    .navigation-bar-left {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100%;
      & > img {
        width: 40px;
        height: 40px;
      }
    }
    .navigation-bar-right {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100%;
      text-align: center;
      & > img {
        width: 40px;
        height: 40px;
      }
    }
    .navigation-bar-main {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
</style>