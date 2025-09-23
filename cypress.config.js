// cypress.config.js
const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const oldPlugin = require(`./cypress/plugins/index`);
require("dotenv").config();

module.exports = defineConfig({
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 1
  },
  chromeWebSecurity: false,
  defaultCommandTimeout:5000,
  pageLoadTimeout:10000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, cypress-qase-reporter',
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
    },
    cypressQaseReporterReporterOptions: {
      // ab492d7458dc406f87b116ef42db2df349651da069717f329c91fd85f35a7fee
      // dcffe95d65c0bd4129752cea730b5cebc84de5da0b65a638260e9ca0e967cf8d
      apiToken: '',
      projectCode: '',
      logging: true,
      basePath: '',
      screenshotFolder: 'screenshots',
      sendScreenshot: true,
      runComplete: true,
      environmentId: 1,
      rootSuiteTitle: 'Cypress Tests',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      oldPlugin(on, config);
      getCompareSnapshotsPlugin(on, config);
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          // fullPage screenshot size is 1400x1200 on non-retina screens
          // and 2800x2400 on retina screens
          launchOptions.args.push('--window-size=1928,1080')

          // force screen to be non-retina (1400x1200 size)
          launchOptions.args.push('--force-device-scale-factor=1')

          // force screen to be retina (2800x2400 size)
          // launchOptions.args.push('--force-device-scale-factor=2')
        }

        if (browser.name === 'electron' && browser.isHeadless) {
          // fullPage screenshot size is 1400x1200
          launchOptions.preferences.width = 1928
          launchOptions.preferences.height = 1080
        }

        if (browser.name === 'firefox' && browser.isHeadless) {
          // menubars take up height on the screen
          // so fullPage screenshot size is 1400x1126
          launchOptions.args.push('--width=1928')
          launchOptions.args.push('--height=1080')
        }

        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--use-fake-ui-for-media-stream');
          launchOptions.args.push('--use-fake-device-for-media-stream');
          launchOptions.args.push('--enable-geolocation');
          launchOptions.args.push('--unsafely-treat-insecure-origin-as-secure=https://merchant.mypertamina.id');
        }

        return launchOptions
      })
      config.env.userCMS = process.env.userCMS;
      return config;
    },
    baseurl_cms=https://google.com/
  },
});
