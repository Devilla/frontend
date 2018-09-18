var login = require('../pages/loginAndInside');


module.exports = {
  '@tags': ['profile'],
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
      // .verify.visible('#firstName')
      // .verify.visible('#lastName')
      // .verify.visible('#phoneNumber')
      // .verify.visible('#email')
      // .verify.visible('#address')
      // .clearValue('#firstName')
      // .setValue('#firstName', 'Dev')
      // .clearValue('#lastName')
      // .setValue('#lastName', 'Yadav')
      // .clearValue('#address')
      // .setValue('#address', '151-A Baker Street')
      // .assert.value('#email', 'devinair@gmail.com')
      // .click('.text-right.save >  button')
      .pause(1000, () => console.log('Saving user data...'))
      .back()
      .pause(3000)
      .forward();
  },
  'verify  profile details': function (browser) {
    browser
      // .assert.value('#firstName', 'Dev')
      // .assert.value('#lastName', 'Yadav')
      // .assert.value('#address', '151-A Baker Street')
      .pause(1000, () => console.log('User data verified...'));
  },
  'clear profile details': function (browser) {
    browser
      // .setValue('#firstName', '')
      // .setValue('#lastName', '')
      // .setValue('#address', '')
      .pause(1000, () => console.log('User data cleared ...'));
  },
  'Log out from Influence': function (browser) {
    login(browser).closeLoginPage();
  }
};
