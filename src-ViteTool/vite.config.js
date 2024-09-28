import { defineConfig } from 'vite';
import react from '@vitejs/plugin-eslint';
import eslintPlugin from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslintPlugin({
            cache: false,
            include: ['./src/**/*.js', './src/**/*.jsx'],
        }),
        svgr(),
    ],
});