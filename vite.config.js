import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    createHtmlPlugin(),
    copy({
      targets: [
        { src: 'Models/**/*', dest: 'dist/Models' },
        { src: 'Textures/**/*', dest: 'dist/Textures' }
      ],
      hook: 'writeBundle' // Execute the copy plugin at the end of the build
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
});