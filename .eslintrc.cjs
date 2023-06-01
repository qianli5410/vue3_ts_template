module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'eslint-config-prettier'
    ],

    overrides: [
        {
            // 匹配components和views下二级目录中的index.vue
            files: ['src/views/index.vue', 'src/views/**/index.vue'],
            rules: {
                'vue/multi-word-component-names': 'off'
            } //给上面匹配的文件指定规
        },
        {
            // 匹配components和views下二级目录中的index.vue
            files: ['src/components/index.vue', 'src/components/**/index.vue'],
            rules: {
                'vue/multi-word-component-names': 'off'
            } //给上面匹配的文件指定规
        },
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true
            }
        }
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false //解决文件名爆红问题
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
    },
    rules: {}
}
