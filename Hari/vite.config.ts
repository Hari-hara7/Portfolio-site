import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically update service worker
      manifest: {
        name: 'Hari',
        short_name: 'App',
        description: 'Your PWA Description',
        theme_color: '#1f1f1f',  // Dark theme color
        background_color: '#030712',  // Dark background color
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        display: 'standalone',  // Fullscreen mode when opened from home screen
        orientation: 'portrait',
      },
      workbox: {
        globPatterns: ['**/*.{html,js,css,png,jpg,jpeg,svg,woff2}'], // Caching assets
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB limit
      },
    }),
  ],
});
