export default {
  namespaced: true,
  state: {
    is_collapse: false, // 折叠状态
    menu: [], // 菜单数据
    editableTabsValue: '', //当前选中页签值
    editableTabs: [], //tab页签内容
    tabIndex: 0 ,//tab页签index
  },
  mutations: {
    // 推入用户菜单
    SET_MENU(state, data) {
      state.menu = data
    },
    // 设置折叠状态
    SET_COLLAPSE_STATUS(state, data) {
      state.is_collapse = data
    },
    SET_EDITTABS_VALUE(state, data) {
      state.editableTabsValue = data
    },
    SET_EDITTABS(state, data) {
      state.editableTabs = data
    },
    SET_EDITTABS_INDEX(state, data) {
      state.tabIndex = data
    }
  },
  actions: {
    // 推入用户菜单
    setMenu({ commit }, data) {
      commit('SET_MENU', data)
    },
    // 设置折叠状态
    setCollapseStatus({ commit }, data) {
      commit('SET_COLLAPSE_STATUS', data)
    },
    setEditableTabsValue({ commit }, data) {
      commit('SET_EDITTABS_VALUE', data)
    },
    setEditableTabs({ commit }, data) {
      commit('SET_EDITTABS', data)
    },
    setEditableTabIndex({ commit }, data) {
      commit('SET_EDITTABS_INDEX', data)
    }
  }
}
