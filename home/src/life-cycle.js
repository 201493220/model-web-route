import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import selfRoutes from "./router/index";
import store from "./store";
import elementUI from "element-ui";

// import "element-ui/lib/theme-chalk/index.css";
import "@/plugins/uspui.js";
import "@/plugins/vue-resource.js";
// import "./element-variables-gray.scss";

import config from "@/config/config.js";
Vue.prototype.$config = config;

import { Loading } from "element-ui";

//解决重复跳转到同一个路由地址时报错！
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
/**
 * @name 导入官方通信方法
 */
import appStore from "@/utils/app-store";
import { chooseTheme } from "@/utils/theme";

Vue.use(VueRouter);
Vue.use(elementUI);
const __qiankun__ = window.__POWERED_BY_QIANKUN__;

let instance = null;
let router = null;

const render = ({ routerBase, container } = {}) => {
  Vue.config.productionTip = false;
  //要同时兼顾发布、生产、乾坤、非乾坤四种情况的路由
  let baseUrl = "";
  if (__qiankun__) {
    baseUrl = routerBase;
  } else {
    if (process.env.NODE_ENV !== "development") {
      //TODO 177
      baseUrl = "/model-web-route/";
    }
  }
  router = new VueRouter({
    mode: "history",
    base: baseUrl,
    routes: selfRoutes,
  });
  if (!__qiankun__) {
    router.beforeEach((to, from, next) => {
      if (to.query && to.query.color) {
        console.info("=========url切换主题" + to.query.color + "==========");
        chooseTheme(to.query.color);
      }
      next();
    });
  }
  /* eslint-disable no-new */
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");

  //路由跳转
  let loading = null;
  router.beforeEach((to, from, next) => {
    loading = Loading.service({
      lock: true,
      text: "拼命加载中",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
    next();
  });
  //路由加载完毕
  router.afterEach(() => {
    loading.close();
  });
};

const lifeCycle = () => {
  return {
    /**
     * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
     * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
     */
    async bootstrap(props) {
      console.log("props:", props);
    },

    /**
     * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
     */
    async mount(props) {
      appStore(props);
      //TODO 下拉框异常 (生产模式开启)
      // var getStyle = window.getComputedStyle;
      // window.getComputedStyle = (element, property) => {
      //   console.log("下拉框异常",element,element.nodeType);
      //   if (
      //     !element ||
      //     element.nodeType === 9 ||
      //     element.nodeType === 11 ||
      //     element.nodeType === 1
      //   )
      //     return {};
      //   return getStyle(element, property);
      // };
      // 注册微应用实例化函数
      render(props);
      console.info("mout");
    },

    /**
     * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
     */
    async unmount() {
      instance.$destroy();
      instance = null;
      router = null;
    },

    /**
     * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
     */
    async update(props) {
      console.log("update props", props);
    },
  };
};
export { lifeCycle, render, router };
