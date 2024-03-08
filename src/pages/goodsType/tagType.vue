<template>
  <view class="content">
    <!-- left bar -->
    <view class="left">
      <van-sidebar @change="changeSidebar" :active-key="activeKey">
        <van-sidebar-item
          v-for="(item, index) in tagList"
          :key="index"
          :title="`标签${index + 1}`"
        />
      </van-sidebar>
    </view>
    <!-- right grid -->
    <scroll-view
      :scroll-with-animation="true"
      @scroll="changeScroll"
      @scrolltolower="changeScrollLower"
      :scroll-y="true"
      :scroll-top="rightScrollTop"
      class="right"
    >
      <view v-for="(group, index) in typeList" :key="index" class="type-group">
        <p :id="'p' + index" class="title">分类组------{{ index + 1 }}</p>
        <view
          @tap="showGoodsList(index)"
          v-for="(item, index) in group"
          :key="index"
          class="type-item"
        >
          <image class="cover" src="../../static/logo.png" mode="scaleToFill" />
          <p class="text">类型1</p>
        </view>
      </view>
    </scroll-view>
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
import utils from '@/utils'

// tabBar
const { tabIndex } = configStore()

// sideBar
// 切换标签
const changeSidebar = (e: any) => {
  if (e.detail === tagList.value.length - 1) {
    rightScrollTop.value = 9999
  } else {
    rightScrollTop.value = e.detail * 110
  }
}

// 标签选中状态
const activeKey = ref<number>(0)

// 标签数据
const tagList = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//
/**
 * 具体分类
 */
// 距离顶部
const rightScrollTop = ref(0)

// 滚动时事件
const changeScroll = (e: any) => {
  let _i = parseInt(e.detail.scrollTop / 110 + '')
  activeKey.value =
    _i > tagList.value.length - 1 ? tagList.value.length - 1 : _i
}

// 滚动到底部时事件
const changeScrollLower = () => {
  // activeKey.value = tagList.value - 1
}

// 详细分类数组
const typeList = ref([
  [[], [], [], [], []],
  [[], []],
  [[], [], [], [], []],
  [[], [], [], []],
  [[], [], []],
  [[], [], [], [], []],
  [[], []],
  [[], [], [], [], []],
  [[], [], [], []],
  [[], [], []]
])

// 查看类型商品
const showGoodsList = (index: number) => {
  uni.navigateTo({ url: `/pages/goodsType/goodsList?id=${index}` })
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  padding-bottom: 150rpx;
  .left {
    flex: 1;
  }
  .right {
    height: 85vh;
    flex: 3;
    margin-top: 50rpx;
    .type-group {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .title {
        width: 100%;
        // flex: 1;
      }
      .type-item:active {
        background-color: #e7e7e7;
      }
      .type-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 180rpx;
        height: 180rpx;
        .cover {
          width: 100rpx;
          height: 100rpx;
        }
      }
    }
  }
}
</style>
