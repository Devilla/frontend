var login = require('../pages/loginAndInside');


module.exports = {
  '@tags': ['signup'],
  'Go to Signup Influence': function (client) {
    client
      .url('https://useinfluence.co/signup')
      .waitForElementVisible('body', 5000)
      .assert.visible('input[type=email]')
      .setValue('input[type=email]', 'dexterlabs1' + Math.random() + '@gmail.com')
      .assert.visible('input[type=password]')
      .setValue('input[type=password]', '12345')
      .waitForElementVisible('input[type=submit]', 10000)
      .click('input[type=submit]')
      .pause(2000)
      .end();
  }
};
