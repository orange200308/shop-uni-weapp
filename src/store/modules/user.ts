import { useRouterGo } from '@/hooks/useRouter'
import type { User } from '@/types'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const userStore = defineStore(
  'User',
  () => {
    const userInfo = reactive<User>({
      userId: 0,
      nickname: '',
      avatar: '',
      phoneNumber: '',
      sex: 0,
      birthday: ''
    })
    let token = ref('')

    const clearToken = () => {
      token.value = ''
      useRouterGo(3)
    }

    return {
      userInfo,
      token,
      clearToken
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
