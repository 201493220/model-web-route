export default {
  namespaced: true,
  state: {
    msg: "",
    theme: ''
  },
  mutations: {
    SET_MSG_VALUE(state, data) {
      state.msg = data;
    },
    SET_THEME(state, data) {
      state.theme = data;
    }
  },
  actions: {
    // 设置父应用信息
    setMsg({ commit }, data) {
      commit("SET_MSG_VALUE", data);
    },
    setTheme({ commit }, data) {
      commit("SET_THEME", data);
    }
  }
};
