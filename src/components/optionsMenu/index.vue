<template>
  <div id='options-menu-container'>
    <div class="options-menu-item"
      v-for="(item, index) in optionsData"
      :key="index"
      @click="handleClickToCorrelationItem(item.to, item.title)"
    >
      <img :src="item.icon" :alt="item.id" />
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        optionsData: [
          {
            id: '1',
            icon: require('@assets/images/jingDongChaoShi.png'),
            title: '星际超市',
            to: 'commodity'
          },
          {
            id: '2',
            icon: require('@assets/images/haiTunQuanQiu.png'),
            title: '海屯全球'
          },
          {
            id: '3',
            icon: require('@assets/images/jingDongFuShi.png'),
            title: '星际服饰'
          },
          {
            id: '4',
            icon: require('@assets/images/jingDongShengXian.png'),
            title: '星际生鲜'
          },
          {
            id: '5',
            icon: require('@assets/images/jingDongDaoJia.png'),
            title: '星际到家'
          },
          {
            id: '6',
            icon: require('@assets/images/chongZhiJiaoFei.png'),
            title: '充值缴费'
          },
          {
            id: '7',
            icon: require('@assets/images/jingDongPinGou.png'),
            title: '9.9元拼'
          },
          {
            id: '8',
            icon: require('@assets/images/lingJuan.png'),
            title: '领劵'
          },
          {
            id: '9',
            icon: require('@assets/images/zhuanQian.png'),
            title: '赚钱'
          },
          {
            id: '10',
            icon: require('@assets/images/quanBu.png'),
            title: '全部'
          }
        ]
      }
    },
    methods: {
      handleClickToCorrelationItem(url, title) {
        this.$router.push({
          name: url,
          params: {
            title
          }
        })
      }
    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  #options-menu-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    background: $color-white;
    padding: 10px 0;
    .options-menu-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      width: 20%;
      & > img {
        width: 80px;
        height: 80px;
      }
      & > span {
        margin-top: 10px
      }
    }
  }
</style>