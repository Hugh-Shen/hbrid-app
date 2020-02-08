<template>
  <div id='my'>
    <NavigationBar title="个人中心"
      :show="false"
    />
    <div class="list-container">
      <div  class="on-line"
        @click="handleClickToLogin"
      >
        <img src="@assets/images/avater.png" alt="用户头像"/>
        <div>{{info}}</div>
      </div>
      <div v-for="(item, index) in listData"
        :key="index"
        class="item"
      >
        <span>{{item}}</span>
        <img src="@assets/images/right-arrow.svg" alt="图片">
      </div>
    </div>
  </div>
</template>

<script>
  import NavigationBar from '@c/navigationBar/index.vue'
  export default {
    data() {
      return {
        listData: [
          "全部订单",
          "我的预约",
          "应用推荐",
          "用户福利"
        ],
        info: '登录/注册'
      }
    },
    methods: {
      handleClickToLogin() {
        this.$router.push({
          name: 'login',
          params: {
            routeType: 'push'
          }
        })
      }
    },
    components: {
      NavigationBar
    }
  }
</script>

<style lang="scss" scoped>
  #my {
    @include init-page();
    .list-container {
      margin-top: $margin-top;
      padding: 10px;
      background: $color-white;
      box-sizing: border-box;
      .on-line {
        display: flex;
        align-items: center;
        padding: 10px 0;
        & > img {
          width: 80px;
          height: 80px;
          margin-right: 10px;
          vertical-align: middle;
        }
      }
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 80px;
        border-top: $common-border;
        box-sizing: border-box;
        & > img {
          width: 20px; 
          vertical-align: middle;
        }
      }
    }
  }
</style>