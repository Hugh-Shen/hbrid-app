<template>
  <div id='my'>
    <NavigationBar title="个人中心"
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
  #my {
    @include init-page()
  }
</style>