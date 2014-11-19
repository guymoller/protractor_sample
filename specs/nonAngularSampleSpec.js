describe("googleSearch Test", function() {

    var page = require("../pageObjects/nonAngularPageObjectSample.js");

    beforeEach(function() {
        page.go();
    });

    it("should", function() {
        page.search("Santiago Esteva");
    });
});
