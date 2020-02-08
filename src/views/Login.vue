<template>
  <div id="login">
    <NavigationBar title="登录"
      show
      @handleClickLeftEvent="handleClickLeftEvent"
    />
    <div class="login-container">
      <div class="input-box">
        <input type="text" 
          placeholder="用户名"
          v-model="username"
        />
      </div>
      <div class="input-box">
        <input v-model="password"
          placeholder="密码"
          type="passwold"
        />
      </div>
    </div>
    <Button title="登录"
      :btnStyle="btnStyle"
    />
    <div class="register">注册新用户</div>
  </div>
</template>

<script>
  import NavigationBar from '@c/navigationBar/index.vue'
  import Button from '@c/button/index.vue'
  export default {
    name: 'login',
    data() {
      return {
        username: "",
        password: "",
        btnStyle: {
          position: "fixed",
          bottom: '200px',
          left: 0,
          children: {
            borderRadius: '20px'
          }
        }
      }
    },
    methods: {
      handleClickLeftEvent() {
        return this.$router.go(
          -1
        )
      }
    },
    components: {
      NavigationBar,
      Button
    }
  }
</script>

<style lang="scss" scoped>
  #login {
    width: 100%;
    height: 100%;
    position: absolute;
    font-size: $font-title;
    .login-container {
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      widows: 100%;
      box-sizing: border-box;
      border-top: $common-border;
      .input-box {
        display: flex;
        align-items: center;
        width: 100%;
        height: 80px;
        border-bottom: $common-border;
        input {
          outline: none;
          border: none;
        }
      }
    }
    .register {
      position: absolute;
      right: 10px;
      bottom: 300px;
      font-size: 22px;
      color: $color-gray;
    }
  }
</style>