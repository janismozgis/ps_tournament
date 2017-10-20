module.exports = (function(settings) {
  var env = require('dotenv').config().parsed;
  if (env) {
    //test settings
    settings.test_settings.default.launch_url = 'https://amazon.con';
    settings.test_settings.chrome.launch_url = 'https://amazon.con';
  }
  return settings;

})(require('./nightwatch.json'));
