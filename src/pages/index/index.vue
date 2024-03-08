<template>
  <view class="content">
    <view v-if="toTopVisible" class="toTop">
      <van-button
        @click="toTop"
        round
        type="default"
        icon="back-top"
        color="#bfbfbf"
        size="small"
      ></van-button>
    </view>
    <!-- 滚动banner -->
    <view class="swiper-box">
      <swiper indicator-dots autoplay circular>
        <swiper-item v-for="(item, index) in 5" :key="index">
          <image src="../../static/banner/4.jpg" mode="heightFix" />
        </swiper-item>
      </swiper>
    </view>
    <!-- 搜索框 -->
    <view class="search">
      <van-search
        :value="keyWord"
        @change="useDebounce(changeSearchCb, $event)"
        @search="handleSearch"
        placeholder="请输入搜索关键词"
      />
    </view>
    <!-- 商品列表 -->
    <view class="goods-list">
      <van-grid column-num="2" :border="false">
        <van-grid-item
          style="position: relative"
          v-for="(item, index) in 20"
          :key="index"
          use-slot
        >
          <view @tap="useShowGoodsDetail(index)" class="goods-item">
            <image
              class="cover"
              src="../../static/banner/4.jpg"
              mode="top left"
            />
            <view class="context">
              <view class="title">Title</view>
              <p class="desc">descdescdescdescccccccccccc</p>
            </view>
          </view>
        </van-grid-item>
      </van-grid>
    </view>
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
import { useDebounce } from '@/hooks/useSearch'
import { onPageScroll } from '@dcloudio/uni-app'
import { useShowGoodsDetail } from '@/hooks/useGoods'

// 返回顶部按钮可见性
const toTopVisible = ref(false)

// 返回顶部
const toTop = () => {
  uni.pageScrollTo({
    scrollTop: 0,
    duration: 300
  })
}

// 页面滚动
onPageScroll((e) => {
  toTopVisible.value = e.scrollTop > 500 ? true : false
})

// tabBar
const { tabIndex } = configStore()

// 输入框防抖
const keyWord = ref<string>('')
const changeSearchCb = (e: any) => {
  keyWord.value = e.detail
  utils.message.success('query==' + keyWord.value)
}

// 确认搜索
const handleSearch = (e: any) => {
  utils.message.success(`search ${e.detail}`)
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 150rpx;
  .toTop {
    position: fixed;
    z-index: 999;
    right: 20rpx;
    bottom: 200rpx;
  }
  .swiper-box {
    width: 100%;
  }
  .search {
    width: 100%;
    height: 80rpx;
  }
  .goods-list {
    width: 100%;
    height: 100%;
    .goods-item {
      position: relative;
      width: 350rpx;
      height: 400rpx;
      transition: all 0.3s;
      background-color: #fbfbfb;
      .cover {
        width: 100%;
        height: 250rpx;
      }
      .context {
        padding: 0 20rpx;
        .title {
          font-weight: 700;
        }
        .desc {
          color: #6e6e6e;
          word-wrap: break-word;
        }
      }
    }
    .goods-item:active {
      background-color: #dedede;
    }
  }
}
</style>
