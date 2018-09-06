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
      .waitForElementVisible('#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div.pt-0.row > div.col-md-10 > div > div:nth-child(1) > div.card-body > p',5000)
      .click('#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div.pt-0.row > div.col-md-10 > div > div:nth-child(1) > div.card-body > p')
      .pause(5000)
      .end();
  }
};
