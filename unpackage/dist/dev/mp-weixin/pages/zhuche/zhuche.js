"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      api: "login",
      rules: {
        username: {
          rule: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
          msg: "\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A"
        },
        password: {
          rule: /^[0-9a-zA-Z]{6,16}$/,
          msg: "\u5BC6\u7801\u5E94\u8BE5\u4E3A6-16\u4F4D"
        }
      }
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
          common_vendor.index.redirectTo({
            url: "/pages/index/index"
          });
          common_vendor.index.setStorageSync("token", res.result.token);
        }
      }).catch((e) => {
        if (e.message == "\u5BC6\u7801\u9519\u8BEF") {
          common_vendor.index.showToast({
            title: "\u5BC6\u7801\u6216\u8D26\u53F7\u9519\u8BEF",
            icon: "error"
          });
        }
        if (e.message == "\u7528\u6237\u4E0D\u5B58\u5728") {
          common_vendor.index.showToast({
            title: "\u7528\u6237\u4E0D\u5B58\u5728",
            icon: "error"
          });
        }
      });
    },
    zhuce() {
      common_vendor.index.redirectTo({
        url: "/pages/zhuche/tiaozhuan/tiaozhuan"
      });
    },
    validate(key) {
      let bool = true;
      if (!this.rules[key].rule.test(this[key])) {
        common_vendor.index.showToast({
          title: this.rules[key].msg
        });
        bool = false;
        return false;
      }
      return bool;
    }
  }
};
if (!Array) {
  const _easycom_nabb2 = common_vendor.resolveComponent("nabb");
  _easycom_nabb2();
}
const _easycom_nabb = () => "../../components/nabb/nabb.js";
if (!Math) {
  _easycom_nabb();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.validate($data.username)),
    b: $data.username,
    c: common_vendor.o(($event) => $data.username = $event.detail.value),
    d: common_vendor.o(($event) => $options.validate($data.password)),
    e: $data.password,
    f: common_vendor.o(($event) => $data.password = $event.detail.value),
    g: common_vendor.o(($event) => $options.zhuce()),
    h: common_vendor.o(($event) => $options.login())
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u65B0\u5EFA\u6587\u4EF6\u5939/sy/pages/zhuche/zhuche.vue"]]);
wx.createPage(MiniProgramPage);
