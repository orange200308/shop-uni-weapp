import { configStore } from '@/store/modules/config'
import { ref } from 'vue'

const { config } = configStore()

export const useRouterGo = (e: any) => {
  console.log(e.detail)
  config.selectTab = e.detail
  uni.switchTab({ url: config.routes[config.selectTab].url })
}
export const useSelect = ref<number>(config.selectTab)
