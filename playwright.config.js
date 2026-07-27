
const { defineConfig, devices } = require('@playwright/test');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 40* 1000,
  retries: 1,
  expect : {
  timeout: 20* 1000,
  },
  reporter:"html",

  projects: [
    {
      name: "Chrome",
      use:{
        broserName : "chromium",
        headless : false,
        screenShot : 'on-failure',
        video : "retain-on-failure",
        trace : "retain-on-failure",
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
          },
      }
    },

     {
      name: "Firefox",
      use:{
        broserName : "firefox",
        headless : true,
        screenShot : 'on-failure',
        video : "retain-on-failure",
        trace : "retain-on-failure",
        viewport: { width: 1920, height: 1080 },
      }
    }
  ],
 
});

module.exports  = config

