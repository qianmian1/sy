<script>
  export default {
    onLaunch: function() {
      //   this.$store.replaceState(null != uni.getStorageSync('state') ? Object.assign(uni.getStorageSync('state')) :
      //     Object.assign(this
      //       .$store.state))
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      uni.setStorageSync('list', this.$store.state.list)
    },
  }
</script>

<style>
  /*每个页面公共css */
</style>
