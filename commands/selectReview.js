exports.command = function(level) {
  this.waitForElementVisible(".a-icon.a-icon-star-medium.a-star-medium-" + level, 10000)
      .click(".a-icon.a-icon-star-medium.a-star-medium-" + level)
      .pause(1000)
      
  return this;
};
