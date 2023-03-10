const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  e2e: {
    baseUrl: 'http://localhost:8000',
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
