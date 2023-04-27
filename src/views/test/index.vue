<script setup lang="ts">
import { useTestStore } from '@/store/index'
import { ref } from 'vue'
const text = ref("test")
const store = useTestStore()
</script>

<template>
  <div>
    <p>{{ text }}</p>
    <p>{{ store.authorName }}</p>
    <p>{{ store.authorAge }}</p>
    <p>{{ store.mailbox }}</p>
    <section>
      <el-button type="success" @click="store.setAuthorName('qianli')">修改姓名</el-button>
      <el-button type="success" @click="store.setAuthorAge(30)">修改年龄</el-button>
    </section>
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>