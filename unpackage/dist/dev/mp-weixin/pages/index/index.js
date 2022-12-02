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
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list2: [],
      i: ""
    };
  },
  computed: __spreadValues({}, common_vendor.mapState(["list"])),
  onLoad() {
    if (this.$store.getters.getlist[0] == null) {
      this.get_tab();
    }
  },
  methods: {
    get_tab() {
      common_vendor.yn.callFunction({
        name: "list-tab",
        data: {
          tab: "tab"
        }
      }).then((res) => {
        this.$store.dispatch("ayuncupdatalist", res.result);
      });
    },
    y() {
      common_vendor.index.redirectTo({
        url: "/pages/zhuche/zhuche"
      });
    }
  }
};
if (!Array) {
  const _easycom_nabb2 = common_vendor.resolveComponent("nabb");
  const _easycom_tab2 = common_vendor.resolveComponent("tab");
  const _easycom_list_cord2 = common_vendor.resolveComponent("list-cord");
  const _easycom_list_sorll2 = common_vendor.resolveComponent("list-sorll");
  (_easycom_nabb2 + _easycom_tab2 + _easycom_list_cord2 + _easycom_list_sorll2)();
}
const _easycom_nabb = () => "../../components/nabb/nabb.js";
const _easycom_tab = () => "../../components/tab/tab.js";
const _easycom_list_cord = () => "../../components/list-cord/list-cord.js";
const _easycom_list_sorll = () => "../../components/list-sorll/list-sorll.js";
if (!Math) {
  (_easycom_nabb + _easycom_tab + _easycom_list_cord + _easycom_list_sorll)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      list: _ctx.list
    }),
    b: common_vendor.o(($event) => $options.y())
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u65B0\u5EFA\u6587\u4EF6\u5939/sy/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
