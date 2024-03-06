<template>
  <view>
    我的
    <!-- tabbar -->
    <van-tabbar :active="tabIndex" @change="useRouterGo">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact-o">我的</van-tabbar-item>
    </van-tabbar>
  </view>
</template>

<script setup lang="ts">
import { useRouterGo } from '@/hooks/useRouter'
import { ref } from 'vue'
import { configStore } from '@/store/modules/config'
const { tabIndex } = configStore()
</script>

<style lang="scss" scoped></style>
