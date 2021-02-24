export default {
  namespaced: true,
  state: {
    msg: '',
    defaultApp: 'BalanceModel'
  },
  mutations: {
    // 设置父应用信息
    SET_MSG_VALUE(state, data) {
      state.msg = data
    }
  },
  actions: {
    // 设置父应用信息
    setMsg({ commit }, data) {
      commit('SET_MSG_VALUE', data)
    }
  }
}
