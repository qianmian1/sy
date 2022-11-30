"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      zhucheMa: "",
      api: "wanjia1"
    };
  },
  computed: __spreadValues({}, common_vendor.mapState(["token"])),
  methods: {
    login() {
      common_vendor.yn.callFunction({
        name: "user",
        data: {
          username: this.username,
          password: this.password,
          zhucheMa: this.zhucheMa,
          api: this.api
        }
      }).then((res) => {
        if (res.result.code == 200) {
          console.log(res);
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
    e: $data.zhucheMa,
    f: common_vendor.o(($event) => $data.zhucheMa = $event.detail.value),
    g: common_vendor.t(_ctx.token),
    h: common_vendor.o(($event) => $options.login())
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator/Desktop/yuanshen/pages/zhuche/wanjia/wanjia.vue"]]);
wx.createPage(MiniProgramPage);
