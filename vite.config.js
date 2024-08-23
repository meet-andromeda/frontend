import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';
import {
  defineConfig,
  loadEnv,
} from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const plugins = [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
  ];

  if (env.VITE_USE_HTTPS === 'true') {
    plugins.push(viteBasicSslPlugin());
  }

  return {
    resolve: {
      alias: {
        // This Rollup aliases are extracted from @esbuild-plugins/node-modules-polyfill,
        // see https://github.com/remorses/esbuild-plugins/blob/master/node-modules-polyfill/src/polyfills.ts
        // process and buffer are excluded because already managed
        // by node-globals-polyfill
        stream: 'rollup-plugin-node-polyfills/polyfills/stream',
        path: 'rollup-plugin-node-polyfills/polyfills/path',
        http: 'rollup-plugin-node-polyfills/polyfills/http',
        https: 'rollup-plugin-node-polyfills/polyfills/http',
        os: 'rollup-plugin-node-polyfills/polyfills/os',
        zlib: 'rollup-plugin-node-polyfills/polyfills/zlib',
        buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
        process: 'rollup-plugin-node-polyfills/polyfills/process-es6',
        querystring: 'rollup-plugin-node-polyfills/polyfills/qs',
        // crypto package is missing
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
        // Enable esbuild polyfill plugins
      },
    },
    define: {
    },
    build: {
      outDir: 'build',
      rollupOptions: {
        plugins: [
          // Enable rollup polyfills plugin
          // used during production bundling
          rollupNodePolyFill(),
        ],
      },
    },
    server: {
      port: 3000,
    },
    plugins,
  };
});
