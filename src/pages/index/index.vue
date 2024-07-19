<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerDataList = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
onLoad(() => {
  getHomeBannerDataList()
})
</script>

<template>
  <CustomNavbar />
  <ShopSwiper :list="bannerList" />
  <CategoryPanel />
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
