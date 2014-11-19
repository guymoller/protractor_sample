describe("googleSearch Test", function() {

    var page = require("../pageObjects/nonAngularPageObjectSample.js");

    beforeEach(function() {
        page.go("www.google.com");
    });

    it("should", function() {
        page.search("Santiago Esteva");
    });
});
