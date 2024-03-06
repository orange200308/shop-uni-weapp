import { configStore } from '@/store/modules/config'
import { ref } from 'vue'

const { routes, tabIndex, changeTabIndex } = configStore()

export const useRouterGo = (index: any) => {
  let i: number = index.detail >= 0 ? index.detail : index
  console.log(i)
  changeTabIndex(i)
  uni.switchTab({ url: routes[i].url })
}
