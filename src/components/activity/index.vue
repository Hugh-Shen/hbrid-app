<template>
  <div class="activity-container">

  </div>
</template>

<script>
  export default {
    props: {
      activityData: {
        type: Array,
        default: () => []
      }
    },
    data() {},
    methods: {},
    created() {}
  }
</script>

<style lang="scss" scoped>
  #activity-container {
    display: flex;
    width: 100%;
    height: 200px;
  }
</style>