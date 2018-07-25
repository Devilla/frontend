

module.exports = {
  '@tags': ['campaign'],
  'campaign test Influence': function (client) {
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
      .waitForElementVisible('body', 1000)
      .assert.title('Influence: Increase Your Website Conversions Using Influence')
      .waitForElementVisible('#sidebar-menu > div > a > button > span', 5000)
      .click('#sidebar-menu > div > a > button > span')
      .waitForElementVisible('#campaignname', 10000)
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
      .waitForElementVisible('#profile1 > div > div:nth-child(1) > div > div > div:nth-child(1) > div > div.text-center.card-box.bx > button', 5000)
      .click('#profile1 > div > div:nth-child(1) > div > div > div:nth-child(1) > div > div.text-center.card-box.bx > button')
      .pause(5000)
      .waitForElementVisible( '#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(2)', 5000)
      .click('#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(2)')
      .waitForElementVisible( '#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(1)', 5000)
      .click('#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(1)')
      .waitForElementVisible( '#profile1 > div > div:nth-child(1) > div > div > div:nth-child(2) > div > div.text-center.card-box.bx > button', 5000)
      .click('#profile1 > div > div:nth-child(1) > div > div > div:nth-child(2) > div > div.text-center.card-box.bx > button')
      .waitForElementVisible( '#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(2)', 5000)
      .click('#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(2)')
      .waitForElementVisible( '#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(1)', 5000)
      .click('#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(1)')
      .waitForElementVisible( '#profile1 > div > div:nth-child(1) > div > div > div:nth-child(3) > div > div.text-center.card-box.bx > button', 5000)
      .click('#profile1 > div > div:nth-child(1) > div > div > div:nth-child(3) > div > div.text-center.card-box.bx > button')
      .waitForElementVisible( '#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(2)', 5000)
      .click('#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(2)')
      .waitForElementVisible( '#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(1)', 5000)
      .click('#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(1)')
      .waitForElementVisible( '#profile1 > div > div.notifsettinglast-btn > div.ml-2.float-right > button', 5000)
      .click('#profile1 > div > div.notifsettinglast-btn > div.ml-2.float-right > button')
      .waitForElementVisible( '#messages1 > div > div.rules-buttons > button.btn.btn-color.waves-light.waves-effect.number.ml-2.pl-4.pr-3', 5000)
      .click('#messages1 > div > div.rules-buttons > button.btn.btn-color.waves-light.waves-effect.number.ml-2.pl-4.pr-3')
      .waitForElementVisible('#settings1 > div > div > div > div:nth-child(2) > div.col-md-11 > div > input', 5000)
      .assert.visible('#settings1 > div > div > div > div:nth-child(2) > div.col-md-11 > div > input')
      .setValue('#settings1 > div > div > div > div:nth-child(2) > div.col-md-11 > div > input', '/home')
      .waitForElementVisible( '#urladd > span', 5000)
      .click('#urladd > span')
      .pause(5000)
      .waitForElementVisible( '#settings1 > div > div > div > div.float-right > button', 5000)
      .click('#settings1 > div > div > div > div.float-right > button')
      .pause(5000)
      .waitForElementVisible('#settings2 > div > div > div > div:nth-child(2) > div.col-md-11 > div > input', 5000)
      .assert.visible('#settings2 > div > div > div > div:nth-child(2) > div.col-md-11 > div > input')
      .setValue('#settings2 > div > div > div > div:nth-child(2) > div.col-md-11 > div > input', '/login')
      .click('#urladd')
      .click('span')
      .pause(5000)
      .click('#side-menu > li:nth-child(3) > a')
      .pause(5000)
      .click('div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > a')
      .pause(5000)
      .click('#side-menu > li:nth-child(4) > a > span')
      .pause(5000)
      .end();
  }
};
