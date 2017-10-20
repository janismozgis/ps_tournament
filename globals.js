var chromedriver = require('chromedriver');
var request = require('request');

module.exports = {
    asyncHookTimeout: 60000,

    before: function(done) {
        console.log('Starting test session');
        done();
    },

    beforeEach: function (browser, done) {
        browser.resizeWindow(1920, 1080, done);
    },

    after: function(done) {
      console.log('Ending test session');
      done();

    }

};
