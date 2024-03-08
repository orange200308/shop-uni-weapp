// 搜索防抖
let times: null = null
export const useDebounce = (callback: Function, e: any) => {
  clearTimeout(times)
  times = setTimeout(() => {
    callback(e)
  }, 300)
}
