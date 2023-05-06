<script lang="ts" setup>

</script>

<template>
    <router-view v-slot="{ Component }">
        <transition name="el-zoom-in-center">
            <component :is="Component"/>
        </transition>
    </router-view>
</template>

<style scoped>

</style>