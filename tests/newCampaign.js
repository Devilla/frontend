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
      .click('#campaignForm > span')
      .pause(10000)
      .waitForElementVisible('#profile1 > div > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div.text-center.card-box.bx > button', 5000)
      .click('#profile1 > div > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div.text-center.card-box.bx > button')
      .pause(5000)
      .waitForElementVisible( '#profile1 > div > div > div > div.row > div > div:nth-child(1) > div > div > div.content > div > div > div.notification-configure-design-setting.col-md-5 > div > div > div > div > div > ul > li:nth-child(1) > a', 5000)
      .click('#profile1 > div > div > div > div.row > div > div:nth-child(1) > div > div > div.content > div > div > div.notification-configure-design-setting.col-md-5 > div > div > div > div > div > ul > li:nth-child(1) > a')
      .waitForElementVisible( '#profile1 > div > div > div > div.row > div > div:nth-child(1) > div > div > div.content > div > div > div.notification-configure-design-setting.col-md-5 > div > div > div > div > div > ul > li:nth-child(2) > a > i', 5000)
      .click('#profile1 > div > div > div > div.row > div > div:nth-child(1) > div > div > div.content > div > div > div.notification-configure-design-setting.col-md-5 > div > div > div > div > div > ul > li:nth-child(2) > a > i')
      .waitForElementVisible( '#profile1 > div > div > div > div.row > div > div:nth-child(1) > div > div > div.content > div > div > div.notification-configure-design-setting.col-md-5 > div > div > div > div > div > ul > li:nth-child(3) > a', 5000)
      .click('#profile1 > div > div > div > div.row > div > div:nth-child(1) > div > div > div.content > div > div > div.notification-configure-design-setting.col-md-5 > div > div > div > div > div > ul > li:nth-child(3) > a')
      .waitForElementVisible( '#profile1 > div > div > div > div.row > div > div:nth-child(1) > div > div > div.header.row > div > div > label > div', 5000)
      .click('#profile1 > div > div > div > div.row > div > div:nth-child(1) > div > div > div.header.row > div > div > label > div')
      .waitForElementVisible( '#profile1 > div > div > div > div.row > div > div:nth-child(1) > div > div > div.header.row > div > div > label', 5000)
      .click('#profile1 > div > div > div > div.row > div > div:nth-child(1) > div > div > div.header.row > div > div > label')
      // .waitForElementVisible( '#profile1 > div > div > div > div.row > div > div.state-btn.row > span:nth-child(2)', 5000)
      // .click('#profile1 > div > div > div > div.row > div > div.state-btn.row > span:nth-child(2)')

      // #root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div > div.campaign-footer-container > div > div:nth-child(1) > button

      // .waitForElementVisible( '#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div > div.campaign-footer-container > div > button.text-center.btn-footer-2.mr-1', 10000)
      // .click('#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div > div.campaign-footer-container > div > button.text-center.btn-footer-2.mr-1')
      // .waitForElementVisible( '#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div > div.campaign-footer-container > div > button.text-center.btn-footer-2.mr-1', 10000)
      // .click('#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div > div.campaign-footer-container > div > button.text-center.btn-footer-2.mr-1')
      // .waitForElementVisible( '#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div > div.campaign-footer-container > div > button.text-center.btn-footer-2.mr-1', 10000)
      // .click('#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div > div.campaign-footer-container > div > button.text-center.btn-footer-2.mr-1')
      // .waitForElementVisible( '#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div > div.campaign-footer-container > div > button.text-center.btn-footer-2.mr-1', 10000)
      // .click('#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div > div.campaign-footer-container > div > button.text-center.btn-footer-2.mr-1')
      // .waitForElementVisible( '#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div > div.campaign-footer-container > div > button.btn-right.btn-footer-3.ml-1', 10000)
      // .click('#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div > div.campaign-footer-container > div > button.btn-right.btn-footer-3.ml-1')
      // .click('#side-menu > li:nth-child(3) > a')
      // .pause(5000)
      // .click('#root > div > div.wrapper > div:nth-child(2) > div > div.content.dashboard-content > div > div > div > div > div > div > div.tbody.tab-body > div:nth-child(1) > div.text-center.td-6.col-md-2.analytics-width-20')
      // .pause(5000)
      .end();
  }
};
