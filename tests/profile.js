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
  'fill profile details': function (browser) {
    browser
      .verify.visible('#firstName')
      .verify.visible('#lastName')
      .verify.visible('#phoneNumber')
      .verify.visible('#email')
      .verify.visible('#address')
      .verify.visible('#formControlsSelect')
      .verify.visible('#formfBillinControlsSelect')
      .verify.visible('#companyName')
      .setValue('#firstName', 'Raju')
      .setValue('#lastName', 'Gautam')
      .setValue('#phoneNumber', 2323232323)
      .setValue('#address', '151-A Baker Street')
      .setValue('#companyName', 'useinfluence')
      .assert.value("#email", "devinair@gmail.com")
      .click('.text-right.save >  button')
      .pause(5000);
  },
  'Log out from Influence': function (browser) {
    login(browser).closeLoginPage();
  }
}