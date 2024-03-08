<template>
  <view class="content">
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
    <scroll-view class="list" scroll-y>
      <van-card
        @tap="useShowGoodsDetail(index)"
        v-for="(item, index) in 20"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      >
      </van-card>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { useShowGoodsDetail } from '@/hooks/useGoods'
import { useDebounce } from '@/hooks/useSearch'
import utils from '@/utils'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const keyWord = ref('')

// 防抖hook callback
const changeSearchCb = (e: any) => {
  keyWord.value = e.detail
  console.log(keyWord.value)
  utils.message.success(`query == ${keyWord.value}`)
}

// 商品列表
const goodsList = ref([])

// 查询
const handleSearch = () => {}

// 商品类型id
const typeId = ref(0)

// 初始化钩子
onLoad((data: any) => {
  typeId.value = data.id
  utils.message.success(`showGoodsList${data.id}`)
})
</script>

<style scoped lang="scss">
.content {
  .search {
    width: 100%;
    height: 80rpx;
  }
  .list {
    margin-top: 20rpx;
    height: 90vh;
  }
}
</style>
