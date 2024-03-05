<template>
  <view>
    商品
    <van-tabbar :active="useSelect" @change="useRouterGo">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact-o">我的</van-tabbar-item>
    </van-tabbar>
  </view>
</template>

<script setup lang="ts">
import { useRouterGo } from '@/hooks/useRouter'
import { configStore } from '@/store/modules/config'
import { ref } from 'vue'
const useSelect = ref(configStore().config.selectTab)
</script>

<style lang="scss" scoped></style>
