<template>
  <div id="activity-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    created() {}
  }
</script>

<style lang="scss" scoped>
  #activity-container {
    width: 100%;
    max-height: 200px;
  }
</style>