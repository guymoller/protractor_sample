exports.config = {

  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:3000',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['specs/step*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  onPrepare: function(){
      // If you need to interact with a non-Angular page, you may access the wrapped webdriver instance
      // directly with browser.driver. This is a an alias.
      global.dv = browser.driver;
  }
};