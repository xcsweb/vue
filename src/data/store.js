import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

const state = {
  data: "现在没有参数"
}

const mutations = {
  ADDDATA (state,zhi) {
    state.data=zhi;
  }
}

export default new Vuex.Store({
  state,
  mutations
})