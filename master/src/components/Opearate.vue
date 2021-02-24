<template>
  <div class="max_height_nofloat">
    <el-row type="flex" class="icon_group">
      <div class="gn_icon">
        <i class="el-icon-rank btn-fullscreen" @click="fullScreen"></i>
      </div>
      <div class="gn_icon">
        <el-badge :value="2" class="item" type="primary">
          <i
            class="el-icon-picture-outline-round gn_icon"
            @click="drawer = true"
          ></i>
        </el-badge>
      </div>
      <div class="user_img">
        <img src="../assets/img.jpg" />
      </div>
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          admin
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="item in menu"
            :key="item.content"
            :command="item.content"
            ><i :class="item.icon"></i>{{ item.content }}</el-dropdown-item
          >
          <el-dropdown-item divided command="loginout"
            ><i class="el-icon-switch-button"></i>退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
    <el-drawer
      title="主题方案"
      :visible.sync="drawer"
      custom-class="gn_theme_drawer"
    >
      <el-col :span="12" class="card_body">
        <el-card @click.native="changeTheme('gngrey')">
          <img src="" class="image" />
          <div style="padding: 14px">
            <span>主题灰</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" class="card_body">
        <el-card @click.native="changeTheme('gnblue')">
          <img src="" class="image" />
          <div style="padding: 14px">
            <span>主题蓝</span>
          </div>
        </el-card>
      </el-col>
    </el-drawer>
  </div>
</template>
<script>
import * as theme from '../utils/theme.js'
// import screenfull from 'screenfull'
export default {
  data() {
    return {
      drawer: false,
      menu: [
        {
          content: '应用地图',
          icon: 'el-icon-place'
        },
        {
          content: '用户收藏夹',
          icon: 'el-icon-star-off'
        },
        {
          content: '系统消息',
          icon: 'el-icon-message'
        },
        {
          content: '系统帮助',
          icon: 'el-icon-chat-round'
        }
      ]
    }
  },
  methods: {
    addTabToTabs(tabName, url) {
      this.$emit('addTab', tabName, url)
    },
    changeTheme(themeVal) {
      theme.chooseTheme(themeVal)
    },
    fullScreen() {
      if (!document.fullscreenElement) {
        document.querySelector('#subapp-viewport').requestFullscreen()
      }
    },
    handleCommand(command) {
      if (command === 'loginout') {
        localStorage.removeItem('token')
        location.href = '/login'
      } else {
        this.addTabToTabs(command, '')
      }
    }
  }
}
</script>
<style scoped>
.icon_group {
  float: right;
  padding-right: 40px;
  align-items: center;
  height: 100%;
}

.icon_group .gn_icon {
  margin-left: 5px;
}

.icon_group .gn_icon i {
  font-size: 25px;
  cursor: pointer;
}

.icon_group .user_img {
  margin-left: 18px;
}

.icon_group .user_img img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.gn_theme_drawer {
  top: 45px;
}
.card_body {
  padding: 20px;
}

.card_body .el-card {
  cursor: pointer;
}

.span_item {
  height: 100%;
  vertical-align: middle;
  margin-left: 10px;
  font-size: 14px;
}

.btn-fullscreen {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-right: 5px;
}

.user-name {
  margin-left: 10px;
  color: #ffffff;
  cursor: pointer;
}
</style>
