"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      api: "login"
    };
  },
  onLoad() {
  },
  methods: {
    login() {
      common_vendor.yn.callFunction({
        name: "user",
        data: {
          username: this.username,
          password: this.password,
          api: this.api
        }
      }).then((res) => {
        if (res.result.code == 200) {
          common_vendor.index.setStorageSync("token", res.result.token);
        }
        console.log(res);
      }).catch((e) => {
        if (e.message == "\u5BC6\u7801\u9519\u8BEF") {
          console.log("\u5BC6\u7801\u9519\u8BEF");
        }
        if (e.message == "\u7528\u6237\u4E0D\u5B58\u5728") {
          console.log("\u7528\u6237\u4E0D\u5B58\u5728");
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
    e: common_vendor.o(($event) => $options.login())
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator/Desktop/yuanshen/pages/zhuche/zhuche.vue"]]);
wx.createPage(MiniProgramPage);
