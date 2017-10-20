module.exports = {
  'look for the playstation' : function (browser) {
    browser
      .url('https://amazon.com')
      .searchKeyword('playstation 4')
      .selectCategoryOnTheLeft('Consoles')
      .selectShipping('Ship to Lithuania')
      .selectReview('4 Stars & Up')
      .end();
  }
};
