import {RouteRecordRaw} from 'vue-router'

export const testRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'landing',
        component: () => import('@/views/landing/index.vue'),
        meta: {transition: 'slide-left', title: '首页'},
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test/index.vue'),
        meta: {transition: 'slide-left', title: '测试'},
    }, {
        path: '/num',
        name: 'num',
        component: () => import('@/components/RouterView/index.vue'),
        meta: {transition: 'slide-left', title: 'num'},
        children: [
            {
                path: '/one',
                name: 'one',
                component: () => import('@/views/one/index.vue'),
                meta: {transition: 'slide-left', title: 'one'},
            },{
                path: '/two',
                name: 'two',
                component: () => import('@/views/two/index.vue'),
                meta: {transition: 'slide-left', title: 'two'},
            }, {
                path: '/three',
                name: 'three',
                component: () => import('@/views/three/index.vue'),
                meta: {transition: 'slide-left', title: 'three'},
            },
        ]
    },
]