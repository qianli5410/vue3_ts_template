<script setup lang="ts">
import { ref } from 'vue'
import Popover from './index.vue'
import { formInlineType } from './type'

const parameter = ref()
const getFromData = (evn: formInlineType) => {
    parameter.value = evn
}
</script>

<template>
    <Popover title="加个门店" @callback="getFromData">
        <el-button type="primary">新建</el-button>
    </Popover>
</template>

<style scoped lang="scss"></style>
