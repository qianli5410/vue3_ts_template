<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref('Landing')

</script>

<template>
  <div>
    <p class="text">{{ title }}</p>
    <el-button type="primary" @click="router.push({ name: 'test' })">跳转test</el-button>
  </div>
</template>

<style scoped lang="scss">

</style>
