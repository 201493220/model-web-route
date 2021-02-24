<template>
  <div class="demo1" :style="conheight">
    <el-row>
      <el-col :span="isCollapse ? 2 : 4">
        <el-menu
          :default-active="this.$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          :collapse="isCollapse"
          :collapse-transition="false"
          :default-openeds="openeds"
          router
          :unique-opened="true"
        >
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <button class="btn" @click="zk">
              {{ isCollapse ? "展开>>" : str + "收起" }}
            </button>
          </el-radio-group>

          <el-menu-item index="/RouteModel">
            <i class="el-icon-menu"></i>
            <span slot="title">路径优化模型管理</span>
          </el-menu-item>
          <el-menu-item index="/DemandSide">
            <i class="el-icon-document"></i>
            <span slot="title">需求端煤种管理</span>
          </el-menu-item>
          <el-menu-item index="/ResourceSide">
            <i class="el-icon-setting"></i>
            <span slot="title">资源端煤种管理</span>
          </el-menu-item>

          <el-submenu index="/plan1-4">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>月计划结果</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/YieldResults">产量结果</el-menu-item>
              <el-menu-item index="/VolumeResults">运量结果</el-menu-item>
              <el-menu-item index="/SalesResults">销售结果</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="isCollapse ? 22 : 20" :style="conheight">
        <!-- <keep-alive> -->
        <router-view></router-view>
        <!-- </keep-alive> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      str: "<<",
      openeds: ["/plan1-4"],
      conheight: {
        height: "",
      },
    };
  },
  mounted() {
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
  },
  methods: {
    getHeight() {
      this.conheight.height = window.innerHeight + "px";
    },
    handleOpen() {
      // console.log(key, keyPath);
    },
    handleClose() {
      // console.log(key, keyPath);
    },
    handleSelect() {
      // console.log(key, keyPath);
    },

    zk() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>
<style>
.demo1 {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 95%;
  height: 100%;
}
.btn {
  margin-left: 10px;
  background-color: #fff;
  border: none;
  outline: none;
  color: blue;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
}
.el-menu {
  border: none;
}
.content-top {
  width: 100%;
  height: 50px;
}
.el-menu-item.is-active {
  color: #333;
  background-color: blue;
}
.el-menu-item.is-active i {
  color: #fff;
}
</style>
