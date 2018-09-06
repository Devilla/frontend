var login = require('../pages/loginAndInside');

module.exports = {
  '@tags': ['campaign'],

  before: function (browser) {
    login(browser).openBrowser();
  },
  'Go to  login influence': function (browser) {
    login(browser).openLoginPage();
  },
  'campaign test Influence': function (client) {
    client
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#sidebar-menu > div > a', 5000)
      .click('#sidebar-menu > div > a')
      .click('#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div > div > div > div > div > div.campaign-type-content.row > div.left-content.pr-0.mr-0.col-md-5 > div.campaign-type-button.ml-5.row > button')
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
      .waitForElementVisible('#campaignForm', 5000)
      .click('#campaignForm')
      // .pause(10000)
      // .waitForElementVisible('#profile1 > div > div:nth-child(1) > div > div > div:nth-child(1) > div > div.text-center.card-box.bx > button', 5000)
      // .click('#profile1 > div > div:nth-child(1) > div > div > div:nth-child(1) > div > div.text-center.card-box.bx > button')
      // .pause(5000)
      // .waitForElementVisible( '#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(2)', 5000)
      // .click('#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(2)')
      // .waitForElementVisible( '#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(1)', 5000)
      // .click('#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(1)')
      // .waitForElementVisible( '#profile1 > div > div:nth-child(1) > div > div > div:nth-child(2) > div > div.text-center.card-box.bx > button', 5000)
      // .click('#profile1 > div > div:nth-child(1) > div > div > div:nth-child(2) > div > div.text-center.card-box.bx > button')
      // .waitForElementVisible( '#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(2)', 5000)
      // .click('#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(2)')
      // .waitForElementVisible( '#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(1)', 5000)
      // .click('#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(1)')
      // .waitForElementVisible( '#profile1 > div > div:nth-child(1) > div > div > div:nth-child(3) > div > div.text-center.card-box.bx > button', 5000)
      // .click('#profile1 > div > div:nth-child(1) > div > div > div:nth-child(3) > div > div.text-center.card-box.bx > button')
      // .waitForElementVisible( '#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(2)', 10000)
      // .click('#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(2)')
      // .waitForElementVisible( '#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(1)', 10000)
      // .click('#profile1 > div > div > div > div > div.state-btn.row > span:nth-child(1)')
      // .waitForElementVisible( '#profile1 > div > div.notifsettinglast-btn > div.ml-2.float-right > button', 10000)
      // .click('#profile1 > div > div.notifsettinglast-btn > div.ml-2.float-right > button')
      // .waitForElementVisible( '#messages1 > div > div.rules-buttons > button.btn.btn-color.waves-light.waves-effect.number.ml-2.pl-4.pr-3', 10000)
      // .click('#messages1 > div > div.rules-buttons > button.btn.btn-color.waves-light.waves-effect.number.ml-2.pl-4.pr-3')
      // .waitForElementVisible('#settings1 > div > div > div > div:nth-child(2) > div.col-md-10 > div > input', 10000)
      // .assert.visible('#settings1 > div > div > div > div:nth-child(2) > div.col-md-10 > div > input')
      // .setValue('#settings1 > div > div > div > div:nth-child(2) > div.col-md-10 > div > input', '/home')
      // .waitForElementVisible( '#urladd > span', 10000)
      // .click('#urladd > span')
      // .pause(5000)
      // .waitForElementVisible( '#settings1 > div > div > div > div.float-right > button', 5000)
      // .click('#settings1 > div > div > div > div.float-right > button')
      // .pause(5000)
      // .waitForElementVisible('#settings2 > div > div > div > div:nth-child(2) > div.col-md-10 > div > input', 10000)
      // .assert.visible('#settings2 > div > div > div > div:nth-child(2) > div.col-md-10 > div > input')
      // .setValue('#settings2 > div > div > div > div:nth-child(2) > div.col-md-10 > div > input', '/login')
      // .click('#urladd')
      // .click('span')
      // .pause(5000)
      .click('#side-menu > li:nth-child(3) > a')
      .pause(5000)
      // .click('div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > a')
      // .pause(5000)
      // .click('#side-menu > li:nth-child(4) > a > span')
      // .pause(5000)
      .end();
  }
};
