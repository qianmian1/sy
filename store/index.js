import {
  createStore
} from "vuex"

const store = createStore({
  //数据源
  state: {
    list: uni.getStorageSync('list') || []
  },
  //唯一取值的地方
  getters: {
    getlist(state) {
      return state.list
    }
  },
  //修改state值的方法 时同步阻塞的
  mutations: {
    updatalist(state, list) {
      state.list = list
    },
    updatastate(state, state1) {
      Object.assign(state, ...state1)
    }
  },
  //异步调用mutations内的方法
  actions: {
    ayuncupdatalist({
      commit
    }, list) {
      commit('updatalist', list)
    },
    ayuncupdatastate({
      commit
    }, state1) {
      commit('updatastate', state1)
    }
  }
})
export default store
