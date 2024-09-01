/// <reference types="vitest" />
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  server: {
    port: 3000,
  },
  esbuild: {
    loader: 'tsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      },
    },
  },
  test: {
    globals: true,
    watch: false,
    environment: 'jsdom',
    coverage: {
      exclude: [
        '**/*index.{ts,tsx}',
        '**/*.model.ts',
        '**/*-columns.tsx',
        '**/*Card.tsx',
        '**/*Page.tsx',
        '**/*Table.tsx',
        '**/api/**',
        '**/*-slice.ts',
        '**/providers/**',
        'data-source.ts',
        'typeSvg.tsx',
        ...coverageConfigDefaults.exclude,
      ],
      clean: true,
      provider: 'v8',
      cleanOnRerun: true,
    },
  },

  plugins: [
    react({
      include: '**/*.{jsx,tsx}',
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@features': path.resolve(__dirname, './src/features'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@app': path.resolve(__dirname, './src/app'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
});
