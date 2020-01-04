<template>
  <div id="commodity">
    <NavigationBar @handleClickLeftEvent="handleClickToBack"
      :title="this.$route.params.title"
    >
    </NavigationBar>
    <div class="tab-bar-container">
      <div class="tab-bar-item">
        <span>默认</span>
      </div>
      <div class="tab-bar-item">有货优先</div>
      <div class="tab-bar-item">直营优先</div>
    </div>
  </div>
</template>

<script>
  import NavigationBar from '@c/navigationBar/index.vue'
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
      NavigationBar
    }
  }
</script>

<style lang="scss" scoped>
  #commodity {
    @include init-page();
    .tab-bar-container {
      display: flex;
      width: 100%;
      height: 80px;
      background: $color-white;
      .tab-bar-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33.33%;
        height: 100%;
        box-sizing: border-box;
      }
    }
  }
</style>