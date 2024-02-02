import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://aqsomskakcyqfnhzodmz.supabase.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/rest/v1'),
      },
    },
  },
});
