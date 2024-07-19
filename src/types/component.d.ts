import ShopSwiper from './ShopSwiper.vue'
import ShopGuess from '@/components/ShopGuess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    ShopSwiper: typeof ShopSwiper
    ShopGuess: typeof ShopGuess
  }
}
