import ShopSwiper from './ShopSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    ShopSwiper: typeof ShopSwiper
  }
}
