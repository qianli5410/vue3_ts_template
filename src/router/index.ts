import * as VueRouter from 'vue-router'
import { testRoutes } from './modules/test'

export const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHistory(),
  routes: [
    ...testRoutes
  ]
})