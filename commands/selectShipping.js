exports.command = function(text) {
  this.useXpath()
      .waitForElementVisible("//*[@id=\"leftNavContainer\"]/ul/div/li/span/span/div/label/span/span[contains(text(),'"+text+"')]", 10000)
      .click("//*[@id=\"leftNavContainer\"]/ul/div/li/span/span/div/label/span/span[contains(text(),'"+text+"')]")
      .pause(1000)
      .useCss()
  return this;
};
