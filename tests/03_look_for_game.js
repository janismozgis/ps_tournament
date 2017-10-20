module.exports = {
  'look for the game' : function (browser) {
    browser
      .url('https://amazon.com')
      .searchKeyword('playstation 4 just dance')
      .click('.s-top-nav-all-filter-expand-text')
      .selectCategoryOnTheLeftFirstLevel('PlayStation 4 Games')
      .selectShipping('Ship to Lithuania')
      .selectGenreOnTheLeft('Music & Dance')
      .end();
  }
};
