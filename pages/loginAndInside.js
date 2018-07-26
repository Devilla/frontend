module.exports = function (browser) {

  this.openBrowser = function () {
    browser
      .windowMaximize()
      .url('https://useinfluence.co/home')
      .waitForElementVisible('body', 1000);
    return browser;
  };

  this.openLoginPage = function () {
    browser
      .click('.btn.btn--sm.type--uppercase.loginbtn')
      .waitForElementVisible('body', 1000)
      .assert.visible('input[type=email]')
      .setValue('input[type=email]', 'devinair@gmail.com')
      .assert.visible('input[type=password]')
      .setValue('input[type=password]', '12345')
      .waitForElementVisible('input[type=submit]', 10000)
      .click('input[type=submit]')
      .pause(2000);
    return browser;

  };
  this.fillWrongDetails = function () {
    browser
      .url('https://useinfluence.co/login')
      .waitForElementVisible('body', 3000)
      .setValue('input[type=email]', 'devinair@gmail.com')
      .setValue('input[type=password]', '12345')
      .click('input[type=submit]')
      .pause(2000);
    return browser;
  };

  this.checkSession = function () {
    browser
      .session(function (result) {
        console.log(result.value);
      })
      .session('delete', function (result) {
        console.log(result.value);
      })
      .end(() => {
        console.log('ending session for user.....');
      });
    return browser;
  };

  this.openNewBtn = function () {
    browser
      .waitForElementVisible('body', 3000)
      .verify.visible('button[type=button]')
      .pause(1000);
    return browser;
  };

  this.clickProfile = function () {
    browser
      .waitForElementVisible('.rounded-circle', 8000)
      .click('.mdi.mdi-account-settings-variant')
      .click('.dropdown-item.notify-item> .fi-head + span')
      .pause(2000);
    return browser;
  };

  this.closeLoginPage = function () {
    browser
      .waitForElementVisible('.rounded-circle', 18000)
      .click('.mdi.mdi-account-settings-variant')
      .click('.dropdown-item.notify-item> .fi-power')
      .pause(5000)
      .end(() => {
        console.log('logging use out from influence...');
      });
    return browser;
  };

  return this;
};
