const Browser = require('zombie');
const checkStandardPageElements = require('./components/standardPageElements.js');
	

describe('Emission Page check', function() {
	this.timeout(60*1000);
	
	var browser = new Browser({site: 'http://programtv.onet.pl', waitDuration: 25*1000});
	
	before(function() {
		return browser.visit('/').then(function() { return browser.clickLink('#emissions .boxTVHolder .boxTV a') });
	});

	it('should open properly', function() {
		browser.assert.success();
	});

	checkStandardPageElements(browser);

});
