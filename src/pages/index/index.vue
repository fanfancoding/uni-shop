<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { ShopGuessInstance } from '@/types/component'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取首页分类模块数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取热门推荐模块数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
  console.log(res)
}

// 生命周期函数
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})

// 获取猜你喜欢模块组件实例
const guessRef = ref<ShopGuessInstance>()

// 页面滑动触底 触发
const onScrollToLower = () => {
  guessRef.value?.getHomeGoodsGuessLikeData()
}
</script>

<template>
  <!-- 导航栏 -->
  <CustomNavbar />
  <scroll-view @scrolltolower="onScrollToLower" class="scroll" scroll-y>
    <!-- 轮播图 -->
    <ShopSwiper :list="bannerList" />
    <!-- 分类模块 -->
    <CategoryPanel :list="categoryList" />
    <!-- 热门模块 -->
    <HotPanel :list="hotList" />
    <!-- 猜你喜欢模块 -->
    <ShopGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll {
  flex: 1;
}
</style>
