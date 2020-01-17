<template>
  <div id="commodity"
    @scroll="scrollChange"
    ref="commodity"
  >
    <NavigationBar @handleClickLeftEvent="handleClickToBack"
      :title="title"
    >
      <template slot="right">
        <img :src="defaultLayout['image']" 
          :alt="defaultLayout['type']"
          @click="handleClickIconChange(defaultLayout['id'])"
        />
      </template>
    </NavigationBar>
    <ArrangeOptions  @arrgangeOptionsOnChange="handleSortData"/>
    <CommodityList :layout="defaultLayout['type']"
      :isScroll="false"
      :sortRule="sortType"
    />
  </div>
</template>

<script>
  import NavigationBar from '@c/navigationBar/index.vue'
  import ArrangeOptions from '@c/arrangeOptions/index.vue'
  import CommodityList from '@c/commodityList/index.vue'
  export default {
    name: 'commodity',
    data() {
      return {
        defaultLayout: {},
        layoutTypeImages: [
          {
            id: 1,
            type: 'vertical',
            image: require('@assets/images/list-type.svg')
          },
          {
            id: 2,
            type: 'grid',
            image: require('@assets/images/grid-type.svg')
          },
          {
            id: 3,
            type: 'waterfall',
            image: require('@assets/images/waterfall-type.svg')
          }
        ],
        sortType: "1",
        title: '',
        scrollHeight: 0
      }
    },
    methods: {
      handleClickToBack() {
        this.$router.go(-1)
      },
      handleClickIconChange(id) {
        let index = id + 1
        if(index >= 4) {
          index = 0
          return this.defaultLayout = this.layoutTypeImages[index]
        }
        this.defaultLayout = this.layoutTypeImages[index - 1]
      },
      handleSortData(e) {
        this.sortType = e
      },
      scrollChange(e) {
        this.scrollHeight = e.target.scrollTop
      }
    },
    watch: {},
    created() {
      this.defaultLayout = this.layoutTypeImages[0]
      this.title = '星际超市'
    },
    activated() {
      this.$refs.commodity.scrollTop = this.scrollHeight
    },
    components: {
      NavigationBar,
      ArrangeOptions,
      CommodityList
    }
  }
</script>

<style lang="scss" scoped>
  #commodity {
    @include init-page();
    position: absolute;
  }
</style>