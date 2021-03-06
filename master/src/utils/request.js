// 引入axios
import axios from 'axios'

// 创建axios实例
const httpService = axios.create({
  // url前缀-'https://some-domain.com/api/'
  baseURL: process.env.BASE_API, // 需自定义
  // 请求超时时间
  timeout: 3000 // 需自定义
})

// request拦截器
httpService.interceptors.request.use(
  config => {
    if (window.localStorage.token) {
      config.headers['X-Authorization'] = `Bearer ${localStorage.token}`
    }
    return config
  },
  error => {
    // 请求错误处理
    Promise.reject(error)
  }
)

// respone拦截器
httpService.interceptors.response.use(
  response => {
    // 统一处理状态
    return response.data
    // }
  },
  // 处理错误
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求'
          break
        case 401:
          error.message = '未授权，请重新登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求错误,未找到该资源'
          break
        case 405:
          error.message = '请求方法未允许'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器端出错'
          break
        case 501:
          error.message = '网络未实现'
          break
        case 502:
          error.message = '网络错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网络超时'
          break
        case 505:
          error.message = 'http版本不支持该请求'
          break
        default:
          error.message = `未知错误${error.response.status}`
      }
    } else {
      error.message = '连接到服务器失败'
    }
    return Promise.reject(error)
  }
)

//刷新token。
// let refreshTokenAxios = () => {
//   let obj = {
//     url: apiDomain.default.apiDomain + '/api/auth/token',
//     method: 'post',
//     data: {
//       refreshToken: window.localStorage.refreshToken
//     }
//   }
//   return axios(obj).then(res => {
//     window.localStorage.setItem('token', res.token)
//     window.localStorage.setItem('refreshToken', res.refreshToken)
//   })
// }

export default httpService
