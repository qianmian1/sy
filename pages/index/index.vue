<template>
  <view class="home">
    <nabb></nabb>
    <tab :list="list"></tab>
    <list-sorll>
      <list-cord></list-cord>
    </list-sorll>
    <text @click="y()">11111</text>
    <!-- <view>
			<uni-data-select v-model="i" :localdata="list2"></uni-data-select>
		</view> -->


  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        list2: [],
        i: ''
      }
    },
    computed: {
      ...mapState(['list'])
    },
    onLoad() {
      if (this.$store.getters.getlist[0] == null) {
        this.get_tab()
      }
    },
    methods: {
      get_tab() {
        uniCloud.callFunction({
          name: 'list-tab',
          data: {
            tab: 'tab'
          }
        }).then(res => {
          this.$store.dispatch('ayuncupdatalist',
            res.result
          )
        })
      },
      y() {
        uni.redirectTo({
          url: '/pages/zhuche/zhuche'
        })
      }
    }
  }
</script>

<style lang="scss">
  page {
    height: 100%;
    display: flex;

  }

  .home {
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px black solid;
  }
</style>
