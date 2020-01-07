<template>
  <div id="commodity">
    <NavigationBar @handleClickLeftEvent="handleClickToBack"
      :title="this.$route.params.title"
    >
    </NavigationBar>
    <ArrangeOptions />
    <CommodityList layout="grid"/>
  </div>
</template>

<script>
  import NavigationBar from '@c/navigationBar/index.vue'
  import ArrangeOptions from '@c/arrangeOptions/index.vue'
  import CommodityList from '@c/commodityList/index.vue'
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
      ArrangeOptions,
      CommodityList
    }
  }
</script>

<style lang="scss" scoped>
  #commodity {
    @include init-page();
  }
</style>