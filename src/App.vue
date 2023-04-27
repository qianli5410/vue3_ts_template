<script setup lang="ts">
import { animationMap } from '@/assets/function/newMap'
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition :name="animationMap.get('上下切换')">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
</style>