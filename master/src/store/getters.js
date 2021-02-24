const getters = {
  menu: state => state.menu.menu,
  is_collapse: state => state.menu.is_collapse,
  editableTabsValue: state => state.menu.editableTabsValue,
  editableTabs: state => state.menu.editableTabs,
  tabIndex: state => state.menu.tabIndex,
  size: state => state.app.size,
  msg: state => state.appstore.msg,
  defaultApp: state => state.appstore.defaultApp
}

export default getters
