import Vue from "vue";
import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
Vue.prototype.$http = axios;
