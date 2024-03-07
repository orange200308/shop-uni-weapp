import { userStore } from '@/store/modules/user'
import utils from '@/utils'
// baseURL
const baseURL = import.meta.env.VITE_BASEURL

// 无需token白名单
const whiteList = ['/user/login', '/user/getUser']
interface IResponse<T = any> {
  code: number
  result: T
  msg: string
}

const httpInterceptor = {
  invoke(config: UniApp.RequestOptions) {
    // 非http开头请求需要拼接
    if (!config.url.startsWith('http')) {
      config.url = baseURL + config.url
    }

    // 添加小程序请求标识
    config.header = {
      ...config.header,
      'source-client': 'miniapp'
    }

    // 请求超时
    config.timeout = 15000

    // 携带Token
    if (!config.header.token && !whiteList.includes(config.url)) {
      const { token } = userStore()
      config.header.token = token
    }
  },

  // 响应处理
  success(res: UniApp.RequestSuccessCallbackResult) {
    if (res.statusCode < 200 || res.statusCode >= 400) {
      switch (res.statusCode) {
        case 400:
          utils.message.error('参数异常')
          break
        case 401:
          utils.message.error('未登录')
          // 清除token并跳转
          setTimeout(() => {
            userStore().clearToken()
          }, 2000)
          break
        case 403:
          utils.message.error('拒绝请求资源')
          break
        case 404:
          utils.message.error('请求地址异常')
          break
        case 500:
          utils.message.error('服务器错误')
          break
        case 503:
          utils.message.error('服务器超时')
          break
        default:
          utils.message.error('网络错误')
      }
    }
  },

  // 失败回调
  fail(err: UniApp.GeneralCallbackResult) {
    // console.log('interceptor-fail', err)
  },

  // 完成回调
  complete(res: UniApp.GeneralCallbackResult) {
    // console.log('interceptor-complete', res)
  }
}
// 请求响应拦截器
uni.addInterceptor('request', httpInterceptor)

// POST
export const httpV1 = <T = any>(url: string, data: any) => {
  return new Promise<IResponse<T>>((resolve, reject) => {
    uni
      .request({
        url,
        data,
        method: 'POST'
      })
      .then((res: any) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          resolve(res.data)
        } else {
          utils.message.error('请求err')
          reject(res)
        }
      })
      .catch((err) => {
        utils.message.error('请求err')
        reject(err)
      })
  })
}
