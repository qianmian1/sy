import Vue from 'vue'
import Vuex form 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	//数据源
	state: {
		token: ''
	},
	mutations: {
		SET_TOKEN(state, token) {
			state.token = token
		}
	},
	actions: {
		set_token({
			commit,
			state
		}, token) {
			commit('SET_TOKEN', token)
		}
	}
})
export default store
