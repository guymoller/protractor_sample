// at the top of the test spec:
var fs = require('fs');

// ... other code

// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
	var stream = fs.createWriteStream(filename);

	stream.write(new Buffer(data, 'base64'));
	stream.end();
}





describe("login tests", function() {
	beforeEach(function() {
        // for non angular pages
        return browser.ignoreSynchronization = true;
    });

	it("should load the login page", function() {
		browser.get("/");
		expect(element(by.css('.hero-unit h1')).getText()).toEqual("Welcome to the Sample App");
	});

	it("should login with guy.moller", function() {
		browser.get("/signin");
		var email = element(by.id("session_email"));
		var password = element(by.id("session_password"));
		var submit = element(by.css("form .btn.btn-large.btn-primary"));
		email.sendKeys('guy.moller@gmail.com');
		password.sendKeys('password');
		submit.click();
		expect(element(by.css('aside.span4 h1')).getText()).toEqual("Guy Moller");
		browser.takeScreenshot().then(function (png) {
			writeScreenShot(png, 'output/after_login.png');
		});

	});
});
