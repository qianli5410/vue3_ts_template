<script setup lang="ts">
import faceUrl from '@/assets/image/face.jpeg'
import { reactive } from 'vue'

const state = reactive({
    作者: '无妻徒刑（杨）',
    博客: 'https://blog.csdn.net/qq_45909266',
    GitHub: 'https://github.com/qianli5410',
    邮箱: '1696016522@QQ.COM',
})
</script>

<template>
    <section>
        <el-avatar :size="50" :src="faceUrl" />
        <el-divider />
        <el-text size="large">作者：</el-text>
        <el-text size="large" type="primary">{{ state['作者'] }}</el-text>
        <el-divider />
        <el-text size="large">博客：</el-text>
        <el-link type="primary" :href="state['博客']">{{ state['博客'] }}</el-link>
        <el-divider />
        <el-text size="large">GitHub：</el-text>
        <el-link type="primary" :href="state['GitHub']">{{ state['GitHub'] }}</el-link>
        <el-divider />
        <el-text size="large">邮箱：</el-text>
        <el-text type="primary">{{ state['邮箱'] }}</el-text>
        <el-divider />
    </section>
</template>

<style scoped lang="scss"></style>
