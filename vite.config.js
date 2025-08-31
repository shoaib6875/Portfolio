import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio',
  server: {
    host: true,        // 👈 allow access from network
    port: 5173,        // (optional) force a fixed port
  }
})



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/Portfolio', // Replace with '/<your-repo-name>/' or '/' if using shoaib6875.github.io
//   server: {
//     host: true, // Allow access from network during development
//     port: 5173, // Fixed port for local dev server
//   },
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/Portfolio/', // Matches https://shoaib6875.github.io/Portfolio
//   server: {
//     host: true,
//     port: 5173,
//   },
// })