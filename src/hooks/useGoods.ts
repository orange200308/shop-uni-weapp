// 携带id跳转商品详情页
export const useShowGoodsDetail = (goodsId: number) => {
  uni.navigateTo({ url: `/pages/goodsDetail/index?id=${goodsId}` })
}
