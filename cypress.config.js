import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5174",
    specPattern: "src/tests/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    env: {
      VITE_STAGE: "LOCAL",
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
