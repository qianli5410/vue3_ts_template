import { RouteRecordRaw } from 'vue-router'

export const testRoutes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'landing',
		component: () => import('@/views/landing/index.vue'),
		meta: { transition: 'slide-left', title: '首页' },
	},
	// {
	// 	path: '/popover',
	// 	name: 'popover',
	// 	component: () => import('@/views/popover/index.vue'),
	// 	meta: { transition: 'slide-left', title: '弹窗' },
	// },
	// {
	// 	path: '/test',
	// 	name: 'test',
	// 	component: () => import('@/views/test/index.vue'),
	// 	meta: { transition: 'slide-left', title: '测试' },
	// },
	// {
	// 	path: '/num',
	// 	name: 'num',
	// 	component: () => import('@/components/RouterView/index.vue'),
	// 	meta: { transition: 'slide-left', title: 'num' },
	// 	children: [
	// 		{
	// 			path: '/one',
	// 			name: 'one',
	// 			component: () => import('@/views/one/index.vue'),
	// 			meta: { transition: 'slide-left', title: 'one' },
	// 		},
	// 		{
	// 			path: '/two',
	// 			name: 'two',
	// 			component: () => import('@/views/two/index.vue'),
	// 			meta: { transition: 'slide-left', title: 'two' },
	// 		},
	// 		{
	// 			path: '/three',
	// 			name: 'three',
	// 			component: () => import('@/views/three/index.vue'),
	// 			meta: { transition: 'slide-left', title: 'three' },
	// 		},
	// 	],
	// },
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
