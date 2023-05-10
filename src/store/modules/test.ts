import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// 使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// 第一个参数应用中 Store 的唯一 ID。
export const useTestStore = defineStore('test', () => {
    const authorName = ref('yangqianli')
    const authorAge = ref(23)
    const mailbox = computed(() => `${authorName.value}@163.com`)
    const setAuthorName = (val: string) => {
        authorName.value = val
    }
    const setAuthorAge = (val: number) => {
        authorAge.value = val
    }
    return {
        authorName,
        authorAge,
        mailbox,
        setAuthorName,
        setAuthorAge
    }
})
