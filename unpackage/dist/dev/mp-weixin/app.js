"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/zhuche/zhuche.js";
  "./pages/zhuche/fuzhu/fuzhu.js";
  "./pages/zhuche/wanjia/wanjia.js";
}
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
function isPromise(obj) {
  return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
}
common_vendor.index.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    const returnValue = [void 0, void 0];
    return res.then((res2) => {
      returnValue[1] = res2;
    }).catch((err) => {
      returnValue[0] = err;
    }).then(() => returnValue);
  }
});
createApp().app.mount("#app");
exports.createApp = createApp;
