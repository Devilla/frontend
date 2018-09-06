var login = require('../pages/loginAndInside');

module.exports = {
  '@tags': ['settings'],

  before: function (browser) {
    login(browser).openBrowser();
  },
  'Go to  login influence': function (browser) {
    login(browser).openLoginPage();
  },
  'settings test Influence': function (client) {
    client
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#side-menu > li:nth-child(4) > a > i', 5000)
      .click('#side-menu > li:nth-child(4) > a > i')
      .pause(5000)
      .end();
  }
};
