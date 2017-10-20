module.exports = {
  'look for the game' : function (browser) {
    browser
      .url('https://amazon.com')
      .searchKeyword('playstation 4 just dance')
      .selectCategoryOnTheLeftFirstLevel('PlayStation 4 Games')
      .selectShipping('Ship to Lithuania')
      .selectGenreOnTheLeft('Music & Dance')
      .end();
  }
};
