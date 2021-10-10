var login = require('../pages/loginAndInside');
openMyLoans = function () {
  browser
     .click('#navbar_global > ul > li:nth-child(2) > a > span')
     .waitForElementVisible('body', 1000)
    // .assert.visible('input[type=email]')
    // .setValue('input[type=email]', 'devinair@gmail.com')
    // .assert.visible('input[type=password]')
    // .setValue('input[type=password]', '12345')
    // .waitForElementVisible('input[type=submit]', 10000)
    // .click('input[type=submit]')
    .pause(2000);
  return browser;

};
myLoanPage = function () {
  browser
  .click('#root > div > div > div > section > div.d-flex.align-items-center > div > div > div.card-header.text-left > a.btn.btn-primary')
  .waitForElementVisible('body', 1000)
  .click('#root > div > div > div > section > div.d-flex.align-items-center > div > div > div.card-header.text-left > a.btn.btn-secondary')
  .waitForElementVisible('body', 1000)
  .click('#root > div > div > div > section > div.d-flex.align-items-center > div > div > div.card-body > div.btn-wrapper > a:nth-child(1)')
  .waitForElementVisible('body', 1000)
  .url('https://blocklendr.herokuapp.com/myloans')
  .click('#root > div > div > div > section > div.d-flex.align-items-center > div > div > div.card-body > div.btn-wrapper > a:nth-child(2) > span')
  .waitForElementVisible('body', 1000)
  .url('https://blocklendr.herokuapp.com/')
  .pause(2000);
  return browser;
};
module.exports = {
  '@tags': ['myloans'],

  before: function (browser) {
    login(browser).openBrowser();
  },
  'Go to My Loans page': function (browser) {
    this.openMyLoans();
    this.myLoanPage();
  }
  
  
};
