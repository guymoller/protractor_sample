var Factory = require('../lib/pageObject.js').PageObjectFactory;

module.exports = Factory.create({

    load: function() {
        return browser.driver.get("http://www.google.com");
    },

    search: function(param) {
        browser.driver.findElement(by_.id('gbqfq')).sendKeys(param);
        return browser.driver.sleep(3000);
    }

});
