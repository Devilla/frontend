var login = require('../pages/loginAndInside');

module.exports = {
  before: function (browser) {
    login(browser).openBrowser();
  },

  'Go to  login influence': function (browser) {
    login(browser).openLoginPage();
  },
  'Click on new Button  ': function (browser) {
    login(browser).openNewBtn();
  },
  'Log out from Influence': function (browser) {
    login(browser).closeLoginPage();
  }
};