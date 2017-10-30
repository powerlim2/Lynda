
/*
 * GET home page.
 */

var flights = require('../data');

var flight = require('../flight');

for (var number in flights) {
	flights[number] = flight(flights[number]);
}

exports.flight = function(req, res){
	var number = req.param('number');  // :number in app.get()

	if (typeof flights[number] === 'undefined') {
		res.status(404).json({status: 'error: no flight'});
	} else {
		res.json(flights[number].getInformation());
	}
};