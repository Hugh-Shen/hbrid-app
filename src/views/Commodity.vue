<template>
  <div id="commodity">
    <NavigationBar @handleClickLeftEvent="handleClickToBack"
      :title="this.$route.params.title"
    >
    </NavigationBar>
    <ArrangeOptions />
  </div>
</template>

<script>
  import NavigationBar from '@c/navigationBar/index.vue'
  import ArrangeOptions from '@c/arrangeOptions/index.vue'
  export default {
    data() {
      return {}
    },
    methods: {
      handleClickToBack() {
        this.$router.go(-1)
      }
    },
    watch: {},
    components: {
      NavigationBar,
      ArrangeOptions
    }
  }
</script>

<style lang="scss" scoped>
  #commodity {
    @include init-page();
  }
</style>