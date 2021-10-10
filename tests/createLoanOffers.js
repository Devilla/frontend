var login = require('../pages/loginAndInside');

module.exports = {
  '@tags': ['CreateloanOffers'],

  before: function (browser) {
    login(browser).openBrowser();
  },
  'Go to  Create Loan Offers page': function (browser) {
    browser.click('#navbar_global > ul > li:nth-child(4) > a > span');
  },
  'Choose loan currency': function (browser) {
    browser.click('#root > div > div > div > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(2) > div.row.mt-5 > div.col-md-6 > span > img)');
  },
  'Insert loan currency': function (browser) {
    browser.assert.visible('#root > div > div > div > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(3) > input')
    .setValue('#root > div > div > div > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(3) > input','10')
    .click('#root > div > div > div > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(3) > div.btn-wrapper > a > span');
  },
  'New loan offer': function (browser) {
    browser.assert.visible('#root > div > div > div > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(5) > input')
    .setValue('#root > div > div > div > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(5) > input','5')
    .click('#root > div > div > div > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(5) > div.btn-wrapper > a > span');
  },
  'Add your collateral': function (browser) {
    browser.click('#exampleFormControlSelect1 > option')
    .click('#root > div > div > div > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(6) > div.row.ml-2 > div > div > input:nth-child(3)')
    .click('#root > div > div > div > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(6) > div.row.ml-2 > div > div > input:nth-child(5)')
    .click('#root > div > div > div > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(6) > div.text-center.mt-3 > button')
    .click('#root > div > div > div > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(6) > div.btn-wrapper > a > span');
  },
  'Define Loan Duration': function (browser) {
    browser.click('#\31')
    .click('#root > div > div > div > section > div.container.shape-.d-flex.align-items-center > div.col-md-5 > div > div.card-body.text-left > div.btn-wrapper.text-center > a > span');
  }

};
