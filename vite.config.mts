import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'GcTextComposer',
      fileName: (format) => `gc-text-composer.${format}.js`,
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  server: {
    open: '/src/playground/index.html',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
  },
});
