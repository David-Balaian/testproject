import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        manifest: true,
        rollupOptions: {
            input: './src/main.jsx', // Set the bundle's entry point to src/main.jsx
        },
    },
    server: {
        proxy: {
            "/api": "http://localhost:5000/", // Address where your backend is served
        },
    },
});
