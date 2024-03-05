<template>
  <view class="content">
    <view>商品详情{{ goodsId }}</view>
    <van-overlay :show="overlayVisibel">
      <view class="custom-class">
        <van-loading type="spinner" size="24px" vertical>
          加载中...
        </van-loading>
      </view>
    </van-overlay>
  </view>
</template>

<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 获取商品id
const goodsId = ref(0)
uni.$on('showGoodsDetail', (id: number) => {
  goodsId.value = id
})

// 展示遮罩
const overlayVisibel = ref(false)
onShow(() => {
  overlayVisibel.value = true
  setTimeout(() => {
    overlayVisibel.value = false
    uni.showToast({
      title: `加载完成${goodsId.value}`,
      duration: 2000,
      position: 'center',
      icon: 'success'
    })
  }, 3000)
})
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .custom-class {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
