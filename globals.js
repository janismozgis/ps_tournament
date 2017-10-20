var chromedriver = require('chromedriver');
var request = require('request');

module.exports = {
    asyncHookTimeout: 60000,
    beforeEach: function (browser, done) {
        browser.resizeWindow(1920, 1080, done);
    },
};
