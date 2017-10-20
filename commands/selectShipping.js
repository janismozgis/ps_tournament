exports.command = function(text) {
  this.useXpath()
      .waitForElementVisible("//*[@id=\"leftNavContainer\"]/ul[7]/div/li[1]/span/a/i/span[contains(text(),'"+text+"')]", 10000)
      .click("//*[@id=\"leftNavContainer\"]/ul[7]/div/li[1]/span/a/i/span[contains(text(),'"+text+"')]")
      .pause(1000)
      .useCss()
  return this;
};
