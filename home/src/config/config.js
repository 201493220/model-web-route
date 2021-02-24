var suaAppApi = "/api-guide-gateway";

if (!window.__POWERED_BY_QIANKUN__) {
  suaAppApi = "";
}
suaAppApi = "http://172.29.64.127:31403";

var config = {
  // http://10.161.80.101:30080

  suaAppApi: suaAppApi,

  // 请求路径优化地址
  LJYHURL: suaAppApi + "/model-route/Route/queryRoute",

  // 模型计算
  YJHMX: "/model-route/routeCalculation/routeModel",
  // 请求模型计算结果地址
  LJYHRESULTURL: suaAppApi + "/model-route/Route/transportationResults",

  // 请求需求端煤种地址
  XQDURL: suaAppApi + "/model-route/Route/demandEndCoal",
  // 修改需求端煤种地址
  R_XQDURL: suaAppApi + "",

};

export default config;
