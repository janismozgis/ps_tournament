module.exports = {
  'test amazon' : function (browser) {
    browser
      .url('https://amazon.com')
      .waitForElementVisible('#twotabsearchtextbox', 10000)
      .setValue('#twotabsearchtextbox', 'playstation 4')
      .waitForElementVisible('#nav-search-submit-text', 10000)
      .waitForElementVisible('.nav-search-submit.nav-sprite', 10000)
      .click('.nav-search-submit.nav-sprite')
      .end();
  }
};
