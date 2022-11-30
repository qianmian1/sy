"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      ip: "",
      api: "fuzhu1"
    };
  },
  methods: {
    login() {
      common_vendor.yn.callFunction({
        name: "user",
        data: {
          username: this.username,
          password: this.password,
          ip: this.ip,
          api: this.api
        }
      }).then((res) => {
        if (res.result.code == 200) {
          common_vendor.index.setStorageSync("token", res.result.token);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.username,
    b: common_vendor.o(($event) => $data.username = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: $data.ip,
    f: common_vendor.o(($event) => $data.ip = $event.detail.value),
    g: common_vendor.o(($event) => $options.login())
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator/Desktop/yuanshen/pages/zhuche/fuzhu/fuzhu.vue"]]);
wx.createPage(MiniProgramPage);
