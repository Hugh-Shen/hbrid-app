<template>
  <div id='search-container'>
    <div class="search-content">
      <img class="search-user-photo"
        :src="userInfo.image" alt="用户头像"
      >
      <div class="search-input-container">
        <div class="search-animation" ref="searchAnimation">
          <input class="search-input" 
            type="text" 
            placeholder="围巾"
            @focus="handleClickToFocus()"
            @blur="handleClickToBlur()"
          >
          <span class="search-input-cancel"
            @click="handleClickSetInputBlur()"
          >
            取消
          </span>
        </div>
      </div>
      <div class="search-right-container">
        <img :src="userInfo.icon" alt="消息">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      userInfo: {
        type: Object,
        default: function() {
          return (
            {
              image: require('@assets/images/chineseStyle.jpeg'),
              icon: require('@assets/images/message.png')
            }
          )
        }
      }  
    },
    data() {
      return {

      }
    },
    methods: {
      handleClickToFocus() {
      this.$refs.searchAnimation.classList.add("animation")
      },
      handleClickToBlur() {
      this.$refs.searchAnimation.classList.remove("animation")
      },
      handleClickSetInputBlur() {
        this.$refs.searchAnimation.blur()
      }
    }
  }
</script>

<style lang="scss" scoped>
  #search-container {
    width: 100%;
    height: 90px;
    box-sizing: border-box;
    background: rgba(238, 34, 68, 0);
    padding: 5px 10px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .search-content {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      .search-user-photo {
        flex-shrink: 0;
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      .search-input-container {
        width: 510px;
        height: 70px;
        margin: 0 10px;
        box-sizing: border-box;
        background: $color-white;
        border: 1px solid $common-border;
        border-radius: 15px;
        overflow: hidden;
        position: relative;
        .search-animation {
          display: flex;
          align-items: center;
          border: 1px solid $common-border;
          width: 410px;
          height: 65px;
          position: absolute;
          left: 50%;
          transform: translate(-5%);
          .search-input {
            width: 310px;
            height: 65px;
            border:0px;
            outline:none;
            font-size: 28px;
            border-radius: 15px;
            color: $color-gray;
          }
          .search-input::-webkit-input-placeholder{
            color: $color-gray;
          }
          .search-input-cancel {
            width: 100px;
            height: 65px;
            text-align: center;
            line-height: 65px;
            color: $color-blue;
          }
        }
      }
      .search-right-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100%;
        & > img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  .animation {
    color: $color-essential;
    animation: move 1s forwards
  }
  @keyframes move {
    from {
      left: 50%;
    }
    to {
      left: 10%;
    }
  }
</style>