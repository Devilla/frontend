var login = require('../pages/loginAndInside');
createLoanRequest = function () {
  browser
     .click('#navbar_global > ul > li:nth-child(3) > a > span')
     .waitForElementVisible('body', 1000)
    .pause(2000);
  return browser;

};

module.exports = {
  '@tags': ['createLoanRequest'],
  before: function (browser) {
    login(browser).openBrowser();
  },
  'Go to Create Loan Page': function (browser) {
    login(browser).createLoanRequest();
  },
  'choose Collateral currency': function (browser) {
    browser.click('#exampleFormControlSelect1 > option')
    .click('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(2) > div.btn-wrapper > a');
  },
  'Insert Collateral amount': function(browser){
    browser.assert.visible('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(3) > input')
    .setValue('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(3) > input', '200')
    .click('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(3) > div.row > div:nth-child(2) > a > span');
    // .click('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(3) > div.row > div:nth-child(1) > a > span');
  },
  
  'New Loan Request': function(browser){
    browser.click('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(4) > div:nth-child(2) > span > img')
    .click('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(5) > div:nth-child(2) > a')
    .assert.visible('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(5) > div:nth-child(2) > input')
    .setValue('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(5) > div:nth-child(2) > input','500')
    .click('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(5) > div.row > div:nth-child(2) > a');
    // .click('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(5) > div.row > div:nth-child(1) > a > span');
},

'Define Loan Duration': function(browser){
  browser.click('#\31')
  .click('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(6) > div.row > div:nth-child(2) > a > span');
  // .click('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(6) > div.row > div:nth-child(1) > a > span');
},
'Choose Monthly Interest':function(browser){
  broswer.click('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(7) > div:nth-child(4) > button')
  .click('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(7) > div:nth-child(4) > button')
  .getValue('#example-time-input',function(result){
                  Interest = result.value;
                if(Interest==0.50)
                  return true;
                else
                  return false;
                }
  )
  .click('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-lg-7 > div > div:nth-child(7) > div.text-left > button')
  .getValue('#example-time-input',function(result){
    Interest = result.value;
  if(Interest==0.25)
    return true;
  else
    return false;
  }
)
 .click('#root > div > div > div.position-relative > section > div.container.shape-.d-flex.align-items-center > div.col-md-5 > div > div.btn-wrapper.text-center.mb-5.mt-5 > a')
 
}
};
