<template>
  <view class="content">
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
        @change="changeSearch"
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
          <view @tap="clickGoods(index)" class="goods-item">
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
          <view class="addCart" @tap.stop="addCart(index)">
            <van-icon name="shopping-cart-o" />
          </view>
        </van-grid-item>
      </van-grid>
    </view>
    <!-- tabbar -->
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

// 输入框防抖
const keyWord = ref<string>('')
let times: any = null
const changeSearch = (e: any) => {
  keyWord.value = e.detail
  clearTimeout(times)
  times = setTimeout(() => {
    console.log('query', keyWord.value)
  }, 300)
}

// 添加购物车
const addCart = (index: number) => {
  console.log(index + '加入购物车')
}

// 查看商品
const clickGoods = (index: number) => {
  console.log(index + '查看商品详情')
  uni.$emit('showGoodsDetail', index)
  uni.navigateTo({ url: `/pages/index/goodsDetail` })
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    margin-bottom: 150rpx;
    .goods-item {
      position: relative;
      width: 350rpx;
      height: 400rpx;
      transition: all 0.3s;
      background-color: rgb(251, 251, 251);
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

    .addCart {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      right: 20rpx;
      bottom: 40rpx;
      width: 60rpx;
      height: 40rpx;
      border-radius: 10rpx;
      border: 1px solid #e4e4e4;
    }
    .addCart:active {
      background-color: rgb(255, 180, 123);
    }
  }
}
</style>
