<template>
  <div id='cart'>
    <NavigationBar title="购物车"
      :show="false"
    />
  </div>
</template>

<script>
  import NavigationBar from '@c/navigationBar/index.vue'
  export default {
    data() {
      return {}
    },
    methods: {
      
    },
    components: {
      NavigationBar
    }
  }
</script>

<style lang="scss" scoped>
  #cart {
    @include init-page();
  }
</style>