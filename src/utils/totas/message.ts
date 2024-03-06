// 全局消息提示
export const message = {
  success: (msg: string, times: number = 3000) => {
    uni.showToast({
      title: msg,
      icon: 'success',
      duration: times,
      position: 'center'
    })
  },
  error: (msg: string, times: number = 3000) => {
    uni.showToast({
      title: msg,
      icon: 'error',
      duration: times,
      position: 'center'
    })
  },
  loading: (msg: string = '加载中') => {
    return uni.showLoading({
      title: msg,
      mask: true
    })
  }
}
