module.exports = {
  '@tags':['campaign'],
  'campaign test Influence' : function (client) {
    client
    .url('https://useinfluence.co/login')
    .waitForElementVisible('body', 1000)
    .assert.title('Influence: Increase Your Website Conversions Using Influence')
    .assert.visible('input[type=email]')
    .setValue('input[type=email]', 'devinair@gmail.com')
    .assert.visible('input[type=password]')
    .setValue('input[type=password]', '12345')
    .waitForElementVisible('input[type=submit]', 5000)
    .click('input[type=submit]')
    .pause(5000)
      // .url('https://useinfluence.co/dashboard')
      .waitForElementVisible('body', 1000)
      .assert.title('Influence: Increase Your Website Conversions Using Influence')
      .waitForElementVisible('#sidebar-menu > div > a > button > span', 5000)
      .click('#sidebar-menu > div > a > button > span')
      .waitForElementVisible('#campaignname', 5000)
      .assert.visible('#campaignname')
      .setValue('#campaignname', 'Logan')
      .waitForElementVisible('#website', 5000)
      .assert.visible('#website')
      .setValue('#website', 'logan.com')
      .waitForElementVisible('#averageCustomer', 5000)
      .assert.visible('#averageCustomer')
      .setValue('#averageCustomer', 12)
      .pause(5000)
      .waitForElementVisible('#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div.content.fill.campaign-container > div > div > div > div > form > button', 5000)
      .click('#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div.content.fill.campaign-container > div > div > div > div > form > button')
      .pause(5000)
      .end();
  }
};
