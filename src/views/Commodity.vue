<template>
  <div id="commodity">
    <NavigationBar @handleClickLeftEvent="handleClickToBack"
      :title="this.$route.params.title"
    >
      <template slot="right">
        <img :src="defaultLayout['image']" 
          :alt="defaultLayout['type']"
          @click="handleClickIconChange(defaultLayout['id'])"
        />
      </template>
    </NavigationBar>
    <ArrangeOptions />
    <CommodityList :layout="defaultLayout['type']"/>
  </div>
</template>

<script>
  import NavigationBar from '@c/navigationBar/index.vue'
  import ArrangeOptions from '@c/arrangeOptions/index.vue'
  import CommodityList from '@c/commodityList/index.vue'
  export default {
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
        ]
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
      }
    },
    watch: {},
    created() {
      this.defaultLayout = this.layoutTypeImages[0]
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
  }
</style>