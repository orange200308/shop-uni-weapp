import { configStore } from '@/store/modules/config'
import { ref } from 'vue'

const { routes, tabIndex, changeTabIndex } = configStore()

export const useRouterGo = (index: any) => {
  let i: number = index.detail >= 0 ? index.detail : index
  changeTabIndex(i)
  let url = `${routes[i].url}`
  uni.switchTab({ url: url })
  console.log(i, url)
}
