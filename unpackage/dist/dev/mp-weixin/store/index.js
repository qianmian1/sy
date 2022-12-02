"use strict";
var common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    list: common_vendor.index.getStorageSync("list") || []
  },
  getters: {
    getlist(state) {
      return state.list;
    }
  },
  mutations: {
    updatalist(state, list) {
      state.list = list;
    },
    updatastate(state, state1) {
      Object.assign(state, ...state1);
    }
  },
  actions: {
    ayuncupdatalist({
      commit
    }, list) {
      commit("updatalist", list);
    },
    ayuncupdatastate({
      commit
    }, state1) {
      commit("updatastate", state1);
    }
  }
});
exports.store = store;
