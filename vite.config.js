import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    exclude: ["./node_modules"],
    setupFiles: "./src/test/setup.jsx",
    testUrl: "http://localhost:5174/",
    testEnvironment: "node",
  },
  server: {
    port: 5174,
  },
  plugins: [react()],
});
