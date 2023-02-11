import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: 'index.html'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "/src/sass/_variables.scss";
          @import "/src/sass/_mixins.scss";`
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        deuxieme: resolve(__dirname, 'deuxieme/index.html'),
        troisieme: resolve(__dirname, 'troisieme/index.html'),
      },
    },
  },
})