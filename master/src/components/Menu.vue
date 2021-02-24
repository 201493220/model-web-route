<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo gn_top_nav"
      mode="horizontal"
      @select="handleSelect"
      background-color="#ffffff00"
      text-color="#fff"
      active-text-color="#ffffff"
      menu-trigger="click"
    >
      <!-- <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="/RouteModel">
        <template slot="title">运营计划</template>
        <el-submenu index="2-4" id="zonghe">
          <template slot="title">综合运算模型</template>
          <el-menu-item index="/BalanceModel">年产运销平衡</el-menu-item>
          <el-menu-item index="/plan2-1">季月多周期分解</el-menu-item>
          <el-menu-item index="/RouteModel">月度路径优化</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/home1">智能调度</el-menu-item>
      <el-menu-item index="/home2">在线监视</el-menu-item>
      <el-menu-item index="/home3">应急指挥</el-menu-item>
      <el-menu-item index="/home4">系统管理</el-menu-item> -->
      <menu-item :item="item" v-for="item in menu" :key="item.id" ></menu-item>
    </el-menu>
  </div>
</template>
<script>
import MenuItem from './MenuItem'
export default {
  components: {
    'menu-item': MenuItem
  },
  data() {
    return {
      activeIndex: '/',
      menu: [
        {
          id: '1',
          icon: '',
          title: '首页',
          url: '/',
          children: []
        },
        {
          id: '2',
          icon: '',
          title: '运营计划',
          url: '/RouteModel',
          children: [
            {
              id: '2-1',
              icon: '',
              title: '综合运算模型',
              url: '/RouteModel',
              children: [
                {
                  id: '2-3',
                  icon: '',
                  title: '年产运销平衡',
                  url: '/BalanceModel',
                  children: []
                },
                {
                  id: '2-2',
                  icon: '',
                  title: '季月多周期分解',
                  url: '/plan2-1',
                  children: []
                },
                {
                  id: '2-1',
                  icon: '',
                  title: '月度路径优化',
                  url: '/RouteModel',
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: '3',
          icon: '',
          title: '智能调度',
          url: '/home1',
          children: []
        },
        {
          id: '4',
          icon: '',
          title: '在线监视',
          url: '/home2',
          children: []
        },
        {
          id: '5',
          icon: '',
          title: '应急指挥',
          url: '/home3',
          children: []
        },
        {
          id: '6',
          icon: '',
          title: '系统管理',
          url: '/home4',
          children: []
        }
      ]
    }
  },
  methods: {
    handleSelect(key) {
      let item = null
      this.menu.forEach((element) => {
        if (element.url === key) {
          item = element
          return
        }
      })
      key
        ? // ? window.history.pushState({}, '', key + '/')
          // : window.history.pushState({}, '', '/')
          window.history.pushState({}, '', key)
        : window.history.pushState({}, '')
      if (item) {
        this.$emit('addTab', item.title, item.url)
      }
    }
  }
}
</script>

<style scoped>
.gn_top_nav .el-menu-item {
  background-color: rgba(255, 255, 255, 0) !important;
}
#zonghe{
  background-color: #1d2b5e !important;
}
.el-menu--horizontal .el-menu .el-menu-item {
  background-color: #1d2b5e !important;
}
</style>
