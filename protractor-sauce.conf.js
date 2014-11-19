
exports.config = {

    // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
    // The tests will be run remotely using SauceLabs.
    sauceUser: 'user',
    sauceKey: 'key',

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['specs/*.js'],

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
