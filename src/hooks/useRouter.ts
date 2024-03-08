import { configStore } from '@/store/modules/config'

const { routes, changeTabIndex } = configStore()

// 点击tabBar跳转路由
export const useRouterGo = (index: any) => {
  let i: number = index.detail >= 0 ? index.detail : index
  changeTabIndex(i)
  let url = `${routes[i].url}`
  uni.switchTab({ url: url })
  console.log(i, url)
}
