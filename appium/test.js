const {remote} = require('XCUITest');

const capabilities = {
    "platformName": "iOS",
    "automationName": "XCUITest",
    "deviceName": "iPhone 13",
    "app": "../appy/App/Products/App.app"
  }

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    const batteryItem = await driver.$('//*[@text="Battery"]');
    const time = await driver
    console.log(time);
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);