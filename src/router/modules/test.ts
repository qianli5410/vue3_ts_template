
const Test = () => import('../../views/test/index.vue')
const Landing = () => import('../../views/landing/index.vue')

export const testRoutes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
    meta: { transition: 'slide-left', title: '首页' },
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
    meta: { transition: 'slide-left', title: '测试' },
  }
]