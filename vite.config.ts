import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@/components/ui/button', '@/components/ui/card', '@/components/ui/badge'],
          router: ['react-router-dom'],
        },
      },
    },
    // Enable source maps for debugging but optimize for production
    sourcemap: mode === 'development',
    // Minify using esbuild for better performance
    minify: 'esbuild',
    // Optimize dependencies
    target: 'esnext',
    // Compress assets
    assetsInlineLimit: 4096,
    // CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
      'lucide-react',
    ],
  },
  // Enable gzip compression
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
}));
