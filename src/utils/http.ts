import { useMemberStore } from '@/stores'

// 请求基地址
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  // invoke 触发前进行拦截
  invoke(options: UniApp.RequestOptions) {
    // 地址拼接
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 请求超时时间
    options.timeout = 10000
    // 小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 添加token 请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
