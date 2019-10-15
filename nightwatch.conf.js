const selenium_server = require("selenium-server");
const chrome_driver = require("chromedriver");
const firefox_driver = require("geckodriver");
const ie_driver = require("iedriver");

var SELENIUM_CONFIGURATION = {
  start_process: true,
  server_path: selenium_server.path,
  host: "localhost",
  port: 4444,
  log_path: "logs",
  cli_args: {
    "webdriver.chrome.driver": chrome_driver.path,
    "webdriver.gecko.driver":  firefox_driver.path,
    "webdriver.ie.driver":  ie_driver.path
  }
};

var CHROME = {
  browserName: "chrome",
  javascriptEnabled: true,
  acceptSslCerts: true
};

var FIREFOX = {
  browserName: "firefox",
  javascriptEnabled: true,
  acceptSslCerts: true
};

var IE = {
  browserName: "ie",
  javascriptEnabled: true,
  acceptSslCerts: true
};

var DEFAULT_CONFIGURATION = {
  screenshots: {
    "enabled": true,
    "on_failure": true,
    "on_error": true,
    "path": "screenshots"
  },
  globals: {
    "waitForConditionTimeout": 60000 // 1 min
  },
  desiredCapabilities: CHROME // Capacidades deseadas (Select Browser)
};

var ENVIRONMENTS = {
  default: DEFAULT_CONFIGURATION
};

module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["page_objects"],
  output_folder: "reports",
  globals_path: "globals.js",
  selenium: SELENIUM_CONFIGURATION,
  test_settings: ENVIRONMENTS
};
