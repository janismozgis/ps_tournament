module.exports = {
  'look for the camera' : function (browser) {
    browser
      .url('https://amazon.com')
      .searchKeyword('playstation 4 camera')
      .selectCategoryOnTheLeftFirstLevel('PlayStation 4 Accessories')
      .selectShipping('Ship to Lithuania')
      .selectReview(4)
      .selectSortBy('price-asc-rank')
      .end();
  }
};
