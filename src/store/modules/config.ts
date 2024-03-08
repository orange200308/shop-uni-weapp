import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const configStore = defineStore(
  'config',
  () => {
    const routes = reactive<Array<{ url: string }>>([
      {
        url: '/pages/index/index'
      },
      {
        url: '/pages/goodsType/tagType'
      },
      {
        url: '/pages/cart/index'
      },
      {
        url: '/pages/user/index'
      }
    ])

    const tabIndex = ref<number>(0)
    const changeTabIndex = (index: number) => {
      tabIndex.value = index
    }

    return {
      tabIndex,
      changeTabIndex,
      routes
    }
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        }
      }
    }
  }
)
