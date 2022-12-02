"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  name: "PageRegister",
  setup() {
    function getScreenHeight() {
      const that = this;
      common_vendor.index.getSystemInfo({
        success(res) {
          that.screenHeight = res.screenHeight;
          if (that.getMenuBtnInfoCom.left === 0) {
            that.searchBarWidth = res.screenWidth - 24 - 60 - 24 - 30;
          } else {
            const p = res.windowWidth / 750;
            that.searchBarWidth = that.getMenuBtnInfoCom.left - 48 * p - 20;
          }
        }
      });
      common_vendor.index.setStorageSync("screenHeight", that.screenHeight);
    }
    return {
      getScreenHeight,
      screenHeight: common_vendor.index.getStorageSync("screenHeight")
    };
  },
  methods: {
    tiaozhuan() {
      common_vendor.index.redirectTo({
        url: "/pages/zhuche/fuzhu/fuzhu"
      });
    },
    tiaozhuan1() {
      common_vendor.index.redirectTo({
        url: "/pages/zhuche/wanjia/wanjia"
      });
    }
  },
  onShow() {
    this.$nextTick(() => {
      this.VideoContext = common_vendor.index.createVideoContext("videoRef", this);
      this.VideoContext.play();
    });
    this.getScreenHeight();
  }
});
if (!Array) {
  const _easycom_nabb2 = common_vendor.resolveComponent("nabb");
  _easycom_nabb2();
}
const _easycom_nabb = () => "../../../components/nabb/nabb.js";
if (!Math) {
  _easycom_nabb();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.tiaozhuan()),
    b: common_vendor.o(($event) => _ctx.tiaozhuan1()),
    c: _ctx.screenHeight + "px"
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aa4066b0"], ["__file", "E:/\u65B0\u5EFA\u6587\u4EF6\u5939/sy/pages/zhuche/tiaozhuan/tiaozhuan.nvue"]]);
wx.createPage(MiniProgramPage);
