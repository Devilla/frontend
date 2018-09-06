var login = require('../pages/loginAndInside');


module.exports = {
  '@tags': ['plan'],
  before: function (browser) {
    login(browser).openBrowser();
  },
  'Go to  login influence': function (browser) {
    login(browser).openLoginPage();
  },
  'click on profile dropdown, if exists': function (browser) {
    login(browser).clickProfile();
  },
  'watch upgrade button , if exists': function (browser) {
    browser
      // .verify.visible('.upgrade1')
      // .click('.upgrade1')
      .pause(1000);
  },
  'Month and year plan should get rendreded ': function (browser) {
    browser
      // .getText('.set-br', function (result) {
      //   this.assert.equal(result.value, 'Monthly' || 'Yearly');
      // })
      // .pause(5000);
  },
  'card should be clickable ': function (browser) {
    browser
      // .verify.visible('.pricingTable')
      // .click('.pricingTable')
      // .assert.elementPresent('.makebx')
      // .pause(3000)
      .end(() => {
        console.log('The plan gets selected with the corresponding css');
      });
  }
};
