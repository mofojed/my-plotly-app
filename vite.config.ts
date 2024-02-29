import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    open: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      // Some packages need this to start properly if they reference global
      define: {
        global: "globalThis",
      },
    },
  },
});
