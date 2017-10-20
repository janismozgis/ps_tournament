exports.command = function(text) {
  this.useXpath()
      .waitForElementVisible("//*[@id=\"leftNavContainer\"]/ul/div/li/span/a/i/span[contains(text(),'"+text+"')]", 10000)
      .click("//*[@id=\"leftNavContainer\"]/ul/div/li/span/a/i/span[contains(text(),'"+text+"')]")
      .pause(1000)
      .useCss()
  return this;
};
