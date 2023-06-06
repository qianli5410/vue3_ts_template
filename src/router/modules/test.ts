import { RouteRecordRaw } from 'vue-router'

export const testRoutes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'landing',
		component: () => import('@/views/landing/index.vue'),
		meta: { transition: 'slide-left', title: '首页' },
	},
	{
		path: '/map',
		name: 'map',
		component: () => import('@/views/map/index.vue'),
		meta: { transition: 'slide-left', title: '风场地图' },
	},
	{
		path: '/great',
		name: 'great',
		component: () => import('@/views/great/index.vue'),
		meta: { transition: 'slide-left', title: '从业心得' },
	},
	{
		path: '/author',
		name: 'author',
		component: () => import('@/views/author/index.vue'),
		meta: { transition: 'slide-left', title: '关于作者' },
	},
]
