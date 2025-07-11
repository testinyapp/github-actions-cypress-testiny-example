const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome, mocha-junit-reporter',
    mochawesomeReporterOptions: {
      jenkinsMode: true,
      json: true,
      outputs: true,
      testCaseSwitchClassnameAndName: true,
      overwrite: false
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'results/test-results.[hash].xml',
      jenkinsMode: true,
      json: true,
      outputs: true,
      testCaseSwitchClassnameAndName: true,
    },
  },
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
