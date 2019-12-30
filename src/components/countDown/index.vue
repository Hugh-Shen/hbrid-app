<template>
  <div id="count-down-container"
    :style="{height: countDown['height'] + 'px'}"
  >
    <span class="count-down-start"
      :style="{background: countDown['background']}"
    >
      {{time}}点场
    </span>
    <span class="count-down-time"
      :style="{color: countDown['color']}"
    >
      {{status}}
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      countDown: {
        type: Object,
        default: function() {
          return {
            height: '15',
            background: '#d81e06',
            color: '#d81e06'
          }
        }
      },
      time: {
        type: Number,
        required: true,
        default: function() {
          return 0
        }
      }
    },
    data() {
      return {
        status: '',
        timeRemaining: '',
        interval: null
      }
    },
    methods: {
      /**
       * 计算展示内容
       * 1、当前时间未到开始时间的时候：展示倒计时
       * 2、当前时间到了开始时间的时候：活动进行中
       * 3、当前时间超过开始时间的时候：活动已结束
       */
      getTimeRemaining() {
        if(this.interval) {
          clearInterval(this.interval)
        }

        const date = new Date;
        if(date.getHours() > this.time) {
          return  this.status = '已结束'
        }
        if(date.getHours() == this.time) {
          return this.status = '进行中'
        }
        /** 把当前时间转换成对应的时分秒 */
        const hour = this.time - date.getHours() - 1
        const minute = 60 - date.getMinutes() -1
        const second = 60 -  date.getSeconds()

        this.timeRemaining = hour * 3600 + minute * 60 + second

        this.interval = setInterval(() => {
          this.timeRemaining -= 1
        }, 1000)
      },
      setTimeForUnitsDigit(...parameter) {
        let arr = [...parameter]
        let newArr = arr.map(item => {
          return item.toString().length == 1 ? (item = '0' + item) : item
        })
        return newArr
      }
    },
    watch: {
      /** 监控 timeRemaining 的变化 */
      timeRemaining : function (newValue) {
        let hour = Math.floor(newValue / 3600),
            minute = Math.floor(newValue / 60) % 60,
            second = newValue % 60;
        
        let result = this.setTimeForUnitsDigit(hour, minute, second)
        hour = result[0]
        minute = result[1]
        second = result[2]
        this.status = `${hour}:${minute}:${second}`
        /** 当前秒数为 0 时，改变展示数据 */
        if(newValue == 0) {
          this.timeRemaining()
        }

      },
      status: function () {
        this.getTimeRemaining()
      }
    },
    created() {
      this.getTimeRemaining()
    }
  }
</script>

<style lang="scss" scoped>
  #count-down-container {
    display: flex;
    font-size: 18px;
    font-weight: normal;
    color: $color-white;
    .count-down-start {
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: 5px;
      border: 1px solid $color-theme;
      border-radius: 15px 0 0 15px
    }
    .count-down-time {
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: 10px;
      padding-right: 10px;
      border: 1px solid $color-theme;
      border-radius: 0 15px 15px 0;
    }
  }
</style>