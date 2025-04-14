import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    //cros error miatt developer modban kell:
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
      },
    },
  },
});
