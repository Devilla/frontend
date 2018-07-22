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
      .setValue('#address', '151-A Baker Street')
      .setValue('#companyName', 'useinfluence')
      .assert.value("#email", "devinair@gmail.com")
      .click('.text-right.save >  button')
      .pause(1000, () => console.log('Saving user data...'))
      .back()
      .pause(3000)
      .forward();
  },
  'verify  profile details': function (browser) {
    browser
      .assert.value('#firstName', 'Raju')
      .assert.value('#lastName', 'Gautam')
      .assert.value('#address', '151-A Baker Street')
      .assert.value('#companyName', 'useinfluence')
      .pause(1000, () => console.log('User data verified...'));
  },
  'verify  profile details': function (browser) {
    browser
      .setValue('#firstName', '')
      .setValue('#lastName', '')
      .setValue('#address', '')
      .setValue('#companyName', '')
      .pause(1000, () => console.log('User data cleared ...'));
  },
  'Watch billing button , if exists': function (browser) {
    browser
      .verify.visible(".billing1");
  },
  'Log out from Influence': function (browser) {
    login(browser).closeLoginPage();
  }
}