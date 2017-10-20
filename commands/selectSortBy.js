exports.command = function(text) {
  this.waitForElementVisible("#sort", 10000)
      .click("#sort")
      .waitForElementVisible('option[value="' + text + '"]', 1000)
      .click('option[value="' + text + '"]')
      .pause(1000)
  return this;
};
