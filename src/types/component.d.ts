import ShopSwiper from './ShopSwiper.vue'
import ShopGuess from '@/components/ShopGuess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    ShopSwiper: typeof ShopSwiper
    ShopGuess: typeof ShopGuess
  }
}

// 组件实例类型
export type ShopGuessInstance = InstanceType<typeof ShopGuess>
