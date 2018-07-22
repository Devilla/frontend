var login = require('../pages/loginAndInside');


module.exports = {
  before: function (browser) {
    login(browser).openBrowser();
  },
  'Go to  login influence': function (browser) {
    login(browser).openLoginPage();
  },
  'click on profile dropdown, if exists': function (browser) {
    login(browser).clickProfile();
  },
  'Log out from Influence': function (browser) {
    login(browser).closeLoginPage();
  }
}