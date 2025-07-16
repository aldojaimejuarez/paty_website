import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/paty_website/', // ✅ importante para GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
