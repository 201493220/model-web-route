<template>
  <div class="login-page">
    <!-- 背景图 -->
    <img class="login-page-bg" src="../assets/bg.jpg" alt="登陆背景图" />
    <!-- 登陆表单 -->
    <div class="login-form-box">
      <el-form :model="loginForm" :rules="loginRules" ref="login-form">
        <el-form-item label="账号" prop="account">
          <el-input
            v-model="loginForm.account"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input  type="password"
            v-model="loginForm.password"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="align-right login-button">
        <el-button type="primary" style="width:100%" @click="handleLogin()"
          >立即登录</el-button
        >
      </div>
      <div class="login-link-box">
        <div>立即注册</div>
        <div>忘记密码</div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
// import { reactive, ref, getCurrentInstance } from "@vue/composition-api"; // 导入vue3api
// import { DataType, Storage } from "wl-core"; // 导入核心工具库
// import { getBingHpImageApi, loginApi } from "@/api/login.js"; // 导入接口
// import http from "../utils/request";
export default {
  name: 'login-page',
  data() {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      loginRules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleLogin() {
      console.info('++++++++++')
      // localStorage.setItem('token', '9eahshdjfsfsbf878788hk99')
      // this.$router.push('/' + this.$store.getters.defaultApp)
      let url = apiDomain.default.gateWayUrl + '/admin/login/token'
      let data = qs.stringify({
        username: this.loginForm.account,
        password: this.loginForm.password
      })
      console.info(data)
      let _this = this
      this.$ajax({
        method: 'post',
        url: url, //apiURLStr: 'http://172.29.68.87:8888',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
      }).then(response => {
        console.info('=============')
        if (response.data.data.access_token) {
          window.localStorage.setItem('token', response.data.data.access_token)
          _this.$router.push('/' + _this.$store.getters.defaultApp)
        } else {
          return
        }
      })
    }
  }
}
</script>

<style lang="scss">
.login-page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  > .login-form-box {
    position: fixed;
    top: 40%;
    left: 50%;
    margin-top: -160px;
    margin-left: -230px;
    width: 460px;
    height: 320px;
    padding: 15px;
    background: rgba(245, 245, 245, 0.6);
    box-shadow: 0px 0px 4px 6px #f3f3f3;

    .login-button {
      padding-top: 20px;
    }

    .login-link-box {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      cursor: pointer;
    }
  }
}
</style>
