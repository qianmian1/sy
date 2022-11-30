"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [],
      list2: [],
      i: ""
    };
  },
  onLoad() {
    this.get_tab();
  },
  methods: {
    get_tab() {
      common_vendor.yn.callFunction({
        name: "list-tab",
        data: {
          tab: "tab"
        }
      }).then((res) => this.list = res.result);
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
      list: $data.list
    }),
    b: common_vendor.p({
      ["enable-flex"]: "true"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator/Desktop/yuanshen/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
