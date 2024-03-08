<template>
  <view class="content">
    <view>商品详情{{ goodsId }}</view>
    <view style="width: 80%; word-wrap: break-word">{{ goodsInfo }}</view>
  </view>
</template>

<script setup lang="ts">
import { httpV1 } from '@/utils/http/interceptor'
import { onLoad, onPullDownRefresh, onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 获取商品信息
const goodsId = ref(0)
const goodsInfo = ref('')
const getGoodsInfo = async () => {
  const res = await httpV1('/user/getUser', { id: goodsId.value })
  goodsInfo.value = JSON.stringify(res.result)
}
// 初始化钩子
onLoad((data) => {
  goodsId.value = data?.id
})
// 页面显示钩子
onShow(() => {
  getGoodsInfo()
})

// 下拉刷新钩子
onPullDownRefresh(() => {
  getGoodsInfo()
})
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
@/http@/utils/http
