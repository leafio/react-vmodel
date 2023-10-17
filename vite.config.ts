import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript';
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
     typescript(
      {
    target: 'es6',
    rootDir: './src',
    declaration: true,
    declarationDir: './lib',
    exclude:'./node_modules/**',
    allowSyntheticDefaultImports: true,
  }
  ),
],
  build: {
    // 打包输出的目录
    outDir: 'lib',
    // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制
    cssTarget: 'chrome61',
    lib: {
      // 组件库源码的入口文件
      entry: resolve('src/index'),
      // 组件库名称
      name: 'react-vmodel',
      // 文件名称, 打包结果举例: my-packages.umd.cjs
      fileName: 'index',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
  }
})
