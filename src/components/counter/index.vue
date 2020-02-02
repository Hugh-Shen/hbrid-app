<template>
  <div id="counter-container">
    <span :class="['minu', {'banned': number == 1}]" 
      @click="handleClickMinu"
    >
      -
    </span>
    <span class="count">{{number}}</span>
    <span class="minu" 
      @click="handleAddCount"
    >
      +
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      count: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        number: 1
      }
    },
    methods: {
      handleClickMinu() {
        if(this.number == 1) {
          return 
        }
        this.number -= 1
      },
      handleAddCount() {
        this.number += 1
      }
    },
    watch: {
      count: function(newVal) {
        this.number = newVal
      },
      number: function(newVal) {
        this.$emit('numberChange', newVal)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #counter-container {
    display: flex;
    font-size: $font-title;
    .banned {
      color: $color-gray;
    }
    .minu {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: $font-weight;
      width: 40px;
    }
    .count {
      padding: 0 10px;
      background: $bg-color;
    }
  }
</style>