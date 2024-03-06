<template>
  <view>
    <van-sidebar :active-key="activeKey">
      <van-sidebar-item
        v-for="(item, index) in 20"
        :key="index"
        :title="`标签${index}`"
      />
    </van-sidebar>
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

// 标签选中状态
const activeKey = ref<number>(0)
</script>

<style lang="scss" scoped></style>
