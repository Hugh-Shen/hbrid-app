<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive :include="virtualStack">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        transitionName: 'animation',
        virtualStack: ['root']
      }
    },
    watch: {
      '$route' (to, from) {
        let val = to.params.routeType
        if(val == 'push') {
          this.virtualStack.push(to.name)
          this.transitionName = 'animation'
        }else {
          this.virtualStack.pop()
          this.transitionName = 'animationPush'
        }
        if(to.params.clearStack) {
          this.virtualStack = ['root']
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '~@assets/style/reset.css';
  #app {
    width: 100%;
    height: 100%;
  }
  .animation-enter-active {
    animation: enter-into 0.6s
  }
  .animation-leave-active {
    animation: out 0.6s
  }
  @keyframes enter-into {
    from {
      transform: translate(100%, 0)
    }
    to {
      transform: translate(0, 0)
    }
  }
  @keyframes out {
    from {
      transform: translate(0, 0)
    }
    to {
      transform: translate(-100%, 0)
    }
  }
  .animationPush-enter-active {
    animation: push-enter-into 0.6s
  }
  .animationPush-leave-active {
    animation: push-out 0.6s
  }
  @keyframes push-enter-into {
    from {
      transform: translate(-100%, 0)
    }
    to {
      transform: translate(0, 0)
    }
  }
  @keyframes push-out {
    from {
      transform: translate(0, 0)
    }
    to {
      transform: translate(100%, 0)
    }
  }
</style>
