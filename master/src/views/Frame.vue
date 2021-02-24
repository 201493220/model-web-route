<template>
  <div class="main">
    <el-row class="top" type="flex">
      <el-col :span="7" class="max_height">
        <logo />
      </el-col>
      <el-col :span="11">
        <nav-menu @addTab="addTab" ref="menu" />
      </el-col>
      <el-col :span="6">
        <opearate @addTab="addTab" />
      </el-col>
    </el-row>
    <el-row>
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        closable
        @tab-remove="removeTab"
        @tab-click="handleClick"
      >
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :name="item.name"
        >
          <!--TODO tooltip后面需要和menu绑定生成面包屑，后面根据真实接入数据修改-->
          <el-tooltip
            class="item-tabs"
            effect="light"
            :content="item.title"
            placement="top-start"
            slot="label"
          >
            <span>{{ item.title }}</span>
          </el-tooltip>
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <el-row>
      <!-- 放子应用的容器 -->
      <div id="subapp-viewport"></div>
    </el-row>
  </div>
</template>

<script>
import logo from '../components/Logo'
import Navmenu from '../components/Menu'
import Opearate from '../components/Opearate'
export default {
  name: 'frame',
  components: {
    logo: logo,
    'nav-menu': Navmenu,
    opearate: Opearate
  },
  data() {
    return {}
  },
  computed: {
    editableTabsValue: {
      get() {
        return this.$store.getters.editableTabsValue
      },
      set(newValue) {
        this.$store.dispatch('menu/setEditableTabsValue', newValue)
      }
    },
    editableTabs: {
      get() {
        return this.$store.getters.editableTabs
      },
      set(newValue) {
        this.$store.dispatch('menu/setEditableTabs', newValue)
      }
    },
    tabIndex: {
      get() {
        return this.$store.getters.tabIndex
      },
      set(newValue) {
        this.$store.dispatch('menu/setEditableTabIndex', newValue)
      }
    }
  },
  methods: {
    logout() {
      this.$login.logout(this)
    },
    addTab(tabName, url) {
      let bExist = false
      this.editableTabs.forEach((tab) => {
        if (tab.title === tabName) {
          bExist = true
          this.editableTabsValue = tab.name
          return
        }
      })
      if (!bExist) {
        let newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          title: tabName,
          name: newTabName,
          url: url
        })
        this.editableTabsValue = newTabName
      }
    },
    removeTab(targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName)
    },
    handleClick(tab) {
      let selTabData = null
      this.editableTabs.forEach((el) => {
        if (tab.name === el.name) {
          selTabData = el
          return
        }
      })
      selTabData.url
        ? window.history.pushState({}, '', selTabData.url + '/')
        : window.history.pushState({}, '', '/')
      //TODO 判断一下实际内容如果是右上角功能就不用设置菜单了
      this.$refs.menu.activeIndex = selTabData.url
    }
  },
  mounted: function () {}
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.top {
  height: 90px;
  background-color: #00284d;
}
#subapp-viewport {
  background-color: #fff;
}
</style>