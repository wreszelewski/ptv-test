var checkStandardPageElements = function(browser) {
	describe('Standard page elements check', function() {

		describe('Portal Bar', function() {
			it('should contain Main Page link', function() {
				browser.assert.link(".pageHeader a", "Program TV", "http://programtv.onet.pl/");
			});
			it('should contain Onet logo', function() {
				browser.assert.element(".pageHeader a img");
				browser.assert.attribute(".pageHeader a img", "alt", "onet.");
			});
			it('should contain Search', function() {
				browser.assert.elements(".pageHeader form input", 2);
				
			});
		});

		describe('Top Menu', function() {
			it('should contain homepage link', function() {
				browser.assert.link('.topStripe a', "", "/");
			});
			it('should contain channels link', function() {
				browser.assert.link('.topStripe a', "Stacje", "/stacje");
			});
			it('should contain articles link', function() {
				browser.assert.link('.topStripe a', "Magazyn", "/artykuly");
			});
			it('should contain complete categories menu', function() {
				var categories = [
					['rio', 'Rio'],
				];
				categories.forEach(function(category) {
					browser.assert.link('.topStripe .catsGrid a', category[1], "/kategoria/" + category[0]);
				});
			});
		});
	});
}

module.exports = checkStandardPageElements;
