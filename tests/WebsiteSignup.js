var login = require('../pages/loginAndInside');


module.exports = {
  '@tags': ['signup'],
  'Go to Signup Influence': function (client) {
    client
      .url('https://useinfluence.co/signup')
      .waitForElementVisible('body', 1000)
      .assert.title('Influence: Increase Your Website Conversions Using Influence')
      .assert.visible('input[type=email]')
      .setValue('input[type=email]', 'dexterlabs1' + Math.random() + '@gmail.com')
      .assert.visible('input[type=password]')
      .setValue('input[type=password]', '12345')
      .waitForElementVisible('input[type=submit]', 5000)
      .click('input[type=submit]')
      .pause(2000)
      .waitForElementVisible('div > div.basic-gradient-light > div.content > div > div > div > section.text-center.unpad--top.pricerow > div > div > div:nth-child(2) > div > div.btn.btn--primary.col-md-12.text-center.starttrial-btn', 5000)
      .click('div > div.basic-gradient-light > div.content > div > div > div > section.text-center.unpad--top.pricerow > div > div > div:nth-child(2) > div > div.btn.btn--primary.col-md-12.text-center.starttrial-btn')
      .pause(2000)
      .waitForElementVisible('#coupon', 2000)
      .assert.visible('#coupon')
      .setValue('#coupon', 'FIRSTCOME')
      .waitForElementVisible('div > div.basic-gradient-light > div.content > div > div > div > section > div > div > div > div > div > div.authpage-container > div > div > div > div > div > div:nth-child(2) > div:nth-child(3) > div > div > form > div:nth-child(2) > div > input', 5000)
      .click('div > div.basic-gradient-light > div.content > div > div > div > section > div > div > div > div > div > div.authpage-container > div > div > div > div > div > div:nth-child(2) > div:nth-child(3) > div > div > form > div:nth-child(2) > div > input')
      .pause(2000)
      .end();
  },
  'Log out from Influence': function (browser) {
    login(browser).closeLoginPage();
  }
};