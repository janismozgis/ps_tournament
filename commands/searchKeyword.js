
exports.command = function(keyword) {
  this.waitForElementVisible('#twotabsearchtextbox', 10000)
      .setValue('#twotabsearchtextbox', keyword)
      .waitForElementVisible('#nav-search-submit-text', 10000)
      .waitForElementVisible('.nav-search-submit.nav-sprite', 10000)
      .click('.nav-search-submit.nav-sprite')
      .waitForElementVisible('#bcKwText', 10000)
      .assert.containsText("#bcKwText", keyword)

  return this;
};
