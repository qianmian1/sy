"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // E:/新建文件夹/sy/unpackage/dist/dev/.nvue/pages/zhuche/tiaozhuan/tiaozhuan.js
  var import_vue = __toESM(require_vue());
  var _style_0$1 = { "na": { "": { "height": 45 } } };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var _sfc_main$1 = {
    name: "nabb",
    data() {
      return {};
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
      class: "na",
      renderWhole: true
    });
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/\u65B0\u5EFA\u6587\u4EF6\u5939/sy/components/nabb/nabb.vue"]]);
  Object.freeze({});
  Object.freeze([]);
  var isString = (val) => typeof val === "string";
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }
  var _style_0 = { "login-box": { "": { "position": "relative", "paddingLeft": "56rpx", "paddingRight": "56rpx" } }, "video-background": { ".login-box ": { "position": "absolute", "top": 0, "right": 0, "left": 0, "bottom": 0 } }, "video": { ".login-box .video-background ": { "position": "absolute", "top": 0, "right": 0, "left": 0, "bottom": 0 } } };
  var _sfc_main = (0, import_vue.defineComponent)({
    name: "PageRegister",
    setup() {
      function getScreenHeight() {
        const that = this;
        uni.getSystemInfo({
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
        uni.setStorageSync("screenHeight", that.screenHeight);
      }
      return {
        getScreenHeight,
        screenHeight: uni.getStorageSync("screenHeight")
      };
    },
    methods: {
      tiaozhuan() {
        uni.redirectTo({
          url: "/pages/zhuche/fuzhu/fuzhu"
        });
      },
      tiaozhuan1() {
        uni.redirectTo({
          url: "/pages/zhuche/wanjia/wanjia"
        });
      }
    },
    onShow() {
      this.$nextTick(() => {
        this.VideoContext = uni.createVideoContext("videoRef", this);
        this.VideoContext.play();
      });
      this.getScreenHeight();
    }
  });
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nabb = resolveEasycom((0, import_vue.resolveDynamicComponent)("nabb"), __easycom_0);
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", {
        class: "login-box",
        style: (0, import_vue.normalizeStyle)({ height: _ctx.screenHeight + "px" })
      }, [
        (0, import_vue.createVNode)(_component_nabb),
        (0, import_vue.createElementVNode)("view", { class: "video-background" }, [
          (0, import_vue.createElementVNode)("u-video", {
            id: "videoRef",
            src: "https://cn-gddg-ct-01-11.bilivideo.com/upgcxcode/65/35/827023565/827023565-1-208.mp4?e=ig8euxZM2rNcNbhMnWdVhwdlhzKHhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1669923109&gen=playurlv2&os=bcache&oi=1921313500&trid=0000fde58b7ad21a4254b9a09fa493136ef5T&mid=0&platform=html5&upsig=f7c0159edd75167e1a11474f8f0ca8df&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=61311&bvc=vod&nettype=0&bw=349878&orderid=0,1&logo=80000000",
            objectFit: "cover",
            autoplay: true,
            controls: false,
            muted: true,
            loop: true,
            enableProgressGesture: false,
            class: "video"
          })
        ]),
        (0, import_vue.createElementVNode)("view", { class: "register-top" }, [
          (0, import_vue.createElementVNode)("u-text", {
            class: "text2 text22",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.tiaozhuan())
          }, " \u670D\u4E3B\u6CE8\u518C \u70B9\u6211 "),
          (0, import_vue.createElementVNode)("u-text", {
            class: "text2 text22",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.tiaozhuan1())
          }, " \u73A9\u5BB6\u6CE8\u518C \u70B9\u6211 ")
        ])
      ], 4)
    ]);
  }
  var tiaozhuan = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/\u65B0\u5EFA\u6587\u4EF6\u5939/sy/pages/zhuche/tiaozhuan/tiaozhuan.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/zhuche/tiaozhuan/tiaozhuan";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    tiaozhuan.mpType = "page";
    const app = Vue.createPageApp(tiaozhuan, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...tiaozhuan.styles || []]));
    app.mount("#root");
  }
})();
