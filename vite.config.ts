import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: './',
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor-react',
              test: /node_modules[\\/](react|react-dom|react-router)([\\/]|$)/,
              priority: 10,
            },
            { name: 'vendor-motion', test: /node_modules[\\/]framer-motion([\\/]|$)/ },
            { name: 'vendor-leaflet', test: /node_modules[\\/]leaflet([\\/]|$)/ },
            { name: 'vendor-swiper', test: /node_modules[\\/]swiper([\\/]|$)/ },
            { name: 'vendor-icons', test: /node_modules[\\/]react-icons([\\/]|$)/ },
          ],
        },
      },
    },
  },
});
