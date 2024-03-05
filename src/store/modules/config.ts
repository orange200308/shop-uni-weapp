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
        url: '/pages/goods/index'
      },
      {
        url: '/pages/cart/index'
      },
      {
        url: '/pages/user/index'
      }
    ])
    const config = reactive({
      token: '',
      selectTab: 0,
      routes
    })

    return {
      config
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
