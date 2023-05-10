<script lang="ts" setup>
import { routes } from '@/router/index.ts'
import { useRouter } from 'vue-router'

const router = useRouter()

const routerTo = (path: string) => {
    router.push(path)
}
</script>

<template>
    <el-container>
        <el-aside width="200px">
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
            >
                <template v-for="item in routes" :key="item.path">
                    <el-sub-menu v-if="item.children" :index="item.path">
                        <template #title>
                            <span>{{ item.meta && item.meta.title }}</span>
                        </template>
                        <template v-for="item_c in item.children" :key="item_c.path">
                            <el-menu-item :index="item_c.path" @click="routerTo(item_c.path)">
                                <span>{{ item_c.meta && item_c.meta.title }}</span>
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                    <el-menu-item v-else :index="item.path" @click="routerTo(item.path)">
                        <span>{{ item.meta && item.meta.title }}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view v-slot="{ Component }">
                <transition name="el-zoom-in-center">
                    <component :is="Component" />
                </transition>
            </router-view>
        </el-main>
    </el-container>
</template>

<style lang="scss" scoped>
.el-main,
.el-menu {
    height: 100vh;
    overflow-y: scroll;
}

.el-main::-webkit-scrollbar,
.el-menu::-webkit-scrollbar {
    display: none;
}
</style>
