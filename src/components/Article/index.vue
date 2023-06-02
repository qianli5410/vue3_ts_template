<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps(['text'])

const articleText = props.text

const article = ref('')

const isCursor = ref(true)
// onMounted(async () => {
// 	const printText = () =>
// 		new Promise(resolve => {
// 			const chars = articleText.split('')
// 			let index = 0
// 			const interval = setInterval(() => {
// 				if (index < chars.length) {
// 					article.value += chars[index]
// 					index++
// 				} else {
// 					clearInterval(interval)
// 					resolve(null)
// 				}
// 			}, 30)
// 		})

// 	await printText()
// 	isCursor.value = false
// })
</script>

<template>
	<div class="typewriter">
		{{ props.text }}
		<span v-show="isCursor" class="cursor"></span>
	</div>
</template>

<style scoped lang="scss">
.typewriter {
	position: relative;
}
.cursor {
	border-right: 2px solid black;
	width: 0px;
	height: 24px;
	animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
	from,
	to {
		border-color: transparent;
	}
	50% {
		border-color: black;
	}
}
</style>
