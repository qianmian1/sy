import { openBlock, createElementBlock, defineComponent, resolveDynamicComponent, createElementVNode, normalizeStyle, createVNode } from "vue";
var _style_0$1 = { "na": { "": { "height": 45 } } };
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  name: "nabb",
  data() {
    return {};
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "na",
    renderWhole: true
  });
}
var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/\u65B0\u5EFA\u6587\u4EF6\u5939/sy/components/nabb/nabb.vue"]]);
Object.freeze({});
Object.freeze([]);
const isString = (val) => typeof val === "string";
function resolveEasycom(component, easycom) {
  return isString(component) ? easycom : component;
}
var _style_0 = { "login-box": { "": { "position": "relative", "paddingLeft": "56rpx", "paddingRight": "56rpx" } }, "video-background": { ".login-box ": { "position": "absolute", "top": 0, "right": 0, "left": 0, "bottom": 0 } }, "video": { ".login-box .video-background ": { "position": "absolute", "top": 0, "right": 0, "left": 0, "bottom": 0 } } };
const _sfc_main = defineComponent({
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
  const _component_nabb = resolveEasycom(resolveDynamicComponent("nabb"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", {
      class: "login-box",
      style: normalizeStyle({ height: _ctx.screenHeight + "px" })
    }, [
      createVNode(_component_nabb),
      createElementVNode("view", { class: "video-background" }, [
        createElementVNode("u-video", {
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
      createElementVNode("view", { class: "register-top" }, [
        createElementVNode("u-text", {
          class: "text2 text22",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.tiaozhuan())
        }, " \u670D\u4E3B\u6CE8\u518C \u70B9\u6211 "),
        createElementVNode("u-text", {
          class: "text2 text22",
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.tiaozhuan1())
        }, " \u73A9\u5BB6\u6CE8\u518C \u70B9\u6211 ")
      ])
    ], 4)
  ]);
}
var tiaozhuan = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/\u65B0\u5EFA\u6587\u4EF6\u5939/sy/pages/zhuche/tiaozhuan/tiaozhuan.nvue"]]);
export { tiaozhuan as default };
