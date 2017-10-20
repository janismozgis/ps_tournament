var chromedriver = require('chromedriver');
var request = require('request');

module.exports = {
    asyncHookTimeout: 60000,

    before: function(done) {
        done();
    },

    after: function(done) {
      console.log('The playstation will arrive: ' + global.playstationDeliveryDate )
      done();

    }

};
