<template>
  <div id="parallax"
    @scroll="scrollOnChange"
  >
    <div class="slow-container"
      :style="{top: parallaxDistance}"
    >
      <slot name="slow"></slot>
    </div>
    <div class="default-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        scrollValue: 0,
        SPEED_VALUE: 2
      }
    },
    methods: {
      scrollOnChange(e) {
        this.scrollValue = e.target.scrollTop
        this.$emit('scrollOnChange', this.scrollValue)
      }
    },
    computed: {
      parallaxDistance: function() {
        return (this.scrollValue - (this.scrollValue / this.SPEED_VALUE)) + 'px'
      }
    }
  }
</script>

<style lang="scss" scoped>
  #parallax {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    .slow-container {
      width: 100%;
      position: relative;
    }
    .default-container {
      width: 100%;
      position: relative;
    }
  }
</style>