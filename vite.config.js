import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // respeita a porta atribuída pelo ambiente, quando houver
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
