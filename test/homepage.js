const Browser = require('zombie');
const checkStandardPageElements = require('./components/standardPageElements.js');
	

describe('HomePage check', function() {
	this.timeout(30000);
	
	var browser = new Browser({site: 'http://programtv.onet.pl', waitDuration: 25*1000});
	
	before(function(done) {
		browser.visit('/', done);
	});

	checkStandardPageElements(browser);

	describe('check emissions canvas', function() {

		it('should contain emission link', function() {
			browser.assert.elements('#emissions .boxTVHolder .boxTV a', {atLeast: 1});
		});
	}); 

});
