<template>
  <div id='main'>
    <component :is='currentComponents'></component>
    <TabBar @tabBarChangeView="tabBarChangeView"
      ref="tabBar"
    />
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
      },
      handlePageJumps() {
        let index =  this.$route.params.componentIndex
        if(index == undefined) {
          return
        }
        this.$refs.tabBar.changePages(index)
      }
    },
    components: {
      TabBar,
      Home: () => import('@views/Home.vue'),
      Cart: () => import('@views/Cart.vue'),
      My: () => import('@views/My.vue'),
    },
    activated() {
      this.handlePageJumps()
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