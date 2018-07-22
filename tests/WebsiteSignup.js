module.exports = {
  'login test Influence' : function (client) {
    client
      .url('https://useinfluence.co/signup')
      .waitForElementVisible('body', 1000)
      .assert.title('Influence: Increase Your Website Conversions Using Influence')
      .assert.visible('input[type=email]')
      .setValue('input[type=email]', 'dexterlabs@gmail.com')
      .assert.visible('input[type=password]')
      .setValue('input[type=password]', '12345')
      .waitForElementVisible('input[type=submit]', 10000)
      .click('input[type=submit]')
      .pause(10000)
      .end();
  }
};
