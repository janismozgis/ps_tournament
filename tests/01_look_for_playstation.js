module.exports = {
    before: function(browser, done) {
      global.bestItemUrl =  {
        id: '',
        price: false,
      };
      done();
  },
  'look for the playstation' : function (browser) {
    browser
      .url('https://amazon.com')
      .searchKeyword('playstation 4')
      .selectCategoryOnTheLeft('Consoles')
      .selectShipping('Ship to Lithuania')
      .selectReview(4)
      .selectSortBy('price-asc-rank')
      browser.execute(function() {
          var elements = document.querySelectorAll('.s-result-item');
          var bestItemUrl =  {
            href: '',
            price: false,
          };
          for(var i = 0; i < elements.length - 2; i++) {
            var element = elements[i];
            var price = parseFloat(element.querySelector('.sx-price-whole').textContent);
            var reviews = element.querySelector('.a-span-last .a-spacing-mini a.a-size-small.a-link-normal.a-text-normal').textContent
            reviewsInt = parseInt(reviews.replace(',', ''))
            if (!bestItemUrl.price || bestItemUrl.price > parseFloat(price)) {
                bestItemUrl.href = element.querySelector('.s-access-detail-page').href;
                bestItemUrl.price = price;
            }

          }
          return bestItemUrl;

      }, [], function(result) {
        global.bestItemUrl = result.value;
      })
      .pause(1000)
  },
  'try to get the playstation' : function (browser) {
    browser
      .url(global.bestItemUrl.href)
      .waitForElementVisible('#add-to-cart-button', 30000)
      .click('#add-to-cart-button')
      .waitForElementVisible('#smartShelfAddToCartNative', 30000)
      .click('#smartShelfAddToCartNative')
      .waitForElementVisible('.a-button-input[name="proceedToCheckout"]', 10000)
      .click('.a-button-input[name="proceedToCheckout"]')
      .waitForElementVisible('#ap_email', 10000)
      .setValue('#ap_email', 'hackathonforthewin@gmail.com')
      .setValue('#ap_password', 'hackathon2017')
      .click('#signInSubmit')
      .waitForElementVisible('.a-declarative.a-button-text', 10000)
      .click('.a-declarative.a-button-text')
      .getText('.a-color-success.upsell-messaging', function(item) {
        global.playstationDeliveryDate = item.value;
      })
      .end();
  }
};
