<template>
  <div id="dialogs-container" v-if="show"
    @click="handleClickToHide"
  >
    <transition name="fade">
      <div class="dialogs">
        <div class="dialogs-main">
          <img :src="icon" alt="">
        </div>
        <div class="dialogs-footer">{{title}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
  let images = {
    default: require('@assets/images/correct.png')
  }
  export default {
    data() {
      return {
        type: 'default',
        show: false,
        title: '',
        time: 3000,
        icon: ''
      }
    },
    methods: {
      handleClickToHide() {
        this.show = false;
      }
    },
    created() {
      this.icon = images[this.type]
    }
  }
</script>

<style lang="scss" scoped>
  #dialogs-container {
    width: 100%;
    height: 100%;
    color: $color-white;
    // background: rgba($color: #000000, $alpha: 0.4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    & > .dialogs {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 10px 30px;
      border-radius: 20px;
      background: rgba($color: #000000, $alpha: 0.4);
      box-sizing: border-box;
      .dialogs-main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 260px;
        height: 210px;
        // background: $color-white;
        box-sizing: border-box;
        & > img {
          width: 100px;
          height: 100px;
        }
      }
      .dialogs-footer {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 10px 0;
      }
    }
  }
</style>