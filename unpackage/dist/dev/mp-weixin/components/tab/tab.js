"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    list: {
      default() {
        return [];
      }
    }
  },
  name: "tab",
  data() {
    return {
      as: 0
    };
  },
  methods: {
    clickTab(item, index) {
      this.as = index;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: index,
        c: common_vendor.o(($event) => $options.clickTab(item, index), index),
        d: $data.as === index ? 1 : ""
      };
    }),
    b: common_vendor.p({
      type: "gear",
      size: "26",
      color: "#666"
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u65B0\u5EFA\u6587\u4EF6\u5939/sy/components/tab/tab.vue"]]);
wx.createComponent(Component);
