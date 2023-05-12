import { RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue'

export const testRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'landing',
        component: defineAsyncComponent(() => import('@/views/landing/index.vue')),
        meta: { transition: 'slide-left', title: '首页' }
    },
    {
        path: '/popover',
        name: 'popover',
        component: defineAsyncComponent(() => import('@/views/popover/index.vue')),
        meta: { transition: 'slide-left', title: '弹窗' }
    },
    {
        path: '/test',
        name: 'test',
        component: defineAsyncComponent(() => import('@/views/test/index.vue')),
        meta: { transition: 'slide-left', title: '测试' }
    },
    {
        path: '/num',
        name: 'num',
        component: defineAsyncComponent(() => import('@/components/RouterView/index.vue')),
        meta: { transition: 'slide-left', title: 'num' },
        children: [
            {
                path: '/one',
                name: 'one',
                component: defineAsyncComponent(() => import('@/views/one/index.vue')),
                meta: { transition: 'slide-left', title: 'one' }
            },
            {
                path: '/two',
                name: 'two',
                component: defineAsyncComponent(() => import('@/views/two/index.vue')),
                meta: { transition: 'slide-left', title: 'two' }
            },
            {
                path: '/three',
                name: 'three',
                component: defineAsyncComponent(() => import('@/views/three/index.vue')),
                meta: { transition: 'slide-left', title: 'three' }
            }
        ]
    }
]
