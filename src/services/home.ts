import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}

export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}

export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}
