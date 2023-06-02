<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Table from '../table/index.vue'
const router = useRouter()
const title = ref('Landing')
</script>

<template>
	<div>
		<p class="text">{{ title }}</p>
		<el-button type="primary" @click="router.push({ name: 'test' })">跳转test</el-button>
		<Table />
	</div>
</template>

<style scoped lang="scss"></style>
