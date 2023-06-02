import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
// viteCompression打包后就会生成 gzip 文件，服务端 nginx 还需要配置一下才能生效
import viteCompression from 'vite-plugin-compression'
// http {
//     gzip_static on;
//     gzip_proxied any;
// }

// ElementPlus自动导入配置
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import eslintPlugin from 'vite-plugin-eslint'

const PrintFunc = () => {
    return {
        name: 'Print',
        options() {
            console.log(
                `
       ##    ##  #######  ##       
        ##  ##  ##     ## ##       
         ####   ##     ## ##       
          ##    ##     ## ##       
          ##    ##  ## ## ##       
          ##    ##    ##  ##       
          ##     ##### ## ######## 
      `
            )
        }
    }
}

import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(),
        visualizer(),
        // viteCompression(
        //   {
        //     algorithm: 'gzip',
        //     threshold: 10240,
        //     verbose: false,
        //     deleteOriginFile: true
        //   }
        // ),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        }),
        PrintFunc(),
        // eslintPlugin({
        //     include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
        // })
    ],
    envDir: './env',
    build: {
        minify: 'esbuild',
        cssCodeSplit: true,
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            },
            output: {
                comments: true
            }
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    vue: ['vue', 'pinia', 'vue-router'],
                    lodash: ['lodash-es'],
                    element: ['element-plus']
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': join(__dirname, 'src')
        }
    },
    css: {
        /* CSS 预处理器 */
        preprocessorOptions: {
            scss: {
                additionalData: `@use "./src/assets/style/main.scss" as *;`
            }
        },
        devSourcemap: true
    }
})
