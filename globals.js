var chromedriver = require('chromedriver');
var request = require('request');

module.exports = {
    asyncHookTimeout: 60000,

    before: function(done) {
        done();
    },

    beforeEach: function (browser, done) {
        browser.resizeWindow(1920, 1080, done);
    },

    after: function(done) {
      console.log('The playstation will arrive: ' + global.playstationDeliveryDate )
      done();

    }

};
