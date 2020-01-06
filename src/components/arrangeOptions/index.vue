<template>
  <div id="tab-bar">
    <div class="tab-bar-item-container">
      <div :class="['tab-bar-item', {'tab-bar-item-active': item.id == selectOption.id}]" 
        v-for="(item, index) in tabBarListData"
        :key="index"
        @click="handleClickChangeTheRank(item)"
      >
        <span>{{item.title}}</span>
        <span class="triangle"
          :class="[childShow ? 'transition' : '']" 
          v-if="item.child.length >= 1" 
        ></span>
      </div>
    </div>

    <transition name="animation">
      <div class="item-child"
        v-show="childShow"
      >
        <div :class="['item-child-list', {'item-child-list-active': item.id == selectOption.id}]"
          v-for="(item, index) in selectOption['child']"
          :key="index"
          @click="handleClickToTheChildToChangeTheRank(item)"
        >
          <span>{{item.title}}</span>
          <img v-if="item.id == selectOption.id"
            src="@assets/images/options-select.svg" 
            alt="图标"
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabBarListData: [
          {
            id: 1,
            title: '默认',
            child: [
              { 
                id: '1',
                title: '默认'
              },
              {
                id: '1-2',
                title: '价格由高到低'
              },
              {
                id: '1-3',
                title: '销量由高到低'
              }
            ]
          },
          { 
            id: 2,
            title: '有货优先',
            child: []
          },
          {
            id: 3,
            title: '直营优先',
            child: []
          }
        ],
        selectOption: {},
        childShow: false
      }
    },
    methods: {
      handleClickChangeTheRank(e) {
        if(this.childShow) {
          this.childShow = false
          return
        }
        if(e.id == this.selectOption.id) {
          this.childShow = true
        }
        this.selectOption = e
      },
      handleClickToTheChildToChangeTheRank(e) {
        this.tabBarListData.forEach(item => {
          item.child.forEach(children => {
            if(item.id = this.selectOption.id) {
              item.id = e.id
              item.title = e.title
            }
          })
        })
        this.childShow = false
      }
    },
    watch: {},
    created() {
      this.selectOption = this.tabBarListData[0]
    }
  }
</script>

<style lang="scss" scoped>
  #tab-bar {
    display: flex;
    flex-direction: column;
    background: $color-white;
    .tab-bar-item-container {
      width: 100%;
      height: 80px;
      .tab-bar-item-active {
        color: $color-theme;
      }
      .tab-bar-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 33.33%;
        height: 100%;
        box-sizing: border-box;
        & > span:first-child {
          margin-right: 10px; 
        }
        .triangle {
          @include triangle();
        }
      }
    }
    .item-child {
      background: $color-white;
      .item-child-list-active {
        color: $color-theme;
      }
      .item-child-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 70px;
        padding: 10px;
        box-sizing: border-box;
        border-top: $common-border;
        & > img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .animation-enter-active {
    animation: open .5s 
  }
  .animation-leave-active {
    animation: close .5s 
  }
  .transition {
    animation: rotate-animation 0.5s forwards
  }
  @keyframes rotate-animation {
    from {
      transform: rotateZ(-180deg)
    }
    to {
      transform: rotateZ(180deg)
    }
  }
  @keyframes open {
    from {
      height: 0;
      overflow: hidden;
    }
    to {
      height: 210px;
      overflow: hidden;
    }
  }
  @keyframes close {
    from {
      height: 210px;
      overflow: hidden;
    }
    to {
      height: 0;
      overflow: hidden;
    }
  }
</style>