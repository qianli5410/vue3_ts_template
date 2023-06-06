<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
const props = defineProps(['list'])
const router = useRouter()
const route = useRoute()
const routerTo = (path: string) => {
    router.push(path)
}
</script>

<template>
    <el-menu
        class="menu"
        active-text-color="#FF6600"
        background-color="#FFFFFF"
        text-color="#333333"
        popper-effect="dark"
        :default-active="route.path"
    >
        <template v-for="item in props.list" :key="item.path">
            <el-sub-menu v-if="item.children" :index="item.path">
                <template #title>
                    <span>{{ item.meta && item.meta.title }}</span>
                </template>
                <RootNav :list="item.children"></RootNav>
            </el-sub-menu>
            <el-menu-item v-else :index="item.path" @click="routerTo(item.path)">
                <span>{{ item.meta && item.meta.title }}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<style scoped lang="scss"></style>
