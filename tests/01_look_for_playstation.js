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
      // .elements('css selector', '.s-result-item', function(items){
      //   console.info(items);
      //     // browser.elementIdText(function(){})
      //     // for(var i = 0; i < items.value.length - 2; i++) {
      //     //   browser.waitForElementVisible('#result_' + i, 10000);
      //     //   browser.waitForElementVisible('#result_' + i + ' .a-span-last .a-spacing-mini', 10000);
      //     //   //check the review count
      //     //   console.info('checking for review ' + i)
      //     //
      //     //   browser.getText('#result_' + i + ' .a-span-last .a-spacing-mini', function(reviewValue){
      //     //     console.info('review value for ' + i)
      //     //       if (reviewValue.value >= 100) {
      //     //           browser.getText('#result_' + i + ' .sx-price-whole', function(priceValue){
      //     //               if (reviewValue.value >= 100) {
      //     //                   //check the price
      //     //                   console.info(global.bestItemUrl.price + ' -- ' + priceValue.value + '--' + i);
      //     //
      //     //                   if (!global.bestItemUrl.price || global.bestItemUrl.price > parseFloat(priceValue.value)) {
      //     //                     console.info('we have a set! on ' + i);
      //     //                       global.bestItemUrl.id = '#result_' + i;
      //     //                       global.bestItemUrl.price = parseFloat(priceValue.value);
      //     //                   }
      //     //               }
      //     //           });
      //     //       }
      //     //     }).pause(100);
      //     // }
      // })
      .pause(1000, function(){
      })
  },
  'try to get the playstation' : function (browser) {
    browser
      .url(global.bestItemUrl.href)
      .waitForElementVisible('#add-to-cart-button', 30000)
      .click('#add-to-cart-button')
      .waitForElementVisible('#smartShelfAddToCartNative', 30000)
      .click('#smartShelfAddToCartNative')
      .end();
  }
};
