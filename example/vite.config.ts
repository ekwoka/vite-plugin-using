/// <reference types="vitest" />
import { defineConfig } from 'vite';

import { resolve } from 'node:path';

import { ViteUsing } from '../src';

export default defineConfig({
  root: resolve(__dirname),
  plugins: [ViteUsing()],
  define: {
    'import.meta.vitest': 'undefined',
  },
  build: {
    target: 'esnext',
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es'],
    },
    minify: false,
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`;
        },
        sourcemap: true,
      },
    },
  },
});
