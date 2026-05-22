import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', 
  server:{
    host:true, 
    port:5173,
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],build: {
    emptyOutDir: false, // This tells Vite NOT to delete the folder before building
  }
})