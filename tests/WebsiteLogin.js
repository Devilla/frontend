var login = require('../pages/login');

module.exports = {
  before: function(browser) {
    login(browser).openBrowser();
  },

  'Go to  login influence' : function (browser) {
    login(browser).openLoginPage();
  },
  'Log out from Influence': function (browser) {
    login(browser).closeLoginPage();
  }
};
