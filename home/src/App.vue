<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  overflow-y: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 0px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// 蓝色主题
// #app {
//   background-color: #e1eff2;
//   color: #303133;
// }
// #app .el-menu-item-group__title {
//   display: none;
// }
// #app .el-menu-vertical-demo:not(.el-menu--collapse) {
//   background-color: #e1eff2 !important;
//   color: #303133 !important;
// }
// #app .el-menu-vertical-demo.el-menu--collapse {
//   background-color: #e1eff2 !important;
//   color: #303133 !important;
// }
// #app .el-submenu .el-menu-item {
//   background-color: #e1eff2 !important;
//   color: #303133 !important;
// }
// #app .el-menu-item.is-active {
//   background-color: #a0cfff !important;
//   color: blue !important;
// }
// #app .el-menu-item {
//   color: #303133 !important;
// }
// #app .el-menu-item:hover {
//   color: blue !important;
//   background-color: #fff !important;
// }
// #app .el-submenu__title {
//   color: #3d5f5f !important;
// }
// #app .el-submenu__title:hover {
//   color: blue !important;
//   background-color: aqua !important;
// }
// #app .btn {
//   background-color: #e1eff2 !important;
//   color: #303133 !important;
// }
// #app .title span {
//   color: #303133 !important;
// }
// #app .title span {
//   color: #303133 !important;
// }
// #app .el-table__header tr,
// .el-table__header th {
//   background-color: #D1E3E7 !important;
//   color: white;
//   border: 1px solid #D1E3E7 !important;
// }
// #app .el-table__body tr,
// .el-table__body td {
//   background-color: #e1eff2 !important;
//   color: #303133;
//   border: 1px solid #D1E3E7 !important; 
// }
// #app .el-table--border {
//    border-bottom: 1px solid #D1E3E7 !important; 
// }
// #app .el-table--border::after, .el-table--group::after, .el-table::before {
//   border-bottom: 1px solid #D1E3E7 !important; 
// }
// #app input.el-input__inner {
//   background-color: #fff !important;
//   color: #303133;
// }

// #app div p {
//   color: #303133;
// }
// #app .el-pagination.is-background .btn-next,
// .el-pagination.is-background .btn-prev,
// .el-pagination.is-background .el-pager li {
//   background-color: rgb(21, 179, 190) !important;
// }
// #app .el-table__empty-text {
//   background-color: #e1eff2 !important;
//   color: #303133;
// }
// #app .el-table__empty-block {
//   background-color: #e1eff2 !important;
//   color: #303133;
// }
</style>
