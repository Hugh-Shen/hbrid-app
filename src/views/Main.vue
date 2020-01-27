<template>
  <div id='main'>
    <component :is='currentComponents'></component>
    <TabBar @tabBarChangeView="tabBarChangeView"></TabBar>
  </div>
</template>

<script>
  import TabBar from '@c/tabBar/index.vue'
  
  export default {
    name: 'root',
    data() {
      return {
        currentComponents: 'Home'
      }
    },
    methods: {
      tabBarChangeView(arg) {
        this.currentComponents = arg
      }
    },
    components: {
      TabBar,
      Home: () => import('@views/Home.vue'),
      Cart: () => import('@views/Cart.vue'),
      My: () => import('@views/My.vue'),
    }
  }
</script>

<style lang="scss" scoped>
  #main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
  }
</style>