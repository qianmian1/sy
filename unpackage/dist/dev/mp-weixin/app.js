"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/zhuche/zhuche.js";
  "./pages/zhuche/fuzhu/fuzhu.js";
  "./pages/zhuche/wanjia/wanjia.js";
  "./pages/zhuche/tiaozhuan/tiaozhuan.js";
}
const _sfc_main = {
  onLaunch: function() {
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    common_vendor.index.setStorageSync("list", this.$store.state.list);
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u65B0\u5EFA\u6587\u4EF6\u5939/sy/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
