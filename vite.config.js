import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // Makes the server accessible to other devices on the network
    port: 3000
  },
  plugins: [react()],
});
