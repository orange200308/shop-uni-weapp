import { defineStore } from 'pinia'
import { reactive } from 'vue'

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

    return {
      userInfo
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
